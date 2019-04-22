import {TheMask} from 'vue-the-mask';
import axios from 'axios';
import Vue from 'vue';
if(document.getElementById('cart')) {
    new Vue({
        el: '#cart',
        delimiters: ['~{', '}'],
        data: function () {
            return {
                loadingState: true,
                productsList: [],
                getData: [],
                productData: [],
                offers: [],
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
                isRunning: false,

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
                customerName: '',
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
        },
        mounted() {

            this.productData = orderData.data.data;

            console.log(this.productData, "smh");
            if(this.productData !== undefined) {
                if(this.productData.customerInformation !== undefined) {
                    this.customerName = this.productData.customerInformation.customerName;
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
            axios.get('/order/get-data').then((res) => {
                this.getData = res.body;
            });

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
                            axios.get('/order/add/' + product.product.id + '/' + 0);
                        }
                    });
                }else {
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
                this.getData.offers.forEach((item) => {
                    if(item.product.id === productID) {
                        clearTimeout(this.counterTimeout);
                        this.counterTimeout = setTimeout(() => {
                            if(item.count !== this.productCounter) {
                                axios.get('/order/add/' + productID + '/' + this.productCounter).then((res) => {
                                    console.log(res);
                                });
                            }else if(item.count === this.productCounter) {
                                console.log('same');
                            }
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
                if(nextState === 1 && this.customerInformation === false && this.productsList.length > 0) {
                    if(this.productsList.length > 0) {
                        this.order.blockState = 1;
                        this.chosenProducts = false;
                        this.customerInformation = true;
                        this.blockCompletion[0].completion = true;
                        this.blockName = 'Информация о покупателе';
                    }
                    if(this.productData !== undefined) {
                        if(this.productData.blockState !== undefined) {
                            axios.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                        else if(this.productData.blockState === '1') {
                            this.gatherCustomerInformation();
                            this.chosenProducts = false;
                            axios.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }else if(this.productData.blockState === '2') {
                            this.gatherCustomerInformation();
                            this.chosenProducts = false;
                            this.gatherDeliveryInformation();
                            axios.post('/order/set-data', {data: this.order}, {
                                emulateJSON: true
                            });
                        }
                    }else {
                        this.order.blockState = 1;

                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                }else if (nextState === 2 && this.productsList.length > 0) {
                    if(this.customerEmail === null) {
                        this.customerEmail = '';
                    }
                    if(this.customerName  && this.customerSurname
                        && this.customerEmail.indexOf('@') > -1 &&
                        this.customerEmail.indexOf('.') > -1  && this.customerPhone) {

                        this.customerInformation = false;
                        this.deliveryInformation = true;
                        this.blockCompletion[1].completion = true;
                        this.entityBlock = false;
                        this.blockName = 'Доставка и оплата';
                    }
                    if(this.productData.blockState === '1') {
                        this.gatherCustomerInformation();
                        this.order.blockState = 2;
                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                    if(this.productData.blockState === '2') {
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
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
                            clearTimeout(this.typeTimeout);

                            this.typeTimeout = setTimeout(() => {
                                this.gatherCustomerInformation();
                                this.gatherDeliveryInformation();
                                axios.post('/order/set-data', {data: this.order}, {
                                    emulateJSON: true
                                });
                            }, 2000);
                        }else {
                            type.state = false;
                        }
                    });
                }else if(checkType === 'payment') {
                    this.paymentTypes.forEach((type) => {
                        if(type.id === id) {
                            type.state = !state;
                            clearTimeout(this.typeTimeout);

                            this.typeTimeout = setTimeout(() => {
                                this.gatherCustomerInformation();
                                this.gatherDeliveryInformation();
                                axios.post('/order/set-data', {data: this.order}, {
                                    emulateJSON: true
                                });
                            }, 2000);
                        }else {
                            type.state = false;
                        }
                    });
                }
            },
            checkInputData() {
                if(this.isRunning === true) {
                    clearTimeout(this.inputTimeout);
                    this.isRunning = false;
                }
                this.isRunning = true;
                this.inputTimeout = setTimeout(() => {
                    if(this.productData.blockState === '1') {
                        this.gatherCustomerInformation();
                        this.order.blockState = 1;

                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }else if(this.productData.blockState === '2') {
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        this.order.blockState = 2;

                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                }, 2000);
            },
            checkSubscribe() {
                clearTimeout(this.inputTimeout);
                this.inputTimeout = setTimeout(() => {

                    if (this.productData.blockState === '1') {
                        this.gatherCustomerInformation();
                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    } else if (this.productData.blockState === '2') {
                        this.gatherCustomerInformation();
                        this.gatherDeliveryInformation();
                        axios.post('/order/set-data', {data: this.order}, {
                            emulateJSON: true
                        });
                    }
                }, 2000);
            },
            gatherCustomerInformation() {
                this.order.blockState = 1;
                this.order.customerInformation = {
                    customerName: this.customerName,
                    customerSurname: this.customerSurname,
                    phone: this.customerPhone,
                    email: this.customerEmail,
                    subscribeStatus: this.customerSubscribe
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
                clearTimeout(this.checkTimeout);

                this.checkTimeout = setTimeout(() => {
                    this.order.blockState = 2;
                    this.gatherCustomerInformation();
                    this.gatherDeliveryInformation();
                    axios.post('/order/set-data', {data: this.order}, {
                        emulateJSON: true
                    });
                }, 2000);
            },
            actionRedirect(url) {
                if(url !== undefined) {
                    window.location.href = url;
                }else {
                    return false;
                }
            },
            submitCheckout() {
                console.log(this.order);
                axios.get('/order/checkout').then((res) => {
                    console.log(res.action);
                    this.actions = res.actions;
                    if(this.actions.redirect) {
                        this.actionRedirect(this.actions.redirect);
                    }
                });
            },
            loading() {
                $('#loader').css('display', 'none');
            }
        }
    });
}