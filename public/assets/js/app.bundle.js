webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* Подключаем стили */
__webpack_require__(126);

__webpack_require__(127);

/* Инициализация приложения */
jQuery(function () {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
__webpack_require__(129);
__webpack_require__(130);
__webpack_require__(131);
__webpack_require__(159);

/***/ }),

/***/ 128:
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

/***/ 129:
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {let productsList = [{
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
    productCount: 1
}, {
    id: '2',
    image: './../app/assets/images/note9/note-9-front.png',
    productType: 'Смартфоны',
    productName: 'Смартфон Samsung Galaxy Note 9, 256 GB, Black',
    productPrice: '225000',
    productCount: 1
}];

$(document).ready(function () {
    let products = "";
    let productsCount = 0;
    let productsSummaryPrice = 0;
    let productsCountText = '';
    let submitText = 'Оформить заказ';
    $('.submit-form').text(submitText);

    for (let i = 0; i < productsList.length; i++) {
        let summaryPrice = productsList[i].productPrice * productsList[i].productCount;
        products += '<div class="option-wrapper__cart-item cart-item d-flex align-items-center"><p class="prodID" style="display: none;">' + productsList[i].id + '</p>\n' + '                        <div class="cart-item__item-image d-flex justify-content-center">\n' + '                            <img src="' + productsList[i].image + '" class="product-image">\n' + '                        </div>\n' + '                        <div class="cart-item__item-name item-name d-flex flex-column justify-content-start">\n' + '                            <h3 class="item-name__heading font-weight-normal">' + productsList[i].productType + '</h3>\n' + '                            <p class="item-name__par">' + productsList[i].productName + '</p>\n' + '                        </div>\n' + '                        <div class="cart-item__item-price item-price d-flex align-items-center justify-content-center">\n' + '                            ' + productsList[i].productPrice + ' тг\n' + '                        </div>\n' + '                        <div class="cart-item_item-count item-count d-flex">\n' + '                            <div class="item-count__button button-subtract h-100">\n' + '                                -\n' + '                            </div>\n' + '                            <div class="item-count__button button-count h-100">\n' + '                                ' + productsList[i].productCount + '\n' + '                            </div>\n' + '                            <div class="item-count__button button-add h-100">\n' + '                                +\n' + '                            </div>\n' + '                        </div>\n' + '                        <div class="cart-item__item-price item-price d-flex align-items-center justify-content-center">\n' + '                            ' + summaryPrice + ' тг\n' + '                        </div>\n' + '                        <div class="cart-item__button-remove button-remove">\n' + '                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.708 16.707">\n' + '                                <defs>\n' + '                                    <style>\n' + '                                        .cls-1{fill:none;stroke:#1428a0;}\n' + '                                    </style>\n' + '                                </defs>\n' + '                                <g id="Group_1025" data-name="Group 1025" transform="translate(9420.854 3811.854)">\n' + '                                    <path id="Line_51" d="M0 0l16 16" class="cls-1" data-name="Line 51" transform="translate(-9420.5 -3811.5)"/>\n' + '                                    <path id="Line_52" d="M0 0l16 16" class="cls-1" data-name="Line 52" transform="rotate(90 -2796.5 -6608)"/>\n' + '                                </g>\n' + '                            </svg>\n' + '                        </div>\n' + '                    </div>';
    }
    $('#chosen-products').prepend(products);
    // $('#item-count').text()
    for (let i = 0; i < productsList.length; i++) {
        productsCount += 1;
        productsSummaryPrice += productsList[i].productPrice * 1;
    }
    productsCountText = productsCount <= 1 ? productsCount + " товар" : productsCount > 1 && productsCount < 5 ? productsCount + " товара" : productsCount + " товаров";
    $('#item-count').text(productsCountText);
    $('#item-summary').text(productsSummaryPrice);

    $('#summary-submit').click(() => {
        let chosenProductsName = $('#chosen-products-name');
        $('#chosen-products').slideUp('slow');

        chosenProductsName.addClass('option-name__completed').siblings('.option__completed-symbol').removeClass('symbol-uncompleted').siblings('.option-able-symbol').removeClass('symbol-uncompleted').siblings('.option-description__option-image').removeClass('option-image--active');

        if (chosenProductsName.siblings('.option-able-symbol').children().hasClass('able-symbol__opened')) {
            $('#chosen-products-name').siblings('.option-able-symbol').children().removeClass('able-symbol__opened');
        }
        $('#customer-information').slideDown('slow');
        $('#customer-information-name').siblings('.option-description__option-image').addClass('option-image--active');
    });

    $('#chosen-products-name').siblings('.option-able-symbol').click(e => {
        if ($(e.target).hasClass('able-symbol__opened')) {
            $('#chosen-products').slideUp('slow');
            $(e.target).removeClass('able-symbol__opened');
        } else {
            $('#chosen-products').slideDown('slow');
            $(e.target).addClass('able-symbol__opened');
        }
    });

    $('#customer-islegal').click(e => {
        if (e.currentTarget.checked) {
            $('#legalEntityForm').slideDown('slow');
            $('.open-block').addClass('open-block--opened').click(() => {

                if ($('.open-block').hasClass('open-block--opened')) {
                    $('.open-block').removeClass('open-block--opened');
                    $('#legalEntityForm').slideUp('slow');
                } else {
                    $('.open-block').addClass('open-block--opened');
                    $('#legalEntityForm').slideDown('slow');
                }
            });
        } else {
            $('#legalEntityForm').slideUp('slow');
            $('.open-block').removeClass('open-block--opened');
        }
    });

    $('#customer-pickup').click(e => {
        if ($('#customer-courier-eco').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-post').prop('checked') === true) {
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-courier-express').prop('checked', false);
            $('#customer-post').prop('checked', false);
            $('.courier').slideUp();
        }

        if (e.currentTarget.checked) {
            setTimeout(() => {
                $('.pickup').slideDown();
            }, 400);
        } else {
            $('.pickup').slideUp();
        }
    });

    $('#customer-courier-eco').click(e => {
        if ($('#customer-pickup').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-post').prop('checked') === true) {
            $('#customer-pickup').prop('checked', false);
            $('#customer-courier-express').prop('checked', false);
            $('#customer-post').prop('checked', false);
            $('.pickup').slideUp();
        }
        if (e.currentTarget.checked) {
            setTimeout(() => {
                $('.courier').slideDown();
            }, 400);
        } else {
            $('.courier').slideUp();
        }
    });

    $('#customer-courier-express').click(e => {
        if ($('#customer-pickup').prop('checked') === true || $('#customer-courier-eco').prop('checked') === true || $('#customer-post').prop('checked') === true) {
            $('#customer-pickup').prop('checked', false);
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-post').prop('checked', false);
            $('.pickup').slideUp();
        }
        if (e.currentTarget.checked) {
            setTimeout(() => {
                $('.courier').slideDown();
            }, 400);
        } else {
            $('.courier').slideUp();
        }
    });

    $('#customer-post').click(() => {
        if ($('#customer-courier-eco').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-pickup').prop('checked') === true) {
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-courier-express').prop('checked', false);
            $('#customer-pickup').prop('checked', false);
            $('.courier').slideUp();
            $('.pickup').slideUp();
        }
    });

    $('.next-button').click(() => {
        let customerInformationName = $('#customer-information-name');
        $('#customer-information').slideUp('slow');

        customerInformationName.addClass('option-name__completed').siblings('.option__completed-symbol').removeClass('symbol-uncompleted').siblings('.option-able-symbol').removeClass('symbol-uncompleted').siblings('.option-description__option-image').removeClass('option-image--active');

        if (customerInformationName.siblings('.option-able-symbol').children().hasClass('able-symbol__opened')) {
            $('#customer-information-name').siblings('.option-able-symbol').children().removeClass('able-symbol__opened');
        }
        $('#delivery').slideDown('slow');
        $('#delivery-name').siblings('.option-description__option-image').addClass('option-image--active');
    });

    $('#customer-information-name').siblings('.option-able-symbol').click(e => {
        if ($(e.target).hasClass('able-symbol__opened')) {
            $('#customer-information').slideUp('slow');
            $(e.target).removeClass('able-symbol__opened');
        } else {
            $('#customer-information').slideDown('slow');
            $(e.target).addClass('able-symbol__opened');
        }
    });

    $('#payment-card-online').click(e => {
        if ($('#payment-bank-transfer').prop('checked') === true || $('#payment-bank-inside').prop('checked') === true || $('#payment-courier-cash').prop('checked') === true || $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true) {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#installment-plan').slideUp();
            $('#credit').slideUp();
        }

        if (e.currentTarget.checked) {
            $('#card-online').slideDown();
        } else {
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);
    });

    $('#payment-bank-transfer').click(() => {
        if ($('#payment-card-online').prop('checked') === true || $('#payment-bank-inside').prop('checked') === true || $('#payment-courier-cash').prop('checked') === true || $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true) {

            $('#payment-card-online').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp();
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);
    });

    $('#payment-bank-inside').click(() => {
        if ($('#payment-bank-transfer').prop('checked') === true || $('#payment-card-online').prop('checked') === true || $('#payment-courier-cash').prop('checked') === true || $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true) {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp();
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);
    });

    $('#payment-courier-cash').click(() => {
        if ($('#payment-bank-transfer').prop('checked') === true || $('#payment-bank-inside').prop('checked') === true || $('#payment-card-online').prop('checked') === true || $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true) {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp();
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);
    });

    $('#payment-installment-plan').click(e => {
        if ($('#payment-bank-transfer').prop('checked') === true || $('#payment-bank-inside').prop('checked') === true || $('#payment-courier-cash').prop('checked') === true || $('#payment-card-online').prop('checked') === true || $('#payment-credit').prop('checked') === true) {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#card-online').slideUp();
            $('#credit').slideUp();
        }

        if (e.currentTarget.checked) {
            $('#installment-plan').slideDown();
        } else {
            $('#installment-plan').slideUp();
        }

        submitText = 'Оформить заказ в рассрочку';
        $('.submit-form').text(submitText);
    });

    $('#payment-credit').click(e => {
        if ($('#payment-bank-transfer').prop('checked') === true || $('#payment-bank-inside').prop('checked') === true || $('#payment-courier-cash').prop('checked') === true || $('#payment-installment-plan').prop('checked') === true || $('#payment-card-online').prop('checked') === true) {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-card-online').prop('checked', false);

            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        if (e.currentTarget.checked) {
            $('#credit').slideDown();
        } else {
            $('#credit').slideUp();
        }

        submitText = 'Оформить заказ в кредит';
        $('.submit-form').text(submitText);
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 131:
/***/ (function(module, exports) {



/***/ }),

/***/ 159:
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

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9yZWdpc3RyYXRpb24tc2lnbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic2ltdWxhdGVUb3VjaCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwcm9kdWN0c0xpc3QiLCJpZCIsImltYWdlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RQcmljZSIsInByb2R1Y3RDb3VudCIsInByb2R1Y3RzIiwicHJvZHVjdHNDb3VudCIsInByb2R1Y3RzU3VtbWFyeVByaWNlIiwicHJvZHVjdHNDb3VudFRleHQiLCJzdWJtaXRUZXh0IiwidGV4dCIsImkiLCJsZW5ndGgiLCJzdW1tYXJ5UHJpY2UiLCJwcmVwZW5kIiwiY2hvc2VuUHJvZHVjdHNOYW1lIiwic2xpZGVVcCIsInNsaWRlRG93biIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsInByb3AiLCJzZXRUaW1lb3V0IiwiY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQTtB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QUNIOztBQUVELFlBQUdFLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQW5CLEVBQTJCO0FBQ3ZCdkMsY0FBRSxTQUFGLEVBQWFtQyxTQUFiO0FBQ0gsU0FGRCxNQUVNO0FBQ0ZuQyxjQUFFLFNBQUYsRUFBYWtDLE9BQWI7QUFDSDs7QUFFRFAscUJBQWEseUJBQWI7QUFDQTNCLFVBQUUsY0FBRixFQUFrQjRCLElBQWxCLENBQXVCRCxVQUF2QjtBQUVILEtBMUJEO0FBNEJILENBeFZELEU7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTNCLDJDQUFFLGlDQUFGLEVBQXFDRyxLQUFyQyxDQUEyQyxZQUFXO0FBQ2xESCxNQUFFLG9CQUFGLEVBQXdCMkMsR0FBeEIsQ0FBNEIsRUFBQyxXQUFXLE1BQVosRUFBNUI7QUFDSCxDQUZEO0FBR0EzQyxFQUFFLHdCQUFGLEVBQTRCRyxLQUE1QixDQUFrQyxZQUFXO0FBQ3pDSCxNQUFFLGFBQUYsRUFBaUIyQyxHQUFqQixDQUFxQixFQUFDLFdBQVcsT0FBWixFQUFyQjtBQUNBM0MsTUFBRSxvQkFBRixFQUF3QjJDLEdBQXhCLENBQTRCLEVBQUMsV0FBVyxNQUFaLEVBQTVCO0FBQ0gsQ0FIRDtBQUlBM0MsRUFBRSx3QkFBRixFQUE0QkcsS0FBNUIsQ0FBa0MsWUFBVztBQUN6Q0gsTUFBRSxhQUFGLEVBQWlCMkMsR0FBakIsQ0FBcUIsRUFBQyxXQUFXLE1BQVosRUFBckI7QUFDQTNDLE1BQUUsb0JBQUYsRUFBd0IyQyxHQUF4QixDQUE0QixFQUFDLFdBQVcsT0FBWixFQUE1QjtBQUNILENBSEQ7O0FBS0FGLFdBQVcsWUFBWTtBQUNuQnpDLE1BQUUsb0JBQUYsRUFBd0IyQyxHQUF4QixDQUE0QixFQUFDLFdBQVcsT0FBWixFQUE1QjtBQUNILENBRkQsRUFFRyxJQUZILEUiLCJmaWxlIjoiYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDRgdGC0LjQu9C4ICovXG5yZXF1aXJlKCdfc3R5bGVzL21haW4ubGVzcycpO1xuXG5yZXF1aXJlKCcuL3NjcmlwdHMvbWFpbi5qcycpO1xuXG4vKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRjyAqL1xualF1ZXJ5KGZ1bmN0aW9uKCl7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sZXNzL21haW4ubGVzc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vc2lkZWJhci5qcycpO1xucmVxdWlyZSgnLi9wcm9kdWN0LmpzJyk7XG5yZXF1aXJlKCcuL2NhcnQnKTtcbnJlcXVpcmUoJy4vcHJvZHVjdC1jYXJkLmpzJyk7XG5yZXF1aXJlKCcuL3JlZ2lzdHJhdGlvbi1zaWduJylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9tYWluLmpzIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcudG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJCh0aGlzKS5jaGlsZHJlbignZGl2JykuaGFzQ2xhc3MoJ3BhcmFtZXRlci10cmlhbmdsZS0tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1jbG9zZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItdHJpYW5nbGUtLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignaDUnKS5yZW1vdmVDbGFzcygndGl0bGUtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdkaXYnKS5yZW1vdmVDbGFzcygncGFyYW1ldGVyLWNvbnRlbnQtd3JhcHBlci0tY2xvc2VkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdkaXYnKS5hZGRDbGFzcygncGFyYW1ldGVyLWNvbnRlbnQtd3JhcHBlci0tb3BlbmVkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdkaXYnKS5hZGRDbGFzcygncGFyYW1ldGVyLXRyaWFuZ2xlLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2g1JykuYWRkQ2xhc3MoJ3RpdGxlLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAkKHRoaXMpLm5leHRBbGwoJy5wYXJhbWV0ZXItY29udGVudC13cmFwcGVyJykudG9nZ2xlKDQwMCwgJ2xpbmVhcicpO1xuICAgIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvc2lkZWJhci5qcyIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb2R1Y3QnLCB7XG4gICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzaW11bGF0ZVRvdWNoOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItcHJvZHVjdC1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1wcm9kdWN0LXByZXYnXG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvcHJvZHVjdC5qcyIsImxldCBwcm9kdWN0c0xpc3QgPSBbXG4gICAge1xuICAgICAgIGlkOiAnMCcsXG4gICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgIHByb2R1Y3RUeXBlOiAn0KHQvNCw0YDRgtGE0L7QvdGLJyxcbiAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCA2NCBHQiwgQmxhY2snLFxuICAgICAgIHByb2R1Y3RQcmljZTogJzEyNTAwMCcsXG4gICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGltYWdlOiAnLi8uLi9hcHAvYXNzZXRzL2ltYWdlcy9ub3RlOS9ub3RlLTktZnJvbnQucG5nJyxcbiAgICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCAxMjggR0IsIEJsYWNrJyxcbiAgICAgICAgcHJvZHVjdFByaWNlOiAnMTUwMDAwJyxcbiAgICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIGltYWdlOiAnLi8uLi9hcHAvYXNzZXRzL2ltYWdlcy9ub3RlOS9ub3RlLTktZnJvbnQucG5nJyxcbiAgICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCAyNTYgR0IsIEJsYWNrJyxcbiAgICAgICAgcHJvZHVjdFByaWNlOiAnMjI1MDAwJyxcbiAgICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfVxuXTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgbGV0IHByb2R1Y3RzID0gXCJcIjtcbiAgIGxldCBwcm9kdWN0c0NvdW50ID0gMDtcbiAgIGxldCBwcm9kdWN0c1N1bW1hcnlQcmljZSA9IDA7XG4gICBsZXQgcHJvZHVjdHNDb3VudFRleHQgPSAnJztcbiAgIGxldCBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBzdW1tYXJ5UHJpY2UgPSBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdFByaWNlICogcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RDb3VudDtcbiAgICAgIHByb2R1Y3RzICs9ICc8ZGl2IGNsYXNzPVwib3B0aW9uLXdyYXBwZXJfX2NhcnQtaXRlbSBjYXJ0LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPjxwIGNsYXNzPVwicHJvZElEXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBwcm9kdWN0c0xpc3RbaV0uaWQgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLWltYWdlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrIHByb2R1Y3RzTGlzdFtpXS5pbWFnZSArJ1wiIGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9faXRlbS1uYW1lIGl0ZW0tbmFtZSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJpdGVtLW5hbWVfX2hlYWRpbmcgZm9udC13ZWlnaHQtbm9ybWFsXCI+JyArIHByb2R1Y3RzTGlzdFtpXS5wcm9kdWN0VHlwZSArICc8L2gzPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLW5hbWVfX3BhclwiPicrIHByb2R1Y3RzTGlzdFtpXS5wcm9kdWN0TmFtZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLXByaWNlIGl0ZW0tcHJpY2UgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RQcmljZSArICcg0YLQs1xcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9pdGVtLWNvdW50IGl0ZW0tY291bnQgZC1mbGV4XCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb3VudF9fYnV0dG9uIGJ1dHRvbi1zdWJ0cmFjdCBoLTEwMFwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY291bnRfX2J1dHRvbiBidXR0b24tY291bnQgaC0xMDBcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RDb3VudCArICdcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY291bnRfX2J1dHRvbiBidXR0b24tYWRkIGgtMTAwXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLXByaWNlIGl0ZW0tcHJpY2UgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgc3VtbWFyeVByaWNlICsgJyDRgtCzXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19idXR0b24tcmVtb3ZlIGJ1dHRvbi1yZW1vdmVcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYuNzA4IDE2LjcwN1wiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMTQyOGEwO31cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8xMDI1XCIgZGF0YS1uYW1lPVwiR3JvdXAgMTAyNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NDIwLjg1NCAzODExLjg1NClcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJMaW5lXzUxXCIgZD1cIk0wIDBsMTYgMTZcIiBjbGFzcz1cImNscy0xXCIgZGF0YS1uYW1lPVwiTGluZSA1MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTQyMC41IC0zODExLjUpXCIvPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkxpbmVfNTJcIiBkPVwiTTAgMGwxNiAxNlwiIGNsYXNzPVwiY2xzLTFcIiBkYXRhLW5hbWU9XCJMaW5lIDUyXCIgdHJhbnNmb3JtPVwicm90YXRlKDkwIC0yNzk2LjUgLTY2MDgpXCIvPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgfVxuICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnByZXBlbmQocHJvZHVjdHMpO1xuICAgLy8gJCgnI2l0ZW0tY291bnQnKS50ZXh0KClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICBwcm9kdWN0c0NvdW50ICs9IDE7XG4gICAgICAgcHJvZHVjdHNTdW1tYXJ5UHJpY2UgKz0gcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RQcmljZSoxO1xuICAgIH1cbiAgICBwcm9kdWN0c0NvdW50VGV4dCA9IHByb2R1Y3RzQ291bnQgPD0gMSA/IHByb2R1Y3RzQ291bnQgKyBcIiDRgtC+0LLQsNGAXCIgOiAocHJvZHVjdHNDb3VudCA+IDEgJiYgcHJvZHVjdHNDb3VudCA8IDUgPyBwcm9kdWN0c0NvdW50ICsgXCIg0YLQvtCy0LDRgNCwXCIgOiBwcm9kdWN0c0NvdW50ICsgXCIg0YLQvtCy0LDRgNC+0LJcIik7XG4gICAgJCgnI2l0ZW0tY291bnQnKS50ZXh0KHByb2R1Y3RzQ291bnRUZXh0KTtcbiAgICAkKCcjaXRlbS1zdW1tYXJ5JykudGV4dChwcm9kdWN0c1N1bW1hcnlQcmljZSk7XG5cbiAgICQoJyNzdW1tYXJ5LXN1Ym1pdCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIGxldCBjaG9zZW5Qcm9kdWN0c05hbWUgPSAkKCcjY2hvc2VuLXByb2R1Y3RzLW5hbWUnKTtcbiAgICAgICQoJyNjaG9zZW4tcHJvZHVjdHMnKS5zbGlkZVVwKCdzbG93Jyk7XG5cbiAgICAgIGNob3NlblByb2R1Y3RzTmFtZS5hZGRDbGFzcygnb3B0aW9uLW5hbWVfX2NvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uX19jb21wbGV0ZWQtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uLWRlc2NyaXB0aW9uX19vcHRpb24taW1hZ2UnKS5yZW1vdmVDbGFzcygnb3B0aW9uLWltYWdlLS1hY3RpdmUnKTtcblxuICAgICAgaWYoY2hvc2VuUHJvZHVjdHNOYW1lLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2hpbGRyZW4oKS5oYXNDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpKXtcbiAgICAgICAgICAkKCcjY2hvc2VuLXByb2R1Y3RzLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgIH1cbiAgICAgICQoJyNjdXN0b21lci1pbmZvcm1hdGlvbicpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykuYWRkQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG4gICB9KTtcblxuICAgJCgnI2Nob3Nlbi1wcm9kdWN0cy1uYW1lJykuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jbGljaygoZSkgPT4ge1xuICAgICAgIGlmKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJykpIHtcbiAgICAgICAgICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICQoJyNjaG9zZW4tcHJvZHVjdHMnKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgICAgJChlLnRhcmdldCkuYWRkQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICB9XG4gICB9KTtcblxuICAgICQoJyNjdXN0b21lci1pc2xlZ2FsJykuY2xpY2soKGUpID0+IHtcbiAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICQoJy5vcGVuLWJsb2NrJykuYWRkQ2xhc3MoJ29wZW4tYmxvY2stLW9wZW5lZCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICAgICAgICAgaWYoJCgnLm9wZW4tYmxvY2snKS5oYXNDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJykpe1xuICAgICAgICAgICAgICAgICAgICQoJy5vcGVuLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ29wZW4tYmxvY2stLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICQoJyNsZWdhbEVudGl0eUZvcm0nKS5zbGlkZVVwKCdzbG93Jyk7XG4gICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5hZGRDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5yZW1vdmVDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJyk7XG4gICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICB9LCA0MDApO1xuICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlVXAoKTtcbiAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5jbGljaygoZSkgPT4ge1xuICAgICAgIGlmKCQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlVXAoKTtcbiAgICAgICB9XG4gICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgfWVsc2Uge1xuICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVVcCgpO1xuICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcucGlja3VwJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCcjY3VzdG9tZXItcG9zdCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgaWYoJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1jb3VyaWVyLWV4cHJlc3MnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWV4cHJlc3MnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICQoJy5waWNrdXAnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5uZXh0LWJ1dHRvbicpLmNsaWNrKCgpPT4ge1xuICAgICAgICBsZXQgY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUgPSAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpO1xuICAgICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24nKS5zbGlkZVVwKCdzbG93Jyk7XG5cbiAgICAgICAgY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUuYWRkQ2xhc3MoJ29wdGlvbi1uYW1lX19jb21wbGV0ZWQnKVxuICAgICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uX19jb21wbGV0ZWQtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5yZW1vdmVDbGFzcygnc3ltYm9sLXVuY29tcGxldGVkJylcbiAgICAgICAgICAgIC5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykucmVtb3ZlQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYoY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jaGlsZHJlbigpLmhhc0NsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJykpe1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjZGVsaXZlcnknKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgJCgnI2RlbGl2ZXJ5LW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykuYWRkQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKSkge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uJykuc2xpZGVVcCgnc2xvdycpO1xuICAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5hZGRDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgaWYoJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAge1xuXG4gICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKCk7XG4gICAgICAgfVxuXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKVxuICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKClcbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKClcbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5jbGljaygoZSkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcGxhbicpLnNsaWRlRG93bigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcGxhbicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1Ym1pdFRleHQgPSAn0J7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3INCyINGA0LDRgdGB0YDQvtGH0LrRgyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWNyZWRpdCcpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlRG93bigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjY3JlZGl0Jykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0LIg0LrRgNC10LTQuNGCJztcbiAgICAgICAgJCgnLnN1Ym1pdC1mb3JtJykudGV4dChzdWJtaXRUZXh0KTtcblxuICAgIH0pO1xuXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jYXJ0LmpzIiwiJCgnLnJlZ2lzdHJhdGlvbi1zaWduX2Nsb3NlLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJyNyZWdpc3RyYXRpb24tc2lnbicpLmNzcyh7J2Rpc3BsYXknOiAnbm9uZSd9KVxufSlcbiQoJy5yZWdpc3RyYXRpb24tdG8tbG9naW4nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCcubG9naW4tZm9ybScpLmNzcyh7J2Rpc3BsYXknOiAnYmxvY2snfSlcbiAgICAkKCcucmVnaXN0cmF0aW9uLWZvcm0nKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSlcbn0pXG4kKCcubG9naW4tdG8tcmVnaXN0cmF0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnLmxvZ2luLWZvcm0nKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSlcbiAgICAkKCcucmVnaXN0cmF0aW9uLWZvcm0nKS5jc3MoeydkaXNwbGF5JzogJ2Jsb2NrJ30pXG59KVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjcmVnaXN0cmF0aW9uLXNpZ24nKS5jc3MoeydkaXNwbGF5JzogJ2Jsb2NrJ30pXG59LCAxNTAwKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvcmVnaXN0cmF0aW9uLXNpZ24uanMiXSwic291cmNlUm9vdCI6IiJ9