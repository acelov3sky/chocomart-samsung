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

/***/ })

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2FydC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic2ltdWxhdGVUb3VjaCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwcm9kdWN0c0xpc3QiLCJpZCIsImltYWdlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RQcmljZSIsInByb2R1Y3RDb3VudCIsInByb2R1Y3RzIiwicHJvZHVjdHNDb3VudCIsInByb2R1Y3RzU3VtbWFyeVByaWNlIiwicHJvZHVjdHNDb3VudFRleHQiLCJzdWJtaXRUZXh0IiwidGV4dCIsImkiLCJsZW5ndGgiLCJzdW1tYXJ5UHJpY2UiLCJwcmVwZW5kIiwiY2hvc2VuUHJvZHVjdHNOYW1lIiwic2xpZGVVcCIsInNsaWRlRG93biIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsInByb3AiLCJzZXRUaW1lb3V0IiwiY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQTtBQUNBQyxPQUFPLFlBQVUsQ0FFaEIsQ0FGRCxFOzs7Ozs7OztBQ05BLHlDOzs7Ozs7O0FDQUFE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QUUsU0FBRixFQUFha0MsT0FBYjtBQUNIOztBQUVEUCxxQkFBYSx5QkFBYjtBQUNBM0IsVUFBRSxjQUFGLEVBQWtCNEIsSUFBbEIsQ0FBdUJELFVBQXZCO0FBRUgsS0ExQkQ7QUE0QkgsQ0F4VkQsRSIsImZpbGUiOiJhc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0YLQuNC70LggKi9cbnJlcXVpcmUoJ19zdHlsZXMvbWFpbi5sZXNzJyk7XG5cbnJlcXVpcmUoJy4vc2NyaXB0cy9tYWluLmpzJylcblxuLyog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8gKi9cbmpRdWVyeShmdW5jdGlvbigpe1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sZXNzL21haW4ubGVzc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vc2lkZWJhci5qcycpO1xucmVxdWlyZSgnLi9wcm9kdWN0LmpzJyk7XG5yZXF1aXJlKCcuL2NhcnQnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9tYWluLmpzIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcudG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJCh0aGlzKS5jaGlsZHJlbignZGl2JykuaGFzQ2xhc3MoJ3BhcmFtZXRlci10cmlhbmdsZS0tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1jbG9zZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItdHJpYW5nbGUtLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignaDUnKS5yZW1vdmVDbGFzcygndGl0bGUtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdkaXYnKS5yZW1vdmVDbGFzcygncGFyYW1ldGVyLWNvbnRlbnQtd3JhcHBlci0tY2xvc2VkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdkaXYnKS5hZGRDbGFzcygncGFyYW1ldGVyLWNvbnRlbnQtd3JhcHBlci0tb3BlbmVkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdkaXYnKS5hZGRDbGFzcygncGFyYW1ldGVyLXRyaWFuZ2xlLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2g1JykuYWRkQ2xhc3MoJ3RpdGxlLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAkKHRoaXMpLm5leHRBbGwoJy5wYXJhbWV0ZXItY29udGVudC13cmFwcGVyJykudG9nZ2xlKDQwMCwgJ2xpbmVhcicpO1xuICAgIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvc2lkZWJhci5qcyIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb2R1Y3QnLCB7XG4gICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzaW11bGF0ZVRvdWNoOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItcHJvZHVjdC1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1wcm9kdWN0LXByZXYnXG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvcHJvZHVjdC5qcyIsImxldCBwcm9kdWN0c0xpc3QgPSBbXG4gICAge1xuICAgICAgIGlkOiAnMCcsXG4gICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgIHByb2R1Y3RUeXBlOiAn0KHQvNCw0YDRgtGE0L7QvdGLJyxcbiAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCA2NCBHQiwgQmxhY2snLFxuICAgICAgIHByb2R1Y3RQcmljZTogJzEyNTAwMCcsXG4gICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGltYWdlOiAnLi8uLi9hcHAvYXNzZXRzL2ltYWdlcy9ub3RlOS9ub3RlLTktZnJvbnQucG5nJyxcbiAgICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCAxMjggR0IsIEJsYWNrJyxcbiAgICAgICAgcHJvZHVjdFByaWNlOiAnMTUwMDAwJyxcbiAgICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIGltYWdlOiAnLi8uLi9hcHAvYXNzZXRzL2ltYWdlcy9ub3RlOS9ub3RlLTktZnJvbnQucG5nJyxcbiAgICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgICBwcm9kdWN0TmFtZTogJ9Ch0LzQsNGA0YLRhNC+0L0gU2Ftc3VuZyBHYWxheHkgTm90ZSA5LCAyNTYgR0IsIEJsYWNrJyxcbiAgICAgICAgcHJvZHVjdFByaWNlOiAnMjI1MDAwJyxcbiAgICAgICAgcHJvZHVjdENvdW50OiAxXG4gICAgfVxuXTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgbGV0IHByb2R1Y3RzID0gXCJcIjtcbiAgIGxldCBwcm9kdWN0c0NvdW50ID0gMDtcbiAgIGxldCBwcm9kdWN0c1N1bW1hcnlQcmljZSA9IDA7XG4gICBsZXQgcHJvZHVjdHNDb3VudFRleHQgPSAnJztcbiAgIGxldCBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBzdW1tYXJ5UHJpY2UgPSBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdFByaWNlICogcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RDb3VudDtcbiAgICAgIHByb2R1Y3RzICs9ICc8ZGl2IGNsYXNzPVwib3B0aW9uLXdyYXBwZXJfX2NhcnQtaXRlbSBjYXJ0LWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPjxwIGNsYXNzPVwicHJvZElEXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPicgKyBwcm9kdWN0c0xpc3RbaV0uaWQgKyAnPC9wPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLWltYWdlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrIHByb2R1Y3RzTGlzdFtpXS5pbWFnZSArJ1wiIGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9faXRlbS1uYW1lIGl0ZW0tbmFtZSBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJpdGVtLW5hbWVfX2hlYWRpbmcgZm9udC13ZWlnaHQtbm9ybWFsXCI+JyArIHByb2R1Y3RzTGlzdFtpXS5wcm9kdWN0VHlwZSArICc8L2gzPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLW5hbWVfX3BhclwiPicrIHByb2R1Y3RzTGlzdFtpXS5wcm9kdWN0TmFtZSArICc8L3A+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLXByaWNlIGl0ZW0tcHJpY2UgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RQcmljZSArICcg0YLQs1xcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9pdGVtLWNvdW50IGl0ZW0tY291bnQgZC1mbGV4XCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb3VudF9fYnV0dG9uIGJ1dHRvbi1zdWJ0cmFjdCBoLTEwMFwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY291bnRfX2J1dHRvbiBidXR0b24tY291bnQgaC0xMDBcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RDb3VudCArICdcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY291bnRfX2J1dHRvbiBidXR0b24tYWRkIGgtMTAwXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLXByaWNlIGl0ZW0tcHJpY2UgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgc3VtbWFyeVByaWNlICsgJyDRgtCzXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19idXR0b24tcmVtb3ZlIGJ1dHRvbi1yZW1vdmVcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYuNzA4IDE2LjcwN1wiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMTQyOGEwO31cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8xMDI1XCIgZGF0YS1uYW1lPVwiR3JvdXAgMTAyNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NDIwLjg1NCAzODExLjg1NClcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJMaW5lXzUxXCIgZD1cIk0wIDBsMTYgMTZcIiBjbGFzcz1cImNscy0xXCIgZGF0YS1uYW1lPVwiTGluZSA1MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTQyMC41IC0zODExLjUpXCIvPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkxpbmVfNTJcIiBkPVwiTTAgMGwxNiAxNlwiIGNsYXNzPVwiY2xzLTFcIiBkYXRhLW5hbWU9XCJMaW5lIDUyXCIgdHJhbnNmb3JtPVwicm90YXRlKDkwIC0yNzk2LjUgLTY2MDgpXCIvPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgfVxuICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnByZXBlbmQocHJvZHVjdHMpO1xuICAgLy8gJCgnI2l0ZW0tY291bnQnKS50ZXh0KClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICBwcm9kdWN0c0NvdW50ICs9IDE7XG4gICAgICAgcHJvZHVjdHNTdW1tYXJ5UHJpY2UgKz0gcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RQcmljZSoxO1xuICAgIH1cbiAgICBwcm9kdWN0c0NvdW50VGV4dCA9IHByb2R1Y3RzQ291bnQgPD0gMSA/IHByb2R1Y3RzQ291bnQgKyBcIiDRgtC+0LLQsNGAXCIgOiAocHJvZHVjdHNDb3VudCA+IDEgJiYgcHJvZHVjdHNDb3VudCA8IDUgPyBwcm9kdWN0c0NvdW50ICsgXCIg0YLQvtCy0LDRgNCwXCIgOiBwcm9kdWN0c0NvdW50ICsgXCIg0YLQvtCy0LDRgNC+0LJcIik7XG4gICAgJCgnI2l0ZW0tY291bnQnKS50ZXh0KHByb2R1Y3RzQ291bnRUZXh0KTtcbiAgICAkKCcjaXRlbS1zdW1tYXJ5JykudGV4dChwcm9kdWN0c1N1bW1hcnlQcmljZSk7XG5cbiAgICQoJyNzdW1tYXJ5LXN1Ym1pdCcpLmNsaWNrKCgpID0+IHtcbiAgICAgIGxldCBjaG9zZW5Qcm9kdWN0c05hbWUgPSAkKCcjY2hvc2VuLXByb2R1Y3RzLW5hbWUnKTtcbiAgICAgICQoJyNjaG9zZW4tcHJvZHVjdHMnKS5zbGlkZVVwKCdzbG93Jyk7XG5cbiAgICAgIGNob3NlblByb2R1Y3RzTmFtZS5hZGRDbGFzcygnb3B0aW9uLW5hbWVfX2NvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uX19jb21wbGV0ZWQtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uLWRlc2NyaXB0aW9uX19vcHRpb24taW1hZ2UnKS5yZW1vdmVDbGFzcygnb3B0aW9uLWltYWdlLS1hY3RpdmUnKTtcblxuICAgICAgaWYoY2hvc2VuUHJvZHVjdHNOYW1lLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2hpbGRyZW4oKS5oYXNDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpKXtcbiAgICAgICAgICAkKCcjY2hvc2VuLXByb2R1Y3RzLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgIH1cbiAgICAgICQoJyNjdXN0b21lci1pbmZvcm1hdGlvbicpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykuYWRkQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG4gICB9KTtcblxuICAgJCgnI2Nob3Nlbi1wcm9kdWN0cy1uYW1lJykuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jbGljaygoZSkgPT4ge1xuICAgICAgIGlmKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJykpIHtcbiAgICAgICAgICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICQoJyNjaG9zZW4tcHJvZHVjdHMnKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgICAgJChlLnRhcmdldCkuYWRkQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICB9XG4gICB9KTtcblxuICAgICQoJyNjdXN0b21lci1pc2xlZ2FsJykuY2xpY2soKGUpID0+IHtcbiAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICQoJy5vcGVuLWJsb2NrJykuYWRkQ2xhc3MoJ29wZW4tYmxvY2stLW9wZW5lZCcpLmNsaWNrKCgpID0+IHtcblxuICAgICAgICAgICAgICAgaWYoJCgnLm9wZW4tYmxvY2snKS5oYXNDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJykpe1xuICAgICAgICAgICAgICAgICAgICQoJy5vcGVuLWJsb2NrJykucmVtb3ZlQ2xhc3MoJ29wZW4tYmxvY2stLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICQoJyNsZWdhbEVudGl0eUZvcm0nKS5zbGlkZVVwKCdzbG93Jyk7XG4gICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5hZGRDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5yZW1vdmVDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJyk7XG4gICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICB9LCA0MDApO1xuICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlVXAoKTtcbiAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5jbGljaygoZSkgPT4ge1xuICAgICAgIGlmKCQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlVXAoKTtcbiAgICAgICB9XG4gICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgfWVsc2Uge1xuICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVVcCgpO1xuICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcG9zdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcucGlja3VwJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCcjY3VzdG9tZXItcG9zdCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgaWYoJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1jb3VyaWVyLWV4cHJlc3MnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWV4cHJlc3MnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cmllcicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICQoJy5waWNrdXAnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5uZXh0LWJ1dHRvbicpLmNsaWNrKCgpPT4ge1xuICAgICAgICBsZXQgY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUgPSAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpO1xuICAgICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24nKS5zbGlkZVVwKCdzbG93Jyk7XG5cbiAgICAgICAgY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUuYWRkQ2xhc3MoJ29wdGlvbi1uYW1lX19jb21wbGV0ZWQnKVxuICAgICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uX19jb21wbGV0ZWQtc3ltYm9sJykucmVtb3ZlQ2xhc3MoJ3N5bWJvbC11bmNvbXBsZXRlZCcpXG4gICAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5yZW1vdmVDbGFzcygnc3ltYm9sLXVuY29tcGxldGVkJylcbiAgICAgICAgICAgIC5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykucmVtb3ZlQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYoY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jaGlsZHJlbigpLmhhc0NsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJykpe1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjZGVsaXZlcnknKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgJCgnI2RlbGl2ZXJ5LW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1kZXNjcmlwdGlvbl9fb3B0aW9uLWltYWdlJykuYWRkQ2xhc3MoJ29wdGlvbi1pbWFnZS0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKSkge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uJykuc2xpZGVVcCgnc2xvdycpO1xuICAgICAgICAgICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5hZGRDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgaWYoJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAge1xuXG4gICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKCk7XG4gICAgICAgfVxuXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZURvd24oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKVxuICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykuY2xpY2soKCkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKClcbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICAgfSk7XG5cbiAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKClcbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0LcnO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5jbGljaygoZSkgPT4ge1xuICAgICAgICBpZigkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcGxhbicpLnNsaWRlRG93bigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcGxhbicpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1Ym1pdFRleHQgPSAn0J7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3INCyINGA0LDRgdGB0YDQvtGH0LrRgyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWNyZWRpdCcpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpXG4gICAgICAgIHtcblxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnI2NhcmQtb25saW5lJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlRG93bigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjY3JlZGl0Jykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0LIg0LrRgNC10LTQuNGCJztcbiAgICAgICAgJCgnLnN1Ym1pdC1mb3JtJykudGV4dChzdWJtaXRUZXh0KTtcblxuICAgIH0pO1xuXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jYXJ0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==