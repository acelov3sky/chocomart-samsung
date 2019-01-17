webpackJsonp([0],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* Подключаем стили */
__webpack_require__(130);

__webpack_require__(131);

/* Инициализация приложения */
jQuery(function () {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(137);
__webpack_require__(138);

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
    $('.toggle').click(function () {
        if ($(this).children('div').hasClass('parameter-triangle--opened')) {
            $(this).siblings('div').addClass('parameter-content-wrapper--closed');
            $(this).siblings('div').removeClass('parameter-content-wrapper--opened');
            $(this).children('div').removeClass('parameter-triangle--opened');
            $(this).children('h5').removeClass('title--active');
        } else {
            $(this).siblings('div').removeClass('parameter-content-wrapper--closed');
            $(this).siblings('div').addClass('parameter-content-wrapper--opened');
            $(this).children('div').addClass('parameter-triangle--opened');
            $(this).children('h5').addClass('title--active');
        }
        // $(this).nextAll('.parameter-content-wrapper').toggle(400, 'linear');
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

var swiper = new Swiper('.swiper-product', {
    // centeredSlides: true,
    loop: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-product-next',
        prevEl: '.swiper-product-prev'
    }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_the_mask__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_the_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_the_mask__);


var vm = new Vue({
    el: '#cart',
    data: function () {
        return {
            productsList: [{
                id: '0',
                image: './../app/assets/images/note9/note-9-front.png',
                productType: 'Смартфоны',
                productName: 'Смартфон Samsung Galaxy Note 9, 64 GB, Black',
                productPrice: '125000',
                productCount: 1
            }, {
                id: '1',
                image: './../app/assets/images/note9/note-9-front.png',
                productType: 'Смартфоны',
                productName: 'Смартфон Samsung Galaxy Note 9, 128 GB, Black',
                productPrice: '150000',
                productCount: 4
            }, {
                id: '2',
                image: './../app/assets/images/note9/note-9-front.png',
                productType: 'Смартфоны',
                productName: 'Смартфон Samsung Galaxy Note 9, 256 GB, Black',
                productPrice: '225000',
                productCount: 2
            }],
            blockCompletion: [{
                block: 'chosenProducts',
                completion: false
            }, {
                block: 'customerInformation',
                completion: false
            }],
            deliveryTypes: [{
                id: 1,
                typeName: 'pickup',
                state: false
            }, {
                id: 2,
                typeName: 'economy',
                state: false
            }, {
                id: 3,
                typeName: 'express',
                state: false
            }, {
                id: 4,
                typeName: 'post',
                state: false
            }],
            paymentTypes: [{
                id: 1,
                typeName: 'online-card',
                state: false
            }, {
                id: 2,
                typeName: 'bank-transfer',
                state: false
            }, {
                id: 3,
                typeName: 'bank-branch',
                state: false
            }, {
                id: 4,
                typeName: 'courier-cash',
                state: false
            }, {
                id: 5,
                typeName: 'installment-plan',
                state: false
            }, {
                id: 6,
                typeName: 'credit',
                state: false
            }],
            paymentPeriods: {
                credit: [{
                    id: 1,
                    value: 3,
                    isChosen: true
                }, {
                    id: 2,
                    value: 6,
                    isChosen: false
                }, {
                    id: 3,
                    value: 12,
                    isChosen: false
                }, {
                    id: 4,
                    value: 24,
                    isChosen: false
                }],
                installment: [{
                    id: 1,
                    value: 3,
                    isChosen: true
                }, {
                    id: 4,
                    value: 24,
                    isChosen: false
                }]
            },
            productsSum: 0,
            productsCount: 0,
            productCountText: 'товаров',

            chosenProducts: true,
            customerInformation: false,
            deliveryInformation: false,

            entityChecked: false,
            entityBlock: false,

            isPromocodeEnabled: false,
            isBonusEnabled: false,

            blockName: 'Выбранные товары',
            cartStateName: 'Корзина'
        };
    },
    mounted() {
        this.productsList.forEach(item => {
            this.productsSum += parseInt(item.productPrice) * parseInt(item.productCount);
            this.productsCount += parseInt(item.productCount);
        });

        this.productsCount === 1 ? this.productCountText = 'товар' : this.productsCount > 1 && this.productsCount < 5 ? this.productCountText = 'товара' : this.productsCount > 4 ? this.productCountText = 'товаров' : this.productCountText = 'товаров';
    },
    components: {
        TheMask: __WEBPACK_IMPORTED_MODULE_0_vue_the_mask__["TheMask"]
    },
    methods: {
        deleteProduct(productID) {
            this.productsList.forEach(product => {
                if (product.id === productID) {
                    this.productsSum -= product.productPrice * product.productCount;
                    this.productsCount -= product.productCount;
                    this.productsList.splice(this.productsList.indexOf(product), 1);
                    this.computeProductsCount();
                }
            });
        },
        changeProductCount(productID, event) {
            this.productsList.forEach(product => {
                if (product.id === productID) {
                    if (event === '+') {
                        product.productCount++;
                        this.productsSum = 0;
                        this.productsCount = 0;
                        this.productsList.forEach(item => {
                            this.productsSum += item.productPrice * item.productCount;
                            this.productsCount += item.productCount;
                        });
                        this.computeProductsCount();
                    }
                    if (event === '-' && product.productCount > 1) {
                        product.productCount--;
                        this.productsSum = 0;
                        this.productsCount = 0;
                        this.productsList.forEach(item => {
                            this.productsSum += item.productPrice * item.productCount;
                            this.productsCount += item.productCount;
                        });
                        this.computeProductsCount();
                    } else if (event === '-' && product.productCount < 1) {
                        product.productCount = 1;
                        this.computeProductsCount();
                    }
                }
            });
        },
        computeProductsCount() {
            this.productsCount === 1 ? this.productCountText = 'товар' : this.productsCount > 1 && this.productsCount < 5 ? this.productCountText = 'товара' : this.productsCount > 4 ? this.productCountText = 'товаров' : this.productCountText = 'товаров';
        },
        submitBlock(nextState) {
            if (nextState === 1 && this.customerInformation === false) {
                this.chosenProducts = false;
                this.customerInformation = true;
                this.blockCompletion[0].completion = true;
                this.blockName = 'Информация о покупателе';
            } else if (nextState === 2) {
                this.customerInformation = false;
                this.deliveryInformation = true;
                this.blockCompletion[1].completion = true;
                this.entityBlock = false;
                this.blockName = 'Доставка и оплата';
            }
        },
        openCompletedBlock(currentState, completionState) {
            if (completionState) {
                if (currentState === 1) {
                    this.chosenProducts = !this.chosenProducts;
                } else if (currentState === 2) {
                    this.customerInformation = !this.customerInformation;
                } else if (currentState === 3 && this.entityChecked) {
                    this.entityBlock = !this.entityBlock;
                }
            } else {
                return false;
            }
        },
        openMobileBlock(openState, completionStateOne, completionStateTwo) {
            if (completionStateOne && completionStateTwo) {
                if (openState === 1) {
                    if (!this.chosenProducts) {
                        this.chosenProducts = true;
                        this.customerInformation = false;
                        this.deliveryInformation = false;
                        this.blockName = 'Выбранные товары';
                    } else {
                        this.chosenProducts = false;
                        this.deliveryInformation = true;
                        this.blockName = 'Доставка и оплата';
                    }
                } else if (openState === 2) {
                    if (!this.customerInformation) {
                        this.customerInformation = true;
                        this.deliveryInformation = false;
                        this.chosenProducts = false;
                        this.blockName = 'Информация о покупателе';
                    } else {
                        this.customerInformation = false;
                        this.deliveryInformation = true;
                        this.blockName = 'Доставка и оплата';
                    }
                }
            } else if (completionStateOne && !completionStateTwo) {
                if (!this.chosenProducts) {
                    this.chosenProducts = true;
                    this.customerInformation = false;
                    this.blockName = 'Выбранные товары';
                } else {
                    this.chosenProducts = false;
                    this.customerInformation = true;
                    this.blockName = 'Информация о покупателе';
                }
            }
        },
        changeState(currentState) {
            if (currentState === 'entity') {
                this.entityChecked = !this.entityChecked;
                if (this.entityChecked) {
                    this.entityBlock = true;
                } else {
                    this.entityBlock = false;
                }
            }
        },
        checkType(checkType, state, id) {
            if (checkType === 'delivery') {
                this.deliveryTypes.forEach(type => {
                    if (type.id === id) {
                        type.state = !state;
                    } else {
                        type.state = false;
                    }
                });
            } else if (checkType === 'payment') {
                this.paymentTypes.forEach(type => {
                    if (type.id === id) {
                        type.state = !state;
                    } else {
                        type.state = false;
                    }
                });
            }
        },
        chooseCreditPeriod(period, paymentType) {
            if (period !== "") {
                if (paymentType === 'credit') {
                    this.paymentPeriods.credit.forEach(p => {
                        p.value === period ? p.isChosen = true : p.isChosen = false;
                    });
                } else if (paymentType === 'installment') {
                    this.paymentPeriods.installment.forEach(p => {
                        p.value === period ? p.isChosen = true : p.isChosen = false;
                    });
                }
            } else {
                alert("ERROR! Period is empty!");
            }
        }
    }
});

/***/ }),

/***/ 137:
/***/ (function(module, exports) {



/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.registration-sign_close-button').click(function () {
    $('#registration-sign').css({ 'display': 'none' });
});
$('.registration-to-login').click(function () {
    $('.login-form').css({ 'display': 'block' });
    $('.registration-form').css({ 'display': 'none' });
});
$('.login-to-registration').click(function () {
    $('.login-form').css({ 'display': 'none' });
    $('.registration-form').css({ 'display': 'block' });
});

setTimeout(function () {
    $('#registration-sign').css({ 'display': 'block' });
}, 1500);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[129]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9yZWdpc3RyYXRpb24tc2lnbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic2ltdWxhdGVUb3VjaCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ2bSIsIlZ1ZSIsImVsIiwiZGF0YSIsInByb2R1Y3RzTGlzdCIsImlkIiwiaW1hZ2UiLCJwcm9kdWN0VHlwZSIsInByb2R1Y3ROYW1lIiwicHJvZHVjdFByaWNlIiwicHJvZHVjdENvdW50IiwiYmxvY2tDb21wbGV0aW9uIiwiYmxvY2siLCJjb21wbGV0aW9uIiwiZGVsaXZlcnlUeXBlcyIsInR5cGVOYW1lIiwic3RhdGUiLCJwYXltZW50VHlwZXMiLCJwYXltZW50UGVyaW9kcyIsImNyZWRpdCIsInZhbHVlIiwiaXNDaG9zZW4iLCJpbnN0YWxsbWVudCIsInByb2R1Y3RzU3VtIiwicHJvZHVjdHNDb3VudCIsInByb2R1Y3RDb3VudFRleHQiLCJjaG9zZW5Qcm9kdWN0cyIsImN1c3RvbWVySW5mb3JtYXRpb24iLCJkZWxpdmVyeUluZm9ybWF0aW9uIiwiZW50aXR5Q2hlY2tlZCIsImVudGl0eUJsb2NrIiwiaXNQcm9tb2NvZGVFbmFibGVkIiwiaXNCb251c0VuYWJsZWQiLCJibG9ja05hbWUiLCJjYXJ0U3RhdGVOYW1lIiwibW91bnRlZCIsImZvckVhY2giLCJpdGVtIiwicGFyc2VJbnQiLCJjb21wb25lbnRzIiwiVGhlTWFzayIsIm1ldGhvZHMiLCJkZWxldGVQcm9kdWN0IiwicHJvZHVjdElEIiwicHJvZHVjdCIsInNwbGljZSIsImluZGV4T2YiLCJjb21wdXRlUHJvZHVjdHNDb3VudCIsImNoYW5nZVByb2R1Y3RDb3VudCIsImV2ZW50Iiwic3VibWl0QmxvY2siLCJuZXh0U3RhdGUiLCJvcGVuQ29tcGxldGVkQmxvY2siLCJjdXJyZW50U3RhdGUiLCJjb21wbGV0aW9uU3RhdGUiLCJvcGVuTW9iaWxlQmxvY2siLCJvcGVuU3RhdGUiLCJjb21wbGV0aW9uU3RhdGVPbmUiLCJjb21wbGV0aW9uU3RhdGVUd28iLCJjaGFuZ2VTdGF0ZSIsImNoZWNrVHlwZSIsInR5cGUiLCJjaG9vc2VDcmVkaXRQZXJpb2QiLCJwZXJpb2QiLCJwYXltZW50VHlwZSIsInAiLCJhbGVydCIsImNzcyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSOztBQUVBLG1CQUFBQSxDQUFRLEdBQVI7O0FBRUE7QUFDQUMsT0FBTyxZQUFVLENBQ2hCLENBREQsRTs7Ozs7Ozs7QUNOQSx5Qzs7Ozs7OztBQ0FBLG1CQUFBRCxDQUFRLEdBQVI7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSO0FBQ0EsbUJBQUFBLENBQVEsR0FBUjtBQUNBLG1CQUFBQSxDQUFRLEdBQVI7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSLEU7Ozs7Ozs7QUNKQSx5Q0FBQUUsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDeEJGLE1BQUUsU0FBRixFQUFhRyxLQUFiLENBQW1CLFlBQVU7QUFDekIsWUFBR0gsRUFBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0JDLFFBQXhCLENBQWlDLDRCQUFqQyxDQUFILEVBQW1FO0FBQy9ETCxjQUFFLElBQUYsRUFBUU0sUUFBUixDQUFpQixLQUFqQixFQUF3QkMsUUFBeEIsQ0FBaUMsbUNBQWpDO0FBQ0FQLGNBQUUsSUFBRixFQUFRTSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCRSxXQUF4QixDQUFvQyxtQ0FBcEM7QUFDQVIsY0FBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0JJLFdBQXhCLENBQW9DLDRCQUFwQztBQUNBUixjQUFFLElBQUYsRUFBUUksUUFBUixDQUFpQixJQUFqQixFQUF1QkksV0FBdkIsQ0FBbUMsZUFBbkM7QUFDSCxTQUxELE1BTUk7QUFDQVIsY0FBRSxJQUFGLEVBQVFNLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0JFLFdBQXhCLENBQW9DLG1DQUFwQztBQUNBUixjQUFFLElBQUYsRUFBUU0sUUFBUixDQUFpQixLQUFqQixFQUF3QkMsUUFBeEIsQ0FBaUMsbUNBQWpDO0FBQ0FQLGNBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCRyxRQUF4QixDQUFpQyw0QkFBakM7QUFDQVAsY0FBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsSUFBakIsRUFBdUJHLFFBQXZCLENBQWdDLGVBQWhDO0FBQ0g7QUFDRDtBQUNILEtBZEQ7QUFlSCxDQWhCRCxFOzs7Ozs7OztBQ0FBLElBQUlFLFNBQVMsSUFBSUMsTUFBSixDQUFXLGlCQUFYLEVBQThCO0FBQ3ZDO0FBQ0FDLFVBQU0sSUFGaUM7QUFHdkNDLG1CQUFlLEtBSHdCO0FBSXZDQyxnQkFBWTtBQUNSQyxnQkFBUSxzQkFEQTtBQUVSQyxnQkFBUTtBQUZBO0FBSjJCLENBQTlCLENBQWIsQzs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQSxJQUFJQyxLQUFLLElBQUlDLEdBQUosQ0FBUTtBQUNiQyxRQUFJLE9BRFM7QUFFYkMsVUFBTSxZQUFZO0FBQ2QsZUFBTztBQUNIQywwQkFBYyxDQUNWO0FBQ0lDLG9CQUFJLEdBRFI7QUFFSUMsdUJBQU8sK0NBRlg7QUFHSUMsNkJBQWEsV0FIakI7QUFJSUMsNkJBQWEsOENBSmpCO0FBS0lDLDhCQUFjLFFBTGxCO0FBTUlDLDhCQUFjO0FBTmxCLGFBRFUsRUFTVjtBQUNJTCxvQkFBSSxHQURSO0FBRUlDLHVCQUFPLCtDQUZYO0FBR0lDLDZCQUFhLFdBSGpCO0FBSUlDLDZCQUFhLCtDQUpqQjtBQUtJQyw4QkFBYyxRQUxsQjtBQU1JQyw4QkFBYztBQU5sQixhQVRVLEVBaUJWO0FBQ0lMLG9CQUFJLEdBRFI7QUFFSUMsdUJBQU8sK0NBRlg7QUFHSUMsNkJBQWEsV0FIakI7QUFJSUMsNkJBQWEsK0NBSmpCO0FBS0lDLDhCQUFjLFFBTGxCO0FBTUlDLDhCQUFjO0FBTmxCLGFBakJVLENBRFg7QUEyQkhDLDZCQUFpQixDQUNiO0FBQ0lDLHVCQUFPLGdCQURYO0FBRUlDLDRCQUFZO0FBRmhCLGFBRGEsRUFLYjtBQUNJRCx1QkFBTyxxQkFEWDtBQUVJQyw0QkFBWTtBQUZoQixhQUxhLENBM0JkO0FBcUNIQywyQkFBZSxDQUNYO0FBQ0lULG9CQUFJLENBRFI7QUFFSVUsMEJBQVUsUUFGZDtBQUdJQyx1QkFBTztBQUhYLGFBRFcsRUFNWDtBQUNJWCxvQkFBSSxDQURSO0FBRUlVLDBCQUFVLFNBRmQ7QUFHSUMsdUJBQU87QUFIWCxhQU5XLEVBV1g7QUFDSVgsb0JBQUksQ0FEUjtBQUVJVSwwQkFBVSxTQUZkO0FBR0lDLHVCQUFPO0FBSFgsYUFYVyxFQWdCWDtBQUNJWCxvQkFBSSxDQURSO0FBRUlVLDBCQUFVLE1BRmQ7QUFHSUMsdUJBQU87QUFIWCxhQWhCVyxDQXJDWjtBQTJESEMsMEJBQWMsQ0FDVjtBQUNJWixvQkFBSSxDQURSO0FBRUlVLDBCQUFVLGFBRmQ7QUFHSUMsdUJBQU87QUFIWCxhQURVLEVBTVY7QUFDSVgsb0JBQUksQ0FEUjtBQUVJVSwwQkFBVSxlQUZkO0FBR0lDLHVCQUFPO0FBSFgsYUFOVSxFQVdWO0FBQ0lYLG9CQUFJLENBRFI7QUFFSVUsMEJBQVUsYUFGZDtBQUdJQyx1QkFBTztBQUhYLGFBWFUsRUFnQlY7QUFDSVgsb0JBQUksQ0FEUjtBQUVJVSwwQkFBVSxjQUZkO0FBR0lDLHVCQUFPO0FBSFgsYUFoQlUsRUFxQlY7QUFDSVgsb0JBQUksQ0FEUjtBQUVJVSwwQkFBVSxrQkFGZDtBQUdJQyx1QkFBTztBQUhYLGFBckJVLEVBMEJWO0FBQ0lYLG9CQUFJLENBRFI7QUFFSVUsMEJBQVUsUUFGZDtBQUdJQyx1QkFBTztBQUhYLGFBMUJVLENBM0RYO0FBMkZIRSw0QkFBZ0I7QUFDWkMsd0JBQVEsQ0FDSjtBQUNJZCx3QkFBSSxDQURSO0FBRUllLDJCQUFPLENBRlg7QUFHSUMsOEJBQVU7QUFIZCxpQkFESSxFQU1KO0FBQ0loQix3QkFBSSxDQURSO0FBRUllLDJCQUFPLENBRlg7QUFHSUMsOEJBQVU7QUFIZCxpQkFOSSxFQVdKO0FBQ0loQix3QkFBSSxDQURSO0FBRUllLDJCQUFPLEVBRlg7QUFHSUMsOEJBQVU7QUFIZCxpQkFYSSxFQWdCSjtBQUNJaEIsd0JBQUksQ0FEUjtBQUVJZSwyQkFBTyxFQUZYO0FBR0lDLDhCQUFVO0FBSGQsaUJBaEJJLENBREk7QUF1QlpDLDZCQUFhLENBQ1Q7QUFDSWpCLHdCQUFJLENBRFI7QUFFSWUsMkJBQU8sQ0FGWDtBQUdJQyw4QkFBVTtBQUhkLGlCQURTLEVBTVQ7QUFDSWhCLHdCQUFJLENBRFI7QUFFSWUsMkJBQU8sRUFGWDtBQUdJQyw4QkFBVTtBQUhkLGlCQU5TO0FBdkJELGFBM0ZiO0FBK0hIRSx5QkFBYSxDQS9IVjtBQWdJSEMsMkJBQWUsQ0FoSVo7QUFpSUhDLDhCQUFpQixTQWpJZDs7QUFtSUhDLDRCQUFnQixJQW5JYjtBQW9JSEMsaUNBQXFCLEtBcElsQjtBQXFJSEMsaUNBQXFCLEtBcklsQjs7QUF1SUhDLDJCQUFlLEtBdklaO0FBd0lIQyx5QkFBYSxLQXhJVjs7QUEwSUhDLGdDQUFvQixLQTFJakI7QUEySUhDLDRCQUFnQixLQTNJYjs7QUE2SUhDLHVCQUFXLGtCQTdJUjtBQThJSEMsMkJBQWU7QUE5SVosU0FBUDtBQWdKSCxLQW5KWTtBQW9KYkMsY0FBVTtBQUNOLGFBQUsvQixZQUFMLENBQWtCZ0MsT0FBbEIsQ0FBMkJDLElBQUQsSUFBVTtBQUNoQyxpQkFBS2QsV0FBTCxJQUFxQmUsU0FBU0QsS0FBSzVCLFlBQWQsSUFBOEI2QixTQUFTRCxLQUFLM0IsWUFBZCxDQUFuRDtBQUNBLGlCQUFLYyxhQUFMLElBQXNCYyxTQUFTRCxLQUFLM0IsWUFBZCxDQUF0QjtBQUNILFNBSEQ7O0FBTUEsYUFBS2MsYUFBTCxLQUF1QixDQUF2QixHQUEyQixLQUFLQyxnQkFBTCxHQUF3QixPQUFuRCxHQUNLLEtBQUtELGFBQUwsR0FBcUIsQ0FBckIsSUFBMEIsS0FBS0EsYUFBTCxHQUFxQixDQUEvQyxHQUFtRCxLQUFLQyxnQkFBTCxHQUF3QixRQUEzRSxHQUNJLEtBQUtELGFBQUwsR0FBcUIsQ0FBckIsR0FBeUIsS0FBS0MsZ0JBQUwsR0FBd0IsU0FBakQsR0FBNkQsS0FBS0EsZ0JBQUwsR0FBd0IsU0FGOUY7QUFHSCxLQTlKWTtBQStKYmMsZ0JBQVk7QUFDUkMsUUFBQSw4REFBQUE7QUFEUSxLQS9KQztBQWtLYkMsYUFBUztBQUNMQyxzQkFBZUMsU0FBZixFQUEwQjtBQUN0QixpQkFBS3ZDLFlBQUwsQ0FBa0JnQyxPQUFsQixDQUEyQlEsT0FBRCxJQUFhO0FBQ25DLG9CQUFHQSxRQUFRdkMsRUFBUixLQUFlc0MsU0FBbEIsRUFBNkI7QUFDekIseUJBQUtwQixXQUFMLElBQXFCcUIsUUFBUW5DLFlBQVIsR0FBdUJtQyxRQUFRbEMsWUFBcEQ7QUFDQSx5QkFBS2MsYUFBTCxJQUFzQm9CLFFBQVFsQyxZQUE5QjtBQUNBLHlCQUFLTixZQUFMLENBQWtCeUMsTUFBbEIsQ0FBeUIsS0FBS3pDLFlBQUwsQ0FBa0IwQyxPQUFsQixDQUEwQkYsT0FBMUIsQ0FBekIsRUFBNkQsQ0FBN0Q7QUFDQSx5QkFBS0csb0JBQUw7QUFDSDtBQUNKLGFBUEQ7QUFRSCxTQVZJO0FBV0xDLDJCQUFvQkwsU0FBcEIsRUFBK0JNLEtBQS9CLEVBQXNDO0FBQ2xDLGlCQUFLN0MsWUFBTCxDQUFrQmdDLE9BQWxCLENBQTJCUSxPQUFELElBQWE7QUFDbkMsb0JBQUdBLFFBQVF2QyxFQUFSLEtBQWVzQyxTQUFsQixFQUE2QjtBQUN6Qix3QkFBR00sVUFBVSxHQUFiLEVBQWtCO0FBQ2RMLGdDQUFRbEMsWUFBUjtBQUNBLDZCQUFLYSxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsNkJBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSw2QkFBS3BCLFlBQUwsQ0FBa0JnQyxPQUFsQixDQUEyQkMsSUFBRCxJQUFVO0FBQ2hDLGlDQUFLZCxXQUFMLElBQXFCYyxLQUFLNUIsWUFBTCxHQUFvQjRCLEtBQUszQixZQUE5QztBQUNBLGlDQUFLYyxhQUFMLElBQXNCYSxLQUFLM0IsWUFBM0I7QUFDSCx5QkFIRDtBQUlBLDZCQUFLcUMsb0JBQUw7QUFDSDtBQUNELHdCQUFHRSxVQUFVLEdBQVYsSUFBaUJMLFFBQVFsQyxZQUFSLEdBQXVCLENBQTNDLEVBQTZDO0FBQ3pDa0MsZ0NBQVFsQyxZQUFSO0FBQ0EsNkJBQUthLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSw2QkFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLDZCQUFLcEIsWUFBTCxDQUFrQmdDLE9BQWxCLENBQTJCQyxJQUFELElBQVU7QUFDaEMsaUNBQUtkLFdBQUwsSUFBcUJjLEtBQUs1QixZQUFMLEdBQW9CNEIsS0FBSzNCLFlBQTlDO0FBQ0EsaUNBQUtjLGFBQUwsSUFBc0JhLEtBQUszQixZQUEzQjtBQUNILHlCQUhEO0FBSUEsNkJBQUtxQyxvQkFBTDtBQUNILHFCQVRELE1BU00sSUFBR0UsVUFBVSxHQUFWLElBQWlCTCxRQUFRbEMsWUFBUixHQUF1QixDQUEzQyxFQUE4QztBQUNoRGtDLGdDQUFRbEMsWUFBUixHQUF1QixDQUF2QjtBQUNBLDZCQUFLcUMsb0JBQUw7QUFDSDtBQUNKO0FBQ0osYUExQkQ7QUEyQkgsU0F2Q0k7QUF3Q0xBLCtCQUF1QjtBQUNuQixpQkFBS3ZCLGFBQUwsS0FBdUIsQ0FBdkIsR0FBMkIsS0FBS0MsZ0JBQUwsR0FBd0IsT0FBbkQsR0FDSyxLQUFLRCxhQUFMLEdBQXFCLENBQXJCLElBQTBCLEtBQUtBLGFBQUwsR0FBcUIsQ0FBL0MsR0FBbUQsS0FBS0MsZ0JBQUwsR0FBd0IsUUFBM0UsR0FDSSxLQUFLRCxhQUFMLEdBQXFCLENBQXJCLEdBQXlCLEtBQUtDLGdCQUFMLEdBQXdCLFNBQWpELEdBQTZELEtBQUtBLGdCQUFMLEdBQXdCLFNBRjlGO0FBR0gsU0E1Q0k7QUE2Q0x5QixvQkFBYUMsU0FBYixFQUF3QjtBQUNwQixnQkFBR0EsY0FBYyxDQUFkLElBQW1CLEtBQUt4QixtQkFBTCxLQUE2QixLQUFuRCxFQUEwRDtBQUN0RCxxQkFBS0QsY0FBTCxHQUFzQixLQUF0QjtBQUNBLHFCQUFLQyxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLHFCQUFLaEIsZUFBTCxDQUFxQixDQUFyQixFQUF3QkUsVUFBeEIsR0FBcUMsSUFBckM7QUFDQSxxQkFBS29CLFNBQUwsR0FBaUIseUJBQWpCO0FBQ0gsYUFMRCxNQUtNLElBQUlrQixjQUFjLENBQWxCLEVBQXFCO0FBQ3ZCLHFCQUFLeEIsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxxQkFBS0MsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSxxQkFBS2pCLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JFLFVBQXhCLEdBQXFDLElBQXJDO0FBQ0EscUJBQUtpQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EscUJBQUtHLFNBQUwsR0FBaUIsbUJBQWpCO0FBQ0g7QUFDSixTQTFESTtBQTJETG1CLDJCQUFvQkMsWUFBcEIsRUFBa0NDLGVBQWxDLEVBQW1EO0FBQy9DLGdCQUFHQSxlQUFILEVBQW9CO0FBQ2hCLG9CQUFHRCxpQkFBaUIsQ0FBcEIsRUFBdUI7QUFDbkIseUJBQUszQixjQUFMLEdBQXNCLENBQUMsS0FBS0EsY0FBNUI7QUFDSCxpQkFGRCxNQUVNLElBQUcyQixpQkFBaUIsQ0FBcEIsRUFBdUI7QUFDekIseUJBQUsxQixtQkFBTCxHQUEyQixDQUFDLEtBQUtBLG1CQUFqQztBQUNILGlCQUZLLE1BRUEsSUFBRzBCLGlCQUFpQixDQUFqQixJQUFzQixLQUFLeEIsYUFBOUIsRUFBNEM7QUFDOUMseUJBQUtDLFdBQUwsR0FBbUIsQ0FBQyxLQUFLQSxXQUF6QjtBQUNIO0FBQ0osYUFSRCxNQVFNO0FBQ0YsdUJBQU8sS0FBUDtBQUNIO0FBRUosU0F4RUk7QUF5RUx5Qix3QkFBaUJDLFNBQWpCLEVBQTRCQyxrQkFBNUIsRUFBZ0RDLGtCQUFoRCxFQUFvRTtBQUNoRSxnQkFBR0Qsc0JBQXNCQyxrQkFBekIsRUFBNkM7QUFDekMsb0JBQUdGLGNBQWMsQ0FBakIsRUFBb0I7QUFDaEIsd0JBQUcsQ0FBQyxLQUFLOUIsY0FBVCxFQUF5QjtBQUNyQiw2QkFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNBLDZCQUFLQyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLDZCQUFLQyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLDZCQUFLSyxTQUFMLEdBQWlCLGtCQUFqQjtBQUNILHFCQUxELE1BS007QUFDRiw2QkFBS1AsY0FBTCxHQUFzQixLQUF0QjtBQUNBLDZCQUFLRSxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLDZCQUFLSyxTQUFMLEdBQWlCLG1CQUFqQjtBQUNIO0FBQ0osaUJBWEQsTUFZSyxJQUFHdUIsY0FBYyxDQUFqQixFQUFvQjtBQUNyQix3QkFBRyxDQUFDLEtBQUs3QixtQkFBVCxFQUE4QjtBQUMxQiw2QkFBS0EsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSw2QkFBS0MsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSw2QkFBS0YsY0FBTCxHQUFzQixLQUF0QjtBQUNBLDZCQUFLTyxTQUFMLEdBQWlCLHlCQUFqQjtBQUNILHFCQUxELE1BS007QUFDRiw2QkFBS04sbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSw2QkFBS0MsbUJBQUwsR0FBMkIsSUFBM0I7QUFDQSw2QkFBS0ssU0FBTCxHQUFpQixtQkFBakI7QUFDSDtBQUNKO0FBQ0osYUF6QkQsTUF5Qk0sSUFBR3dCLHNCQUFzQixDQUFDQyxrQkFBMUIsRUFBOEM7QUFDaEQsb0JBQUcsQ0FBQyxLQUFLaEMsY0FBVCxFQUF5QjtBQUNyQix5QkFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNBLHlCQUFLQyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLHlCQUFLTSxTQUFMLEdBQWlCLGtCQUFqQjtBQUNILGlCQUpELE1BSU07QUFDRix5QkFBS1AsY0FBTCxHQUFzQixLQUF0QjtBQUNBLHlCQUFLQyxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLHlCQUFLTSxTQUFMLEdBQWlCLHlCQUFqQjtBQUNIO0FBQ0o7QUFDSixTQTlHSTtBQStHTDBCLG9CQUFZTixZQUFaLEVBQTBCO0FBQ3RCLGdCQUFHQSxpQkFBaUIsUUFBcEIsRUFBOEI7QUFDMUIscUJBQUt4QixhQUFMLEdBQXFCLENBQUMsS0FBS0EsYUFBM0I7QUFDQSxvQkFBRyxLQUFLQSxhQUFSLEVBQXVCO0FBQ25CLHlCQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0gsaUJBRkQsTUFFTTtBQUNGLHlCQUFLQSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSjtBQUNKLFNBeEhJO0FBeUhMOEIsa0JBQVdBLFNBQVgsRUFBc0I1QyxLQUF0QixFQUE2QlgsRUFBN0IsRUFBaUM7QUFDN0IsZ0JBQUd1RCxjQUFjLFVBQWpCLEVBQTZCO0FBQ3pCLHFCQUFLOUMsYUFBTCxDQUFtQnNCLE9BQW5CLENBQTRCeUIsSUFBRCxJQUFVO0FBQ2pDLHdCQUFHQSxLQUFLeEQsRUFBTCxLQUFZQSxFQUFmLEVBQW1CO0FBQ2Z3RCw2QkFBSzdDLEtBQUwsR0FBYSxDQUFDQSxLQUFkO0FBQ0gscUJBRkQsTUFFTTtBQUNGNkMsNkJBQUs3QyxLQUFMLEdBQWEsS0FBYjtBQUNIO0FBQ0osaUJBTkQ7QUFPSCxhQVJELE1BUU0sSUFBRzRDLGNBQWMsU0FBakIsRUFBNEI7QUFDOUIscUJBQUszQyxZQUFMLENBQWtCbUIsT0FBbEIsQ0FBMkJ5QixJQUFELElBQVU7QUFDaEMsd0JBQUdBLEtBQUt4RCxFQUFMLEtBQVlBLEVBQWYsRUFBbUI7QUFDZndELDZCQUFLN0MsS0FBTCxHQUFhLENBQUNBLEtBQWQ7QUFDSCxxQkFGRCxNQUVNO0FBQ0Y2Qyw2QkFBSzdDLEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSixpQkFORDtBQU9IO0FBQ0osU0EzSUk7QUE0SUw4QywyQkFBbUJDLE1BQW5CLEVBQTJCQyxXQUEzQixFQUF3QztBQUNwQyxnQkFBR0QsV0FBVyxFQUFkLEVBQWtCO0FBQ2Qsb0JBQUlDLGdCQUFnQixRQUFwQixFQUE4QjtBQUMxQix5QkFBSzlDLGNBQUwsQ0FBb0JDLE1BQXBCLENBQTJCaUIsT0FBM0IsQ0FBb0M2QixDQUFELElBQU87QUFDdENBLDBCQUFFN0MsS0FBRixLQUFZMkMsTUFBWixHQUFxQkUsRUFBRTVDLFFBQUYsR0FBYSxJQUFsQyxHQUF5QzRDLEVBQUU1QyxRQUFGLEdBQWEsS0FBdEQ7QUFDSCxxQkFGRDtBQUdILGlCQUpELE1BSU0sSUFBRzJDLGdCQUFnQixhQUFuQixFQUFrQztBQUNwQyx5QkFBSzlDLGNBQUwsQ0FBb0JJLFdBQXBCLENBQWdDYyxPQUFoQyxDQUF5QzZCLENBQUQsSUFBTztBQUMzQ0EsMEJBQUU3QyxLQUFGLEtBQVkyQyxNQUFaLEdBQXFCRSxFQUFFNUMsUUFBRixHQUFhLElBQWxDLEdBQXlDNEMsRUFBRTVDLFFBQUYsR0FBYSxLQUF0RDtBQUNILHFCQUZEO0FBR0g7QUFDSixhQVZELE1BVU07QUFDRjZDLHNCQUFNLHlCQUFOO0FBQ0g7QUFDSjtBQTFKSTtBQWxLSSxDQUFSLENBQVQsQzs7Ozs7Ozs7Ozs7Ozs7QUNGQSx5Q0FBQWxGLEVBQUUsaUNBQUYsRUFBcUNHLEtBQXJDLENBQTJDLFlBQVc7QUFDbERILE1BQUUsb0JBQUYsRUFBd0JtRixHQUF4QixDQUE0QixFQUFDLFdBQVcsTUFBWixFQUE1QjtBQUNILENBRkQ7QUFHQW5GLEVBQUUsd0JBQUYsRUFBNEJHLEtBQTVCLENBQWtDLFlBQVc7QUFDekNILE1BQUUsYUFBRixFQUFpQm1GLEdBQWpCLENBQXFCLEVBQUMsV0FBVyxPQUFaLEVBQXJCO0FBQ0FuRixNQUFFLG9CQUFGLEVBQXdCbUYsR0FBeEIsQ0FBNEIsRUFBQyxXQUFXLE1BQVosRUFBNUI7QUFDSCxDQUhEO0FBSUFuRixFQUFFLHdCQUFGLEVBQTRCRyxLQUE1QixDQUFrQyxZQUFXO0FBQ3pDSCxNQUFFLGFBQUYsRUFBaUJtRixHQUFqQixDQUFxQixFQUFDLFdBQVcsTUFBWixFQUFyQjtBQUNBbkYsTUFBRSxvQkFBRixFQUF3Qm1GLEdBQXhCLENBQTRCLEVBQUMsV0FBVyxPQUFaLEVBQTVCO0FBQ0gsQ0FIRDs7QUFLQUMsV0FBVyxZQUFZO0FBQ25CcEYsTUFBRSxvQkFBRixFQUF3Qm1GLEdBQXhCLENBQTRCLEVBQUMsV0FBVyxPQUFaLEVBQTVCO0FBQ0gsQ0FGRCxFQUVHLElBRkgsRSIsImZpbGUiOiJhc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0YLQuNC70LggKi9cbnJlcXVpcmUoJ19zdHlsZXMvbWFpbi5sZXNzJyk7XG5cbnJlcXVpcmUoJy4vc2NyaXB0cy9tYWluLmpzJyk7XG5cbi8qINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPICovXG5qUXVlcnkoZnVuY3Rpb24oKXtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvYXNzZXRzL2xlc3MvbWFpbi5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9zaWRlYmFyLmpzJyk7XG5yZXF1aXJlKCcuL3Byb2R1Y3QuanMnKTtcbnJlcXVpcmUoJy4vY2FydCcpO1xucmVxdWlyZSgnLi9wcm9kdWN0LWNhcmQuanMnKTtcbnJlcXVpcmUoJy4vcmVnaXN0cmF0aW9uLXNpZ24nKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL21haW4uanMiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy50b2dnbGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBpZigkKHRoaXMpLmNoaWxkcmVuKCdkaXYnKS5oYXNDbGFzcygncGFyYW1ldGVyLXRyaWFuZ2xlLS1vcGVuZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnZGl2JykuYWRkQ2xhc3MoJ3BhcmFtZXRlci1jb250ZW50LXdyYXBwZXItLWNsb3NlZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnZGl2JykucmVtb3ZlQ2xhc3MoJ3BhcmFtZXRlci1jb250ZW50LXdyYXBwZXItLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignZGl2JykucmVtb3ZlQ2xhc3MoJ3BhcmFtZXRlci10cmlhbmdsZS0tb3BlbmVkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdoNScpLnJlbW92ZUNsYXNzKCd0aXRsZS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1jbG9zZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItdHJpYW5nbGUtLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignaDUnKS5hZGRDbGFzcygndGl0bGUtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vICQodGhpcykubmV4dEFsbCgnLnBhcmFtZXRlci1jb250ZW50LXdyYXBwZXInKS50b2dnbGUoNDAwLCAnbGluZWFyJyk7XG4gICAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcHJvZHVjdCcsIHtcbiAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNpbXVsYXRlVG91Y2g6IGZhbHNlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1wcm9kdWN0LW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLXByb2R1Y3QtcHJldidcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9wcm9kdWN0LmpzIiwiaW1wb3J0IHtUaGVNYXNrfSBmcm9tICd2dWUtdGhlLW1hc2snO1xuXG52YXIgdm0gPSBuZXcgVnVlKHtcbiAgICBlbDogJyNjYXJ0JyxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnLi8uLi9hcHAvYXNzZXRzL2ltYWdlcy9ub3RlOS9ub3RlLTktZnJvbnQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCA2NCBHQiwgQmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6ICcxMjUwMDAnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogJ9Ch0LzQsNGA0YLRhNC+0L3RiycsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lOiAn0KHQvNCw0YDRgtGE0L7QvSBTYW1zdW5nIEdhbGF4eSBOb3RlIDksIDEyOCBHQiwgQmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6ICcxNTAwMDAnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogJ9Ch0LzQsNGA0YLRhNC+0L3RiycsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lOiAn0KHQvNCw0YDRgtGE0L7QvSBTYW1zdW5nIEdhbGF4eSBOb3RlIDksIDI1NiBHQiwgQmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2U6ICcyMjUwMDAnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmxvY2tDb21wbGV0aW9uOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibG9jazogJ2Nob3NlblByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2s6ICdjdXN0b21lckluZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVsaXZlcnlUeXBlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lOiAncGlja3VwJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlTmFtZTogJ2Vjb25vbXknLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lOiAnZXhwcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lOiAnb25saW5lLWNhcmQnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lOiAnYmFuay10cmFuc2ZlcicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU6ICdiYW5rLWJyYW5jaCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU6ICdjb3VyaWVyLWNhc2gnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVOYW1lOiAnaW5zdGFsbG1lbnQtcGxhbicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdHlwZU5hbWU6ICdjcmVkaXQnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGF5bWVudFBlcmlvZHM6IHtcbiAgICAgICAgICAgICAgICBjcmVkaXQ6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hvc2VuOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nob3NlbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nob3NlbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nob3NlbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaW5zdGFsbG1lbnQ6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hvc2VuOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaG9zZW46IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvZHVjdHNTdW06IDAsXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiAwLFxuICAgICAgICAgICAgcHJvZHVjdENvdW50VGV4dDon0YLQvtCy0LDRgNC+0LInLFxuXG4gICAgICAgICAgICBjaG9zZW5Qcm9kdWN0czogdHJ1ZSxcbiAgICAgICAgICAgIGN1c3RvbWVySW5mb3JtYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgZGVsaXZlcnlJbmZvcm1hdGlvbjogZmFsc2UsXG5cbiAgICAgICAgICAgIGVudGl0eUNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW50aXR5QmxvY2s6IGZhbHNlLFxuXG4gICAgICAgICAgICBpc1Byb21vY29kZUVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNCb251c0VuYWJsZWQ6IGZhbHNlLFxuXG4gICAgICAgICAgICBibG9ja05hbWU6ICfQktGL0LHRgNCw0L3QvdGL0LUg0YLQvtCy0LDRgNGLJyxcbiAgICAgICAgICAgIGNhcnRTdGF0ZU5hbWU6ICfQmtC+0YDQt9C40L3QsCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1N1bSArPSAocGFyc2VJbnQoaXRlbS5wcm9kdWN0UHJpY2UpICogcGFyc2VJbnQoaXRlbS5wcm9kdWN0Q291bnQpKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNDb3VudCArPSBwYXJzZUludChpdGVtLnByb2R1Y3RDb3VudCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5wcm9kdWN0c0NvdW50ID09PSAxID8gdGhpcy5wcm9kdWN0Q291bnRUZXh0ID0gJ9GC0L7QstCw0YAnOlxuICAgICAgICAgICAgKHRoaXMucHJvZHVjdHNDb3VudCA+IDEgJiYgdGhpcy5wcm9kdWN0c0NvdW50IDwgNSA/IHRoaXMucHJvZHVjdENvdW50VGV4dCA9ICfRgtC+0LLQsNGA0LAnIDpcbiAgICAgICAgICAgICAgICAodGhpcy5wcm9kdWN0c0NvdW50ID4gNCA/IHRoaXMucHJvZHVjdENvdW50VGV4dCA9ICfRgtC+0LLQsNGA0L7QsicgOiB0aGlzLnByb2R1Y3RDb3VudFRleHQgPSAn0YLQvtCy0LDRgNC+0LInKSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFRoZU1hc2tcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZGVsZXRlUHJvZHVjdCAocHJvZHVjdElEKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzTGlzdC5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdC5pZCA9PT0gcHJvZHVjdElEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNTdW0gLT0gKHByb2R1Y3QucHJvZHVjdFByaWNlICogcHJvZHVjdC5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzQ291bnQgLT0gcHJvZHVjdC5wcm9kdWN0Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNMaXN0LnNwbGljZSh0aGlzLnByb2R1Y3RzTGlzdC5pbmRleE9mKHByb2R1Y3QpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlUHJvZHVjdHNDb3VudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VQcm9kdWN0Q291bnQgKHByb2R1Y3RJRCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNMaXN0LmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZihwcm9kdWN0LmlkID09PSBwcm9kdWN0SUQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQgPT09ICcrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcm9kdWN0Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNTdW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c0NvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzU3VtICs9IChpdGVtLnByb2R1Y3RQcmljZSAqIGl0ZW0ucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzQ291bnQgKz0gaXRlbS5wcm9kdWN0Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZVByb2R1Y3RzQ291bnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihldmVudCA9PT0gJy0nICYmIHByb2R1Y3QucHJvZHVjdENvdW50ID4gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByb2R1Y3RDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1N1bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNTdW0gKz0gKGl0ZW0ucHJvZHVjdFByaWNlICogaXRlbS5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNDb3VudCArPSBpdGVtLnByb2R1Y3RDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlUHJvZHVjdHNDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihldmVudCA9PT0gJy0nICYmIHByb2R1Y3QucHJvZHVjdENvdW50IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcm9kdWN0Q291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlUHJvZHVjdHNDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVQcm9kdWN0c0NvdW50KCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c0NvdW50ID09PSAxID8gdGhpcy5wcm9kdWN0Q291bnRUZXh0ID0gJ9GC0L7QstCw0YAnOlxuICAgICAgICAgICAgICAgICh0aGlzLnByb2R1Y3RzQ291bnQgPiAxICYmIHRoaXMucHJvZHVjdHNDb3VudCA8IDUgPyB0aGlzLnByb2R1Y3RDb3VudFRleHQgPSAn0YLQvtCy0LDRgNCwJyA6XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb2R1Y3RzQ291bnQgPiA0ID8gdGhpcy5wcm9kdWN0Q291bnRUZXh0ID0gJ9GC0L7QstCw0YDQvtCyJyA6IHRoaXMucHJvZHVjdENvdW50VGV4dCA9ICfRgtC+0LLQsNGA0L7QsicpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0QmxvY2sgKG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgaWYobmV4dFN0YXRlID09PSAxICYmIHRoaXMuY3VzdG9tZXJJbmZvcm1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNob3NlblByb2R1Y3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckluZm9ybWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrQ29tcGxldGlvblswXS5jb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrTmFtZSA9ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQv9C+0LrRg9C/0LDRgtC10LvQtSc7XG4gICAgICAgICAgICB9ZWxzZSBpZiAobmV4dFN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckluZm9ybWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxpdmVyeUluZm9ybWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrQ29tcGxldGlvblsxXS5jb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUJsb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja05hbWUgPSAn0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuQ29tcGxldGVkQmxvY2sgKGN1cnJlbnRTdGF0ZSwgY29tcGxldGlvblN0YXRlKSB7XG4gICAgICAgICAgICBpZihjb21wbGV0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9zZW5Qcm9kdWN0cyA9ICF0aGlzLmNob3NlblByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVySW5mb3JtYXRpb24gPSAhdGhpcy5jdXN0b21lckluZm9ybWF0aW9uO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRTdGF0ZSA9PT0gMyAmJiB0aGlzLmVudGl0eUNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUJsb2NrID0gIXRoaXMuZW50aXR5QmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9iaWxlQmxvY2sgKG9wZW5TdGF0ZSwgY29tcGxldGlvblN0YXRlT25lLCBjb21wbGV0aW9uU3RhdGVUd28pIHtcbiAgICAgICAgICAgIGlmKGNvbXBsZXRpb25TdGF0ZU9uZSAmJiBjb21wbGV0aW9uU3RhdGVUd28pIHtcbiAgICAgICAgICAgICAgICBpZihvcGVuU3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hvc2VuUHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvc2VuUHJvZHVjdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckluZm9ybWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5SW5mb3JtYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tOYW1lID0gJ9CS0YvQsdGA0LDQvdC90YvQtSDRgtC+0LLQsNGA0YsnO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3NlblByb2R1Y3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5SW5mb3JtYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja05hbWUgPSAn0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYob3BlblN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmN1c3RvbWVySW5mb3JtYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJJbmZvcm1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5SW5mb3JtYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvc2VuUHJvZHVjdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tOYW1lID0gJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINC+INC/0L7QutGD0L/QsNGC0LXQu9C1JztcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckluZm9ybWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5SW5mb3JtYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja05hbWUgPSAn0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2UgaWYoY29tcGxldGlvblN0YXRlT25lICYmICFjb21wbGV0aW9uU3RhdGVUd28pIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaG9zZW5Qcm9kdWN0cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3NlblByb2R1Y3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckluZm9ybWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tOYW1lID0gJ9CS0YvQsdGA0LDQvdC90YvQtSDRgtC+0LLQsNGA0YsnO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9zZW5Qcm9kdWN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVySW5mb3JtYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrTmFtZSA9ICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQv9C+0LrRg9C/0LDRgtC10LvQtSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VTdGF0ZShjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTdGF0ZSA9PT0gJ2VudGl0eScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUNoZWNrZWQgPSAhdGhpcy5lbnRpdHlDaGVja2VkO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZW50aXR5Q2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUJsb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5QmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrVHlwZSAoY2hlY2tUeXBlICxzdGF0ZSwgaWQpIHtcbiAgICAgICAgICAgIGlmKGNoZWNrVHlwZSA9PT0gJ2RlbGl2ZXJ5Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsaXZlcnlUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLnN0YXRlID0gIXN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLnN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoZWNrVHlwZSA9PT0gJ3BheW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXltZW50VHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS5zdGF0ZSA9ICFzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZS5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNob29zZUNyZWRpdFBlcmlvZChwZXJpb2QsIHBheW1lbnRUeXBlKSB7XG4gICAgICAgICAgICBpZihwZXJpb2QgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocGF5bWVudFR5cGUgPT09ICdjcmVkaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF5bWVudFBlcmlvZHMuY3JlZGl0LmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmFsdWUgPT09IHBlcmlvZCA/IHAuaXNDaG9zZW4gPSB0cnVlIDogcC5pc0Nob3NlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwYXltZW50VHlwZSA9PT0gJ2luc3RhbGxtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBheW1lbnRQZXJpb2RzLmluc3RhbGxtZW50LmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmFsdWUgPT09IHBlcmlvZCA/IHAuaXNDaG9zZW4gPSB0cnVlIDogcC5pc0Nob3NlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFUlJPUiEgUGVyaW9kIGlzIGVtcHR5IVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NhcnQuanMiLCIkKCcucmVnaXN0cmF0aW9uLXNpZ25fY2xvc2UtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnI3JlZ2lzdHJhdGlvbi1zaWduJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pXG59KVxuJCgnLnJlZ2lzdHJhdGlvbi10by1sb2dpbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy5sb2dpbi1mb3JtJykuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KVxuICAgICQoJy5yZWdpc3RyYXRpb24tZm9ybScpLmNzcyh7J2Rpc3BsYXknOiAnbm9uZSd9KVxufSlcbiQoJy5sb2dpbi10by1yZWdpc3RyYXRpb24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCcubG9naW4tZm9ybScpLmNzcyh7J2Rpc3BsYXknOiAnbm9uZSd9KVxuICAgICQoJy5yZWdpc3RyYXRpb24tZm9ybScpLmNzcyh7J2Rpc3BsYXknOiAnYmxvY2snfSlcbn0pXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICQoJyNyZWdpc3RyYXRpb24tc2lnbicpLmNzcyh7J2Rpc3BsYXknOiAnYmxvY2snfSlcbn0sIDE1MDApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9yZWdpc3RyYXRpb24tc2lnbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=