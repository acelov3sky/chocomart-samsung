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



/***/ })

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY2FydC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic2ltdWxhdGVUb3VjaCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwcm9kdWN0c0xpc3QiLCJpZCIsImltYWdlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RQcmljZSIsInByb2R1Y3RDb3VudCIsInByb2R1Y3RzIiwicHJvZHVjdHNDb3VudCIsInByb2R1Y3RzU3VtbWFyeVByaWNlIiwicHJvZHVjdHNDb3VudFRleHQiLCJzdWJtaXRUZXh0IiwidGV4dCIsImkiLCJsZW5ndGgiLCJzdW1tYXJ5UHJpY2UiLCJwcmVwZW5kIiwiY2hvc2VuUHJvZHVjdHNOYW1lIiwic2xpZGVVcCIsInNsaWRlRG93biIsImUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsInByb3AiLCJzZXRUaW1lb3V0IiwiY3VzdG9tZXJJbmZvcm1hdGlvbk5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQUEsbUJBQU9BLENBQUMsR0FBUjs7QUFFQTtBQUNBQyxPQUFPLFlBQVUsQ0FDaEIsQ0FERCxFOzs7Ozs7OztBQ05BLHlDOzs7Ozs7O0FDQUFE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QUNILFNBRkQsTUFFTTtBQUNGbkMsY0FBRSxTQUFGLEVBQWFrQyxPQUFiO0FBQ0g7O0FBRURQLHFCQUFhLHlCQUFiO0FBQ0EzQixVQUFFLGNBQUYsRUFBa0I0QixJQUFsQixDQUF1QkQsVUFBdkI7QUFFSCxLQTFCRDtBQTRCSCxDQXhWRCxFIiwiZmlsZSI6ImFzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyog0J/QvtC00LrQu9GO0YfQsNC10Lwg0YHRgtC40LvQuCAqL1xucmVxdWlyZSgnX3N0eWxlcy9tYWluLmxlc3MnKTtcblxucmVxdWlyZSgnLi9zY3JpcHRzL21haW4uanMnKTtcblxuLyog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8gKi9cbmpRdWVyeShmdW5jdGlvbigpe1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL3NpZGViYXIuanMnKTtcbnJlcXVpcmUoJy4vcHJvZHVjdC5qcycpO1xucmVxdWlyZSgnLi9jYXJ0Jyk7XG5yZXF1aXJlKCcuL3Byb2R1Y3QtY2FyZC5qcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL21haW4uanMiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy50b2dnbGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBpZigkKHRoaXMpLmNoaWxkcmVuKCdkaXYnKS5oYXNDbGFzcygncGFyYW1ldGVyLXRyaWFuZ2xlLS1vcGVuZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnZGl2JykuYWRkQ2xhc3MoJ3BhcmFtZXRlci1jb250ZW50LXdyYXBwZXItLWNsb3NlZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnZGl2JykucmVtb3ZlQ2xhc3MoJ3BhcmFtZXRlci1jb250ZW50LXdyYXBwZXItLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignZGl2JykucmVtb3ZlQ2xhc3MoJ3BhcmFtZXRlci10cmlhbmdsZS0tb3BlbmVkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdoNScpLnJlbW92ZUNsYXNzKCd0aXRsZS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLnJlbW92ZUNsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1jbG9zZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItY29udGVudC13cmFwcGVyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2RpdicpLmFkZENsYXNzKCdwYXJhbWV0ZXItdHJpYW5nbGUtLW9wZW5lZCcpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignaDUnKS5hZGRDbGFzcygndGl0bGUtLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vICQodGhpcykubmV4dEFsbCgnLnBhcmFtZXRlci1jb250ZW50LXdyYXBwZXInKS50b2dnbGUoNDAwLCAnbGluZWFyJyk7XG4gICAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcHJvZHVjdCcsIHtcbiAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIHNpbXVsYXRlVG91Y2g6IGZhbHNlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1wcm9kdWN0LW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLXByb2R1Y3QtcHJldidcbiAgICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9wcm9kdWN0LmpzIiwibGV0IHByb2R1Y3RzTGlzdCA9IFtcbiAgICB7XG4gICAgICAgaWQ6ICcwJyxcbiAgICAgICBpbWFnZTogJy4vLi4vYXBwL2Fzc2V0cy9pbWFnZXMvbm90ZTkvbm90ZS05LWZyb250LnBuZycsXG4gICAgICAgcHJvZHVjdFR5cGU6ICfQodC80LDRgNGC0YTQvtC90YsnLFxuICAgICAgIHByb2R1Y3ROYW1lOiAn0KHQvNCw0YDRgtGE0L7QvSBTYW1zdW5nIEdhbGF4eSBOb3RlIDksIDY0IEdCLCBCbGFjaycsXG4gICAgICAgcHJvZHVjdFByaWNlOiAnMTI1MDAwJyxcbiAgICAgICBwcm9kdWN0Q291bnQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgICBwcm9kdWN0VHlwZTogJ9Ch0LzQsNGA0YLRhNC+0L3RiycsXG4gICAgICAgIHByb2R1Y3ROYW1lOiAn0KHQvNCw0YDRgtGE0L7QvSBTYW1zdW5nIEdhbGF4eSBOb3RlIDksIDEyOCBHQiwgQmxhY2snLFxuICAgICAgICBwcm9kdWN0UHJpY2U6ICcxNTAwMDAnLFxuICAgICAgICBwcm9kdWN0Q291bnQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgaW1hZ2U6ICcuLy4uL2FwcC9hc3NldHMvaW1hZ2VzL25vdGU5L25vdGUtOS1mcm9udC5wbmcnLFxuICAgICAgICBwcm9kdWN0VHlwZTogJ9Ch0LzQsNGA0YLRhNC+0L3RiycsXG4gICAgICAgIHByb2R1Y3ROYW1lOiAn0KHQvNCw0YDRgtGE0L7QvSBTYW1zdW5nIEdhbGF4eSBOb3RlIDksIDI1NiBHQiwgQmxhY2snLFxuICAgICAgICBwcm9kdWN0UHJpY2U6ICcyMjUwMDAnLFxuICAgICAgICBwcm9kdWN0Q291bnQ6IDFcbiAgICB9XG5dO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICBsZXQgcHJvZHVjdHMgPSBcIlwiO1xuICAgbGV0IHByb2R1Y3RzQ291bnQgPSAwO1xuICAgbGV0IHByb2R1Y3RzU3VtbWFyeVByaWNlID0gMDtcbiAgIGxldCBwcm9kdWN0c0NvdW50VGV4dCA9ICcnO1xuICAgbGV0IHN1Ym1pdFRleHQgPSAn0J7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3JztcbiAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IHN1bW1hcnlQcmljZSA9IHByb2R1Y3RzTGlzdFtpXS5wcm9kdWN0UHJpY2UgKiBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdENvdW50O1xuICAgICAgcHJvZHVjdHMgKz0gJzxkaXYgY2xhc3M9XCJvcHRpb24td3JhcHBlcl9fY2FydC1pdGVtIGNhcnQtaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+PHAgY2xhc3M9XCJwcm9kSURcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JyArIHByb2R1Y3RzTGlzdFtpXS5pZCArICc8L3A+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2l0ZW0taW1hZ2UgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJysgcHJvZHVjdHNMaXN0W2ldLmltYWdlICsnXCIgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19pdGVtLW5hbWUgaXRlbS1uYW1lIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIml0ZW0tbmFtZV9faGVhZGluZyBmb250LXdlaWdodC1ub3JtYWxcIj4nICsgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3RUeXBlICsgJzwvaDM+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tbmFtZV9fcGFyXCI+JysgcHJvZHVjdHNMaXN0W2ldLnByb2R1Y3ROYW1lICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2l0ZW0tcHJpY2UgaXRlbS1wcmljZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdFByaWNlICsgJyDRgtCzXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX2l0ZW0tY291bnQgaXRlbS1jb3VudCBkLWZsZXhcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvdW50X19idXR0b24gYnV0dG9uLXN1YnRyYWN0IGgtMTAwXCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb3VudF9fYnV0dG9uIGJ1dHRvbi1jb3VudCBoLTEwMFwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdENvdW50ICsgJ1xcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb3VudF9fYnV0dG9uIGJ1dHRvbi1hZGQgaC0xMDBcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2l0ZW0tcHJpY2UgaXRlbS1wcmljZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgKyBzdW1tYXJ5UHJpY2UgKyAnINGC0LNcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX2J1dHRvbi1yZW1vdmUgYnV0dG9uLXJlbW92ZVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNi43MDggMTYuNzA3XCI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDI4YTA7fVxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwXzEwMjVcIiBkYXRhLW5hbWU9XCJHcm91cCAxMDI1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk0MjAuODU0IDM4MTEuODU0KVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cIkxpbmVfNTFcIiBkPVwiTTAgMGwxNiAxNlwiIGNsYXNzPVwiY2xzLTFcIiBkYXRhLW5hbWU9XCJMaW5lIDUxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05NDIwLjUgLTM4MTEuNSlcIi8+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwiTGluZV81MlwiIGQ9XCJNMCAwbDE2IDE2XCIgY2xhc3M9XCJjbHMtMVwiIGRhdGEtbmFtZT1cIkxpbmUgNTJcIiB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgLTI3OTYuNSAtNjYwOClcIi8+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICB9XG4gICAkKCcjY2hvc2VuLXByb2R1Y3RzJykucHJlcGVuZChwcm9kdWN0cyk7XG4gICAvLyAkKCcjaXRlbS1jb3VudCcpLnRleHQoKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgIHByb2R1Y3RzQ291bnQgKz0gMTtcbiAgICAgICBwcm9kdWN0c1N1bW1hcnlQcmljZSArPSBwcm9kdWN0c0xpc3RbaV0ucHJvZHVjdFByaWNlKjE7XG4gICAgfVxuICAgIHByb2R1Y3RzQ291bnRUZXh0ID0gcHJvZHVjdHNDb3VudCA8PSAxID8gcHJvZHVjdHNDb3VudCArIFwiINGC0L7QstCw0YBcIiA6IChwcm9kdWN0c0NvdW50ID4gMSAmJiBwcm9kdWN0c0NvdW50IDwgNSA/IHByb2R1Y3RzQ291bnQgKyBcIiDRgtC+0LLQsNGA0LBcIiA6IHByb2R1Y3RzQ291bnQgKyBcIiDRgtC+0LLQsNGA0L7QslwiKTtcbiAgICAkKCcjaXRlbS1jb3VudCcpLnRleHQocHJvZHVjdHNDb3VudFRleHQpO1xuICAgICQoJyNpdGVtLXN1bW1hcnknKS50ZXh0KHByb2R1Y3RzU3VtbWFyeVByaWNlKTtcblxuICAgJCgnI3N1bW1hcnktc3VibWl0JykuY2xpY2soKCkgPT4ge1xuICAgICAgbGV0IGNob3NlblByb2R1Y3RzTmFtZSA9ICQoJyNjaG9zZW4tcHJvZHVjdHMtbmFtZScpO1xuICAgICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnNsaWRlVXAoJ3Nsb3cnKTtcblxuICAgICAgY2hvc2VuUHJvZHVjdHNOYW1lLmFkZENsYXNzKCdvcHRpb24tbmFtZV9fY29tcGxldGVkJylcbiAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb25fX2NvbXBsZXRlZC1zeW1ib2wnKS5yZW1vdmVDbGFzcygnc3ltYm9sLXVuY29tcGxldGVkJylcbiAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5yZW1vdmVDbGFzcygnc3ltYm9sLXVuY29tcGxldGVkJylcbiAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb24tZGVzY3JpcHRpb25fX29wdGlvbi1pbWFnZScpLnJlbW92ZUNsYXNzKCdvcHRpb24taW1hZ2UtLWFjdGl2ZScpO1xuXG4gICAgICBpZihjaG9zZW5Qcm9kdWN0c05hbWUuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jaGlsZHJlbigpLmhhc0NsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJykpe1xuICAgICAgICAgICQoJyNjaG9zZW4tcHJvZHVjdHMtbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgfVxuICAgICAgJCgnI2N1c3RvbWVyLWluZm9ybWF0aW9uJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWRlc2NyaXB0aW9uX19vcHRpb24taW1hZ2UnKS5hZGRDbGFzcygnb3B0aW9uLWltYWdlLS1hY3RpdmUnKTtcbiAgIH0pO1xuXG4gICAkKCcjY2hvc2VuLXByb2R1Y3RzLW5hbWUnKS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKSkge1xuICAgICAgICAgICAkKCcjY2hvc2VuLXByb2R1Y3RzJykuc2xpZGVVcCgnc2xvdycpO1xuICAgICAgICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgJCgnI2Nob3Nlbi1wcm9kdWN0cycpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAgICAkKGUudGFyZ2V0KS5hZGRDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgIH1cbiAgIH0pO1xuXG4gICAgJCgnI2N1c3RvbWVyLWlzbGVnYWwnKS5jbGljaygoZSkgPT4ge1xuICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAkKCcjbGVnYWxFbnRpdHlGb3JtJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5hZGRDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJykuY2xpY2soKCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpZigkKCcub3Blbi1ibG9jaycpLmhhc0NsYXNzKCdvcGVuLWJsb2NrLS1vcGVuZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgJCgnLm9wZW4tYmxvY2snKS5yZW1vdmVDbGFzcygnb3Blbi1ibG9jay0tb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgJCgnI2xlZ2FsRW50aXR5Rm9ybScpLnNsaWRlVXAoJ3Nsb3cnKTtcbiAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAkKCcub3Blbi1ibG9jaycpLmFkZENsYXNzKCdvcGVuLWJsb2NrLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICAgICAkKCcjbGVnYWxFbnRpdHlGb3JtJykuc2xpZGVEb3duKCdzbG93Jyk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgIH1lbHNle1xuICAgICAgICAgICAkKCcjbGVnYWxFbnRpdHlGb3JtJykuc2xpZGVVcCgnc2xvdycpO1xuICAgICAgICAgICAkKCcub3Blbi1ibG9jaycpLnJlbW92ZUNsYXNzKCdvcGVuLWJsb2NrLS1vcGVuZWQnKTtcbiAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjY3VzdG9tZXItcGlja3VwJykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgaWYoJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1jb3VyaWVyLWV4cHJlc3MnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLXBvc3QnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAkKCcucGlja3VwJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgfWVsc2Uge1xuICAgICAgICAgICAkKCcucGlja3VwJykuc2xpZGVVcCgpO1xuICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNjdXN0b21lci1jb3VyaWVyLWVjbycpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgaWYoJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgJCgnI2N1c3RvbWVyLXBvc3QnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAkKCcucGlja3VwJykuc2xpZGVVcCgpO1xuICAgICAgIH1cbiAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgJCgnLmNvdXJpZXInKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgJCgnLmNvdXJpZXInKS5zbGlkZVVwKCk7XG4gICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCcjY3VzdG9tZXItY291cmllci1leHByZXNzJykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgaWYoJCgnI2N1c3RvbWVyLXBpY2t1cCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLXBvc3QnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1waWNrdXAnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZWNvJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21lci1wb3N0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJy5waWNrdXAnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmNvdXJpZXInKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoJyNjdXN0b21lci1wb3N0JykuY2xpY2soKCkgPT4ge1xuICAgICAgICBpZigkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItY291cmllci1lY28nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2N1c3RvbWVyLWNvdXJpZXItZXhwcmVzcycpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItcGlja3VwJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJy5jb3VyaWVyJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCgnLnBpY2t1cCcpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLm5leHQtYnV0dG9uJykuY2xpY2soKCk9PiB7XG4gICAgICAgIGxldCBjdXN0b21lckluZm9ybWF0aW9uTmFtZSA9ICQoJyNjdXN0b21lci1pbmZvcm1hdGlvbi1uYW1lJyk7XG4gICAgICAgICQoJyNjdXN0b21lci1pbmZvcm1hdGlvbicpLnNsaWRlVXAoJ3Nsb3cnKTtcblxuICAgICAgICBjdXN0b21lckluZm9ybWF0aW9uTmFtZS5hZGRDbGFzcygnb3B0aW9uLW5hbWVfX2NvbXBsZXRlZCcpXG4gICAgICAgICAgICAuc2libGluZ3MoJy5vcHRpb25fX2NvbXBsZXRlZC1zeW1ib2wnKS5yZW1vdmVDbGFzcygnc3ltYm9sLXVuY29tcGxldGVkJylcbiAgICAgICAgICAgIC5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLnJlbW92ZUNsYXNzKCdzeW1ib2wtdW5jb21wbGV0ZWQnKVxuICAgICAgICAgICAgLnNpYmxpbmdzKCcub3B0aW9uLWRlc2NyaXB0aW9uX19vcHRpb24taW1hZ2UnKS5yZW1vdmVDbGFzcygnb3B0aW9uLWltYWdlLS1hY3RpdmUnKTtcblxuICAgICAgICBpZihjdXN0b21lckluZm9ybWF0aW9uTmFtZS5zaWJsaW5ncygnLm9wdGlvbi1hYmxlLXN5bWJvbCcpLmNoaWxkcmVuKCkuaGFzQ2xhc3MoJ2FibGUtc3ltYm9sX19vcGVuZWQnKSl7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24tbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWFibGUtc3ltYm9sJykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNkZWxpdmVyeScpLnNsaWRlRG93bignc2xvdycpO1xuICAgICAgICAkKCcjZGVsaXZlcnktbmFtZScpLnNpYmxpbmdzKCcub3B0aW9uLWRlc2NyaXB0aW9uX19vcHRpb24taW1hZ2UnKS5hZGRDbGFzcygnb3B0aW9uLWltYWdlLS1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJyNjdXN0b21lci1pbmZvcm1hdGlvbi1uYW1lJykuc2libGluZ3MoJy5vcHRpb24tYWJsZS1zeW1ib2wnKS5jbGljaygoZSkgPT4ge1xuICAgICAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpKSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24nKS5zbGlkZVVwKCdzbG93Jyk7XG4gICAgICAgICAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnYWJsZS1zeW1ib2xfX29wZW5lZCcpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjY3VzdG9tZXItaW5mb3JtYXRpb24nKS5zbGlkZURvd24oJ3Nsb3cnKTtcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmFkZENsYXNzKCdhYmxlLXN5bWJvbF9fb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykuY2xpY2soKGUpID0+IHtcbiAgICAgICBpZigkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICB7XG5cbiAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKTtcbiAgICAgICB9XG5cbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICQoJyNjYXJkLW9ubGluZScpLnNsaWRlRG93bigpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLWluc2lkZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAkKCcjY3JlZGl0Jykuc2xpZGVVcCgpXG4gICAgICAgICAgICAkKCcjaW5zdGFsbG1lbnQtcGxhbicpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICQoJyNjYXJkLW9ubGluZScpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1Ym1pdFRleHQgPSAn0J7RhNC+0YDQvNC40YLRjCDQt9Cw0LrQsNC3JztcbiAgICAgICAgJCgnLnN1Ym1pdC1mb3JtJykudGV4dChzdWJtaXRUZXh0KTtcblxuICAgIH0pO1xuXG4gICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHwgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY2FyZC1vbmxpbmUnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY291cmllci1jYXNoJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKVxuICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgaWYoJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWluc3RhbGxtZW50LXBsYW4nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI3BheW1lbnQtY3JlZGl0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2NyZWRpdCcpLnNsaWRlVXAoKVxuICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyc7XG4gICAgICAgICQoJy5zdWJtaXQtZm9ybScpLnRleHQoc3VibWl0VGV4dCk7XG5cblxuICAgIH0pO1xuXG4gICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgIGlmKCQoJyNwYXltZW50LWJhbmstdHJhbnNmZXInKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jb3VyaWVyLWNhc2gnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcpID09PSB0cnVlIHx8ICQoJyNwYXltZW50LWNyZWRpdCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1jcmVkaXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY3JlZGl0Jykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVEb3duKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICQoJyNpbnN0YWxsbWVudC1wbGFuJykuc2xpZGVVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VibWl0VGV4dCA9ICfQntGE0L7RgNC80LjRgtGMINC30LDQutCw0Lcg0LIg0YDQsNGB0YHRgNC+0YfQutGDJztcbiAgICAgICAgJCgnLnN1Ym1pdC1mb3JtJykudGV4dChzdWJtaXRUZXh0KTtcblxuICAgIH0pO1xuXG4gICAgJCgnI3BheW1lbnQtY3JlZGl0JykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgaWYoJCgnI3BheW1lbnQtYmFuay10cmFuc2ZlcicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtYmFuay1pbnNpZGUnKS5wcm9wKCdjaGVja2VkJykgPT09IHRydWUgfHxcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgJCgnI3BheW1lbnQtaW5zdGFsbG1lbnQtcGxhbicpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSB8fCAkKCcjcGF5bWVudC1jYXJkLW9ubGluZScpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAge1xuXG4gICAgICAgICAgICAkKCcjcGF5bWVudC1iYW5rLXRyYW5zZmVyJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWJhbmstaW5zaWRlJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNvdXJpZXItY2FzaCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjcGF5bWVudC1pbnN0YWxsbWVudC1wbGFuJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJyNwYXltZW50LWNhcmQtb25saW5lJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgJCgnI2luc3RhbGxtZW50LXBsYW4nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAkKCcjY2FyZC1vbmxpbmUnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgICAkKCcjY3JlZGl0Jykuc2xpZGVEb3duKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICQoJyNjcmVkaXQnKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRUZXh0ID0gJ9Ce0YTQvtGA0LzQuNGC0Ywg0LfQsNC60LDQtyDQsiDQutGA0LXQtNC40YInO1xuICAgICAgICAkKCcuc3VibWl0LWZvcm0nKS50ZXh0KHN1Ym1pdFRleHQpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9