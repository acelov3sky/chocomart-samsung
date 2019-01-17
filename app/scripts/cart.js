import Vue from '../../node_modules/vue/dist/vue';
import {TheMask} from 'vue-the-mask';

var vm = new Vue({
    el: '#cart',
    data: function () {
        return {
            productsList: [
                {
                    id: '0',
                    image: './../app/assets/images/note9/note-9-front.png',
                    productType: 'Смартфоны',
                    productName: 'Смартфон Samsung Galaxy Note 9, 64 GB, Black',
                    productPrice: '125000',
                    productCount: 1
                },
                {
                    id: '1',
                    image: './../app/assets/images/note9/note-9-front.png',
                    productType: 'Смартфоны',
                    productName: 'Смартфон Samsung Galaxy Note 9, 128 GB, Black',
                    productPrice: '150000',
                    productCount: 4
                },
                {
                    id: '2',
                    image: './../app/assets/images/note9/note-9-front.png',
                    productType: 'Смартфоны',
                    productName: 'Смартфон Samsung Galaxy Note 9, 256 GB, Black',
                    productPrice: '225000',
                    productCount: 2
                }
            ],
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
                    typeName: 'online-card',
                    state: false
                },
                {
                    id: 2,
                    typeName: 'bank-transfer',
                    state: false
                },
                {
                    id: 3,
                    typeName: 'bank-branch',
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
                        isChosen: true
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
            productsSum: 0,
            productsCount: 0,
            productCountText:'товаров',

            chosenProducts: true,
            customerInformation: false,
            deliveryInformation: false,

            entityChecked: false,
            entityBlock: false,

            isPromocodeEnabled: false,
            isBonusEnabled: false,

            blockName: 'Выбранные товары',
            cartStateName: 'Корзина'
        }
    },
    mounted() {
        this.productsList.forEach((item) => {
            this.productsSum += (parseInt(item.productPrice) * parseInt(item.productCount));
            this.productsCount += parseInt(item.productCount);
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
                if(product.id === productID) {
                    this.productsSum -= (product.productPrice * product.productCount);
                    this.productsCount -= product.productCount;
                    this.productsList.splice(this.productsList.indexOf(product), 1);
                    this.computeProductsCount();
                }
            });
        },
        changeProductCount (productID, event) {
            this.productsList.forEach((product) => {
                if(product.id === productID) {
                    if(event === '+') {
                        product.productCount++;
                        this.productsSum = 0;
                        this.productsCount = 0;
                        this.productsList.forEach((item) => {
                            this.productsSum += (item.productPrice * item.productCount);
                            this.productsCount += item.productCount;
                        });
                        this.computeProductsCount();
                    }
                    if(event === '-' && product.productCount > 1){
                        product.productCount--;
                        this.productsSum = 0;
                        this.productsCount = 0;
                        this.productsList.forEach((item) => {
                            this.productsSum += (item.productPrice * item.productCount);
                            this.productsCount += item.productCount;
                        });
                        this.computeProductsCount();
                    }else if(event === '-' && product.productCount < 1) {
                        product.productCount = 1;
                        this.computeProductsCount();
                    }
                }
            });
        },
        computeProductsCount() {
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
                this.customerInformation = false;
                this.deliveryInformation = true;
                this.blockCompletion[1].completion = true;
                this.entityBlock = false;
                this.blockName = 'Доставка и оплата';
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
        }
    }
});