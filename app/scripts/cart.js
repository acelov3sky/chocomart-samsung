import {TheMask} from 'vue-the-mask';
import axios from 'axios';
var vm = new Vue({
    el: '#cart',
    delimiters: ['~{', '}'],
    data: function () {
        return {
            productsList: [],
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
            deliveryTypeID: null,

            //Variables of Blocks States
            chosenProducts: true,
            customerInformation: false,
            deliveryInformation: false,

            //Variables of Radio Buttons Status
            entityBlock: false,

            isPromocodeEnabled: false,
            isBonusEnabled: false,

            //Text variables
            blockName: 'Выбранные товары',
            cartStateName: 'Корзина',

            //Variables of inputs values
            customerName: null,
            customerSurname: null,
            customerPhone: null,
            customerEmail: null,
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
    mounted() {
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
            this.productsList.forEach((product) => {
                if(product.product.id === productID) {
                    this.productsSum -= (product.offer.price * product.count);
                    this.productsCount -= product.count;
                    this.productsList.splice(this.productsList.indexOf(product), 1);
                    axios.get('/order/add/' + product.product.id + '/' + 0);
                    this.computeProductsCount();
                }
            });
        },
        changeProductCount (productID, event) {
            this.productsList.forEach((product) => {
                if(product.product.id === productID) {
                    let timeout = null;
                    if(event === '+') {
                        product.count++;
                        clearTimeout(timeout);
                        setTimeout(() => {
                            this.computeCartResult();
                            axios.get('/order/add/' + product.product.id + '/' + product.count);
                            this.computeProductsCountText();
                        }, 500);
                    }
                    if(event === '-' && product.count > 1){
                        product.count--;
                        clearTimeout(timeout);
                        setTimeout(() => {
                            this.computeCartResult();
                            axios.get('/order/add/' + product.product.id + '/' + product.count);
                            this.computeProductsCountText();
                        }, 500);
                    }else if(event === '-' && product.count < 1) {
                        product.count = 1;
                        this.computeProductsCountText();
                    }
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
            if(nextState === 1 && this.customerInformation === false) {
                this.chosenProducts = false;
                this.customerInformation = true;
                this.blockCompletion[0].completion = true;
                this.blockName = 'Информация о покупателе';
            }else if (nextState === 2) {
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
                    //gathering data from form
                    this.order.customerInformation = {};
                    this.order.customerInformation.customerName = this.customerName;
                    this.order.customerInformation.customerSurname = this.customerSurname;
                    this.order.customerInformation.phone = this.customerPhone;
                    this.order.customerInformation.email = this.customerEmail;
                    this.order.customerInformation.subscribeStatus = this.customerSubscribe;

                    if(this.entityChecked === true) {
                        this.order.legalStatus = true;
                        this.order.companyInformation = {};
                        this.order.companyInformation.companyName = this.companyName;
                        this.order.companyInformation.companyAddress = this.companyAddress;
                        this.order.companyInformation.BIN = this.companyBIN;
                        this.order.companyInformation.IIK = this.companyIIK;
                        this.order.companyInformation.Bank = this.companyBank;
                        this.order.companyInformation.BIK = this.companyBIK;
                        this.order.companyInformation.ndsStatus = this.companyNDS;
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
                if(this.entityChecked) {
                    this.entityBlock = true;
                }else {
                    this.entityBlock = false;
                }
            }
        },
        checkType (checkType ,state, id) {
            if(checkType === 'delivery') {
                this.deliveryTypes.forEach((type) => {
                    if(type.id === id) {
                        type.state = !state;
                        this.deliveryTypeID = id;
                    }else {
                        type.state = false;
                    }
                });
            }else if(checkType === 'payment') {
                this.paymentTypes.forEach((type) => {
                    if(type.id === id) {
                        type.state = !state;
                    }else {
                        type.state = false;
                    }
                });
            }
        },
        chooseCreditPeriod(period, paymentType) {
            if(period !== "") {
                if (paymentType === 'credit') {
                    this.paymentPeriods.credit.forEach((p) => {
                        p.value === period ? p.isChosen = true : p.isChosen = false;
                    });
                }else if(paymentType === 'installment') {
                    this.paymentPeriods.installment.forEach((p) => {
                        p.value === period ? p.isChosen = true : p.isChosen = false;
                    });
                }
            }else {
                alert("ERROR! Period is empty!");
            }
        },
        gatherData() {
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
        }
    }
});