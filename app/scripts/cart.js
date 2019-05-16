import {TheMask} from 'vue-the-mask';
import axios from 'axios';
if(document.getElementById('cart')) {
    new Vue({
        el: '#cart',
        delimiters: ['~{', '}'],
        data: function () {
            return {
                loadingState: true,
                formValid: false,
                productsList: [],
                productData: [],
                actions: null,
                blockCompletion: [
                    {
                        block: 'chosenProducts',
                        completion: false
                    },
                    {
                        block: 'customerInformation',
                        completion: false
                    }
                ],
                deliveryTypes: [
                    {
                        id: 1,
                        typeName: 'pickup',
                        state: false
                    },
                    {
                        id: 2,
                        typeName: 'economy',
                        state: false
                    },
                    {
                        id: 3,
                        typeName: 'express',
                        state: false
                    },
                    {
                        id: 4,
                        typeName: 'post',
                        state: false
                    }
                ],
                paymentTypes: [
                    {
                        id: 1,
                        typeName: 'online-payment',
                        state: false
                    },
                    {
                        id: 2,
                        typeName: 'bank-transfer',
                        state: false
                    },
                    {
                        id: 3,
                        typeName: 'in-bank-payment',
                        state: false
                    },
                    {
                        id: 4,
                        typeName: 'courier-cash',
                        state: false
                    },
                    {
                        id: 5,
                        typeName: 'installment-plan',
                        state: false
                    },
                    {
                        id: 6,
                        typeName: 'credit',
                        state: false
                    }
                ],
                paymentPeriods: {
                    credit: [
                        {
                            id: 1,
                            value: 3,
                            isChosen: false
                        },
                        {
                            id: 2,
                            value: 6,
                            isChosen: false
                        },
                        {
                            id: 3,
                            value: 12,
                            isChosen: false
                        },
                        {
                            id: 4,
                            value: 24,
                            isChosen: false
                        }
                    ],
                    installment: [
                        {
                            id: 1,
                            value: 3,
                            isChosen: true
                        },
                        {
                            id: 4,
                            value: 24,
                            isChosen: false
                        }
                    ]
                },
                //Variables of Cart Summary
                productsSum: 0,
                productsCount: 0,
                productCountText:'товаров',
                order: {},

                inputTimeout: null,
                checkTimeout: null,
                counterTimeout: null,
                typeTimeout: null,
                productCounter: 0,

                //Variables of Blocks States
                chosenProducts: true,
                customerInformation: false,
                deliveryInformation: false,

                //Variables of Radio Buttons Status
                entityBlock: false,

                //Text variables
                blockName: 'Выбранные товары',
                cartStateName: 'Корзина',

                //Variables of inputs values
                customername: '',
                customerSurname: '',
                customerPhone: '',
                customerEmail: '',
                customerSubscribe: false,

                entityChecked: false,
                companyName: '',
                companyAddress: '',
                companyBIN: '',
                companyIIK: '',
                companyBank: '',
                companyBIK: '',
                companyNDS: false,

                deliveryCity: '',
                receiverPhone: '',
                streetName: '',
                houseNumber: '',
                flatNumber: ''

            }
        },
        beforeMount() {
            this.loading();
            if(userData !== 'null' || userData !== undefined || userData !== '') {
                this.customername = userData.username;
                this.customerPhone = userData['user-phone'];
                this.customerEmail = userData['user-email'];
            }else {
                this.customername = '';
                $('#registration-sign').css('display', 'block');
            }
        },
        mounted() {
            this.productData = orderData.data.data;

            if(this.productData !== undefined) {
                if(this.productData.customerInformation !== undefined) {
                    this.customername = this.productData.customerInformation.customerName;
                    this.customerSurname = this.productData.customerInformation.customerSurname;
                    this.customerPhone = this.productData.customerInformation.phone;
                    this.customerEmail = this.productData.customerInformation.email;
                    this.productData.customerInformation.subscribeStatus === 'true' ? this.customerSubscribe = true : this.customerSubscribe = false;
                }

                if(this.productData.blockState === "1") {
                    this.blockCompletion[0].completion = true;
                    this.chosenProducts = false;
                    this.customerInformation = true;
                    this.deliveryInformation = false;
                }else if(this.productData.blockState === "2") {
                    this.chosenProducts = false;
                    this.customerInformation = false;
                    this.deliveryInformation = true;
                    this.blockCompletion[0].completion = true;
                    this.blockCompletion[1].completion = true;

                    if(this.productData.deliveryInformation !== undefined) {
                        let type = this.productData.deliveryInformation.deliveryType;

                        this.deliveryCity = this.productData.deliveryInformation.deliveryCity;
                        this.deliveryTypes.forEach((item) => {
                            if(type === 'economy' || type === 'express') {
                                if(item.typeName === type) {
                                    item.state = true;
                                    this.receiverPhone = this.productData.deliveryInformation.receiverPhone;
                                    this.streetName = this.productData.deliveryInformation.streetName;
                                    this.houseNumber = this.productData.deliveryInformation.houseNumber;
                                    this.flatNumber = this.productData.deliveryInformation.flatNumber;
                                }
                            }else {
                                if(item.typeName === type) {
                                    item.state = true;
                                }
                            }
                        });
                        this.paymentTypes.forEach((item) => {
                            if(item.typeName === this.productData.deliveryInformation.paymentType) {
                                item.state = true;
                            }
                        });
                    }
                }
            }

            this.productsList = orderData.offers;

            this.productsList.forEach((item) => {
                this.productsSum += (parseInt(item.offer.price) * parseInt(item.count));
                this.productsCount += parseInt(item.count);
            });

            this.productsCount === 1 ? this.productCountText = 'товар':
                (this.productsCount > 1 && this.productsCount < 5 ? this.productCountText = 'товара' :
                    (this.productsCount > 4 ? this.productCountText = 'товаров' : this.productCountText = 'товаров'));
        },
        components: {
            TheMask
        },
        methods: {
            deleteProduct (productID) {
                if(this.productsList.length > 0) {
                    this.productsList.forEach((product) => {
                        if(product.product.id === productID) {
                            this.productsSum -= (product.offer.price * product.count);
                            this.productsCount -= product.count;
                            this.productsList.splice(this.productsList.indexOf(product), 1);
                            this.$http.get('/order/add/' + product.product.id + '/' + 0);
                        }
                    });
                }else {
                    $('.empty-block__enable').css('display', 'block');
                    document.getElementById('products-submit').disabled = true;
                    this.order.blockState = 1;
                }
            },
            changeProductCount (productID, event) {
                this.productsList.forEach((p) => {
                    if(p.product.id === productID) {
                        if(event === '+') {
                            p.count++;
                        }
                        if(event === '-' && p.count > 1){
                            p.count--;
                        }else if(event === '-' && p.count < 1) {
                            p.count = 1;
                            this.computeProductsCountText();
                        }
                        this.productCounter = p.count;
                    }
                    this.computeCartResult();
                    this.computeProductsCountText();
                });
                this.productsList.forEach((item) => {
                    if(item.product.id === productID) {
                        clearTimeout(this.counterTimeout);
                        this.counterTimeout = setTimeout(() => {
                            this.$http.get('/order/add/' + productID + '/' + this.productCounter).then((res) => {
                                console.log(res);
                            });
                        }, 3000);
                    }
                });
            },
            computeCartResult () {
                this.productsSum = 0;
                this.productsCount = 0;
                this.productsList.forEach((item) => {
                    this.productsSum += (parseInt(item.offer.price) * parseInt(item.count));
                    this.productsCount += parseInt(item.count);
                });
            },
            computeProductsCountText() {
                this.productsCount === 1 ? this.productCountText = 'товар':
                    (this.productsCount > 1 && this.productsCount < 5 ? this.productCountText = 'товара' :
                        (this.productsCount > 4 ? this.productCountText = 'товаров' : this.productCountText = 'товаров'));
            },
            submitBlock (nextState) {
                if(nextState === 1 && this.productsList.length > 0) {

                    if(this.productData !== undefined) {
                        if(this.productData.blockState === undefined) {
                            this.order.blockState = 1;
                            this.$http.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                        else if(this.productData.blockState === '1') {
                            this.gatherCustomerInformation();

                            this.order.blockState = 1;
                            this.chosenProducts = false;
                            this.customerInformation = true;
                            this.blockCompletion[0].completion = true;
                            this.blockName = 'Информация о покупателе';

                            this.$http.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }else if(this.productData.blockState === '2') {
                            this.gatherCustomerInformation();
                            this.gatherDeliveryInformation();

                            this.chosenProducts = false;
                            this.customerInformation = false;
                            this.deliveryInformation = true;
                            this.blockCompletion[0].completion = true;
                            this.blockCompletion[1].completion = true;
                            this.entityBlock = false;
                            this.blockName = 'Доставка и оплата';

                            this.$http.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                    }else {
                        this.order.blockState = 1;

                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                        this.$http.get('/order/get-data').then((res) => {
                           this.productData = res.body.data.data;
                        });

                        this.order.blockState = 1;
                        this.chosenProducts = false;
                        this.customerInformation = true;
                        this.blockCompletion[0].completion = true;
                        this.blockName = 'Информация о покупателе';
                    }
                }else if (nextState === 2 && this.productsList.length > 0) {

                    let valid = null;

                    if(!this.customername || this.customername === '' || this.customername === undefined) {
                        $('#customer-name').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите имя').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    }else {
                        $('#customer-name').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        valid -= 1;
                    }

                    if(!this.customerSurname || this.customerSurname === '' || this.customerSurname === undefined) {
                        $('#customer-surname').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите фамилию').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    }else {
                        $('#customer-surname').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        valid -= 1;
                    }

                    if(this.customerEmail === null) {
                        this.customerEmail = '';
                    }

                    if(!this.customerEmail || this.customerEmail === '' || this.customerEmail === undefined) {
                        $('#customer-email').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильную эл.почту').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    }else if(! this.customerEmail.includes('@') || ! this.customerEmail.includes('.')) {
                        $('#customer-email').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильную эл.почту').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    } else {
                        $('#customer-email').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        valid -= 1;
                    }


                    if(!this.customerPhone || this.customerPhone === '' || this.customerPhone === undefined) {
                        $('#customer-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    }else if(this.customerPhone.length < 10){
                        $('#customer-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                        valid += 1;
                    }else {
                        $('#customer-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        valid -= 1;
                    }

                    if(valid === -4) {
                        if(this.productData.blockState === '1') {
                            this.gatherCustomerInformation();
                            this.order.blockState = 2;
                            this.$http.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                        if(this.productData.blockState === '2') {
                            this.gatherCustomerInformation();
                            this.gatherDeliveryInformation();
                            this.$http.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                        this.customerInformation = false;
                        this.deliveryInformation = true;
                        this.blockCompletion[1].completion = true;
                        this.entityBlock = false;
                        this.blockName = 'Доставка и оплата';

                    }else {
                        return false;
                    }
                }
            },
            validateForm(event) {
                let key = event.keyCode || event.charCode;

                if($(event.target).attr('id') === 'customer-name') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#customer-name').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#customer-name').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите имя').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#customer-name').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'customer-surname') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#customer-surname').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#customer-surname').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите имя').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#customer-surname').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'customer-phone') {

                    let phoneNumber = $('#customer-phone').val().replace('(', '').replace(')', '').replace(/ /g, '');

                    if(key !== 8 && phoneNumber.length === 0) {
                        $('#customer-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && phoneNumber.length <= 1) {
                            $('#customer-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else if(phoneNumber.length < 10){
                            $('#customer-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#customer-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'customer-email') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#customer-email').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#customer-email').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильную эл.почту').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#customer-email').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'delivery-street') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#delivery-street').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#delivery-street').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите название улицы').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#delivery-street').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'delivery-house') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#delivery-house').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#delivery-house').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите номер дома').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#delivery-house').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'delivery-flat') {
                    if(key !== 8 && $(event.target).val().length === 0) {
                        $('#delivery-flat').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && $(event.target).val().length <= 1) {
                            $('#delivery-flat').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите номер квартиры').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#delivery-flat').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

                if($(event.target).attr('id') === 'receiver-phone') {

                    let phoneNumber = $('#receiver-phone').val().replace('(', '').replace(')', '').replace(/ /g, '');

                    if(key !== 8 && phoneNumber.length === 0) {
                        $('#receiver-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        this.formValid = true;
                    }else {
                        if(key === 8 && phoneNumber.length <= 1) {
                            $('#receiver-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else if(phoneNumber.length < 10){
                            $('#receiver-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                            this.formValid = false;
                        }else {
                            $('#receiver-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                            this.formValid = true;
                        }
                    }
                }

            },
            openCompletedBlock (currentState, completionState) {
                if(completionState) {
                    if(currentState === 1) {
                        this.chosenProducts = !this.chosenProducts;
                    }else if(currentState === 2) {
                        this.customerInformation = !this.customerInformation;
                    }else if(currentState === 3 && this.entityChecked){
                        this.entityBlock = !this.entityBlock;
                    }
                }else {
                    return false;
                }

            },
            openMobileBlock (openState, completionStateOne, completionStateTwo) {
                if(completionStateOne && completionStateTwo) {
                    if(openState === 1) {
                        if(!this.chosenProducts) {
                            this.chosenProducts = true;
                            this.customerInformation = false;
                            this.deliveryInformation = false;
                            this.blockName = 'Выбранные товары';
                        }else {
                            this.chosenProducts = false;
                            this.deliveryInformation = true;
                            this.blockName = 'Доставка и оплата';
                        }
                    }
                    else if(openState === 2) {
                        if(!this.customerInformation) {
                            this.customerInformation = true;
                            this.deliveryInformation = false;
                            this.chosenProducts = false;
                            this.blockName = 'Информация о покупателе';
                        }else {
                            this.customerInformation = false;
                            this.deliveryInformation = true;
                            this.blockName = 'Доставка и оплата';
                        }
                    }
                }else if(completionStateOne && !completionStateTwo) {
                    if(!this.chosenProducts) {
                        this.chosenProducts = true;
                        this.customerInformation = false;
                        this.blockName = 'Выбранные товары';
                    }else {
                        this.chosenProducts = false;
                        this.customerInformation = true;
                        this.blockName = 'Информация о покупателе';
                    }
                }
            },
            changeState(currentState) {
                if(currentState === 'entity') {
                    this.entityChecked = !this.entityChecked;
                    this.entityChecked ? this.entityBlock = true : this.entityBlock = false;
                }
            },
            checkType (checkType ,state, id) {
                if(checkType === 'delivery') {
                    this.deliveryTypes.forEach((type) => {
                        if(type.id === id) {
                            type.state = !state;

                            if(type.state === true) {
                                $('#delivery-type-box').css('background', '#fff').children('.delivery--error-block').css('display', 'none').siblings('.delivery-error--triangle').css('display', 'none');

                                clearTimeout(this.typeTimeout);

                                this.typeTimeout = setTimeout(() => {
                                    this.gatherCustomerInformation();
                                    this.gatherDeliveryInformation();
                                    this.$http.post('/order/set-data', {data: this.order}, {
                                        emulateJSON: true
                                    });
                                }, 3000);

                            }
                        }else {
                            type.state = false;
                        }
                    });
                }else if(checkType === 'payment') {
                    this.paymentTypes.forEach((type) => {
                        if(type.id === id) {
                            type.state = !state;

                            if(type.state === true) {
                                $('#payment-type-box').css('background', '#fff').children('.delivery--error-block').css('display', 'none').siblings('.delivery-error--triangle').css('display', 'none');

                                clearTimeout(this.typeTimeout);

                                this.typeTimeout = setTimeout(() => {
                                    this.gatherCustomerInformation();
                                    this.gatherDeliveryInformation();
                                    this.$http.post('/order/set-data', {data: this.order}, {
                                        emulateJSON: true
                                    });
                                }, 3000);

                            }
                        }else {
                            type.state = false;
                        }
                    });
                }
            },
            checkInputData() {
                clearTimeout(this.inputTimeout);

                this.inputTimeout = setTimeout(() => {
                    if(this.productData.blockState === '1') {
                        this.gatherCustomerInformation();
                        this.order.blockState = 1;

                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }else if(this.productData.blockState === '2') {
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        this.order.blockState = 2;

                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                }, 3000);
            },
            checkSubscribe() {
                clearTimeout(this.inputTimeout);
                this.inputTimeout = setTimeout(() => {

                    if (this.productData.blockState === '1') {
                        this.gatherCustomerInformation();
                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    } else if (this.productData.blockState === '2') {
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                }, 3000);
            },
            gatherCustomerInformation() {
                this.order.blockState = 1;
                this.order.customerInformation = {
                    customerName: this.customername,
                    customerSurname: this.customerSurname,
                    phone: this.customerPhone,
                    email: this.customerEmail
                }
            },
            gatherDeliveryInformation() {
                this.order.blockState = 2;
                this.order.deliveryInformation = {};
                this.order.deliveryInformation.deliveryCity = this.deliveryCity;
                this.deliveryTypes.forEach((type) => {
                    if(type.state === true) {
                        if(type.id === 2 || type.id === 3) {
                            this.order.deliveryInformation.deliveryType = type.typeName;
                            this.order.deliveryInformation.receiverPhone = this.receiverPhone;
                            this.order.deliveryInformation.streetName = this.streetName;
                            this.order.deliveryInformation.houseNumber = this.houseNumber;
                            this.order.deliveryInformation.flatNumber = this.flatNumber;
                        }else {
                            this.order.deliveryInformation.deliveryType = type.typeName;
                        }
                    }
                });
                this.paymentTypes.forEach((payment) => {
                    if(payment.state === true) {
                        this.order.deliveryInformation.paymentType = payment.typeName;
                    }
                });
            },
            gatherData() {

                if(!this.deliveryCity || this.deliveryCity === '' || this.deliveryCity === undefined) {
                    $('#delivery-city').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Выберите город доставка').siblings('.error--triangle').css('display', 'block');
                }else {
                    $('#delivery-city').css('border-color', '#ebebeb').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');

                    clearTimeout(this.checkTimeout);

                    this.checkTimeout = setTimeout(() => {
                        this.order.blockState = 2;
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        this.$http.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }, 3000);
                }
            },
            actionRedirect(url) {
                if(url !== undefined) {
                    window.location.href = url;
                }else {
                    return false;
                }
            },
            submitCheckout() {

                let typeState = false;
                let paymentState = false;

                if(!this.deliveryCity || this.deliveryCity === '' || this.deliveryCity === undefined) {
                    $('#delivery-city').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Выберите город доставка').siblings('.error--triangle').css('display', 'block');
                }else {
                    $('#delivery-city').css('border-color', '#ebebeb').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                }

                this.deliveryTypes.forEach((type) => {
                    if(type.state) {
                        typeState = true;
                        return false;
                    }else {
                        $('#delivery-type-box').css('background', '#ffb8b8').children('.delivery--error-block').css('display', 'block').text('Выберите вид доставки').siblings('.delivery-error--triangle').css('display', 'block');
                    }
                });

                this.paymentTypes.forEach((type) => {
                    if(type.state) {
                        paymentState = true;
                        return false;
                    }else {
                        $('#payment-type-box').css('background', '#ffb8b8').children('.delivery--error-block').css('display', 'block').text('Выберите вид оплаты').siblings('.delivery-error--triangle').css('display', 'block');
                    }
                });

                if(typeState) {
                    $('#delivery-type-box').css('background', '#fff').children('.delivery--error-block').css('display', 'none').siblings('.delivery-error--triangle').css('display', 'none');

                    if(this.deliveryTypes[1].state === true || this.deliveryTypes[1].state === true) {

                        if(!this.customerPhone || this.customerPhone === '' || this.customerPhone === undefined) {
                            $('#receiver-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                        }else if(this.customerPhone.length < 10){
                            $('#receiver-phone').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите правильный номер телефона').siblings('.error--triangle').css('display', 'block');
                        }else {
                            $('#receiver-phone').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        }

                        if(!this.streetName || this.streetName === '' || this.streetName === undefined) {
                            $('#delivery-street').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите название улицы').siblings('.error--triangle').css('display', 'block');
                        }else {
                            $('#delivery-street').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        }

                        if(!this.houseNumber || this.houseNumber === '' || this.houseNumber === undefined) {
                            $('#delivery-house').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите номер дома').siblings('.error--triangle').css('display', 'block');
                        }else {
                            $('#delivery-house').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        }

                        if(!this.flatNumber || this.flatNumber === '' || this.flatNumber === undefined) {
                            $('#delivery-flat').css('border-color', '#FF6B6B').siblings('.information-input--error-block').css('display', 'block').text('Введите номер квартиры').siblings('.error--triangle').css('display', 'block');
                        }else {
                            $('#delivery-flat').css('border-color', '#707070').siblings('.information-input--error-block').css('display', 'none').siblings('.error--triangle').css('display', 'none');
                        }

                    }
                }
                if(paymentState) {
                    $('#payment-type-box').css('background', '#fff').children('.delivery--error-block').css('display', 'none').siblings('.delivery-error--triangle').css('display', 'none');
                }

                if(this.deliveryCity && paymentState && typeState) {
                    this.gatherCustomerInformation();
                    this.gatherDeliveryInformation();
                    this.$http.get('/order/checkout').then((res) => {
                        console.log(res.action);
                        this.actions = res.actions;
                        if(this.actions.redirect) {
                            this.actionRedirect(this.actions.redirect);
                        }
                    });
                }else {
                    return false;
                }
            },
            loading() {
                $('#loader').css('display', 'none');
            }
        }
    });
}