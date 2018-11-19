let productsList = [
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
        productCount: 1
    },
    {
        id: '2',
        image: './../app/assets/images/note9/note-9-front.png',
        productType: 'Смартфоны',
        productName: 'Смартфон Samsung Galaxy Note 9, 256 GB, Black',
        productPrice: '225000',
        productCount: 1
    }
];

$(document).ready(function () {
   let products = "";
   let productsCount = 0;
   let productsSummaryPrice = 0;
   let productsCountText = '';
   let submitText = 'Оформить заказ';
   $('.submit-form').text(submitText);

   for(let i = 0; i < productsList.length; i++){
      let summaryPrice = productsList[i].productPrice * productsList[i].productCount;
      products += '<div class="option-wrapper__cart-item cart-item d-flex align-items-center"><p class="prodID" style="display: none;">' + productsList[i].id + '</p>\n' +
          '                        <div class="cart-item__item-image d-flex justify-content-center">\n' +
          '                            <img src="'+ productsList[i].image +'" class="product-image">\n' +
          '                        </div>\n' +
          '                        <div class="cart-item__item-name item-name d-flex flex-column justify-content-start">\n' +
          '                            <h3 class="item-name__heading font-weight-normal">' + productsList[i].productType + '</h3>\n' +
          '                            <p class="item-name__par">'+ productsList[i].productName + '</p>\n' +
          '                        </div>\n' +
          '                        <div class="cart-item__item-price item-price d-flex align-items-center justify-content-center">\n' +
          '                            ' + productsList[i].productPrice + ' тг\n' +
          '                        </div>\n' +
          '                        <div class="cart-item_item-count item-count d-flex">\n' +
          '                            <div class="item-count__button button-subtract h-100">\n' +
          '                                -\n' +
          '                            </div>\n' +
          '                            <div class="item-count__button button-count h-100">\n' +
          '                                ' + productsList[i].productCount + '\n' +
          '                            </div>\n' +
          '                            <div class="item-count__button button-add h-100">\n' +
          '                                +\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <div class="cart-item__item-price item-price d-flex align-items-center justify-content-center">\n' +
          '                            ' + summaryPrice + ' тг\n' +
          '                        </div>\n' +
          '                        <div class="cart-item__button-remove button-remove">\n' +
          '                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.708 16.707">\n' +
          '                                <defs>\n' +
          '                                    <style>\n' +
          '                                        .cls-1{fill:none;stroke:#1428a0;}\n' +
          '                                    </style>\n' +
          '                                </defs>\n' +
          '                                <g id="Group_1025" data-name="Group 1025" transform="translate(9420.854 3811.854)">\n' +
          '                                    <path id="Line_51" d="M0 0l16 16" class="cls-1" data-name="Line 51" transform="translate(-9420.5 -3811.5)"/>\n' +
          '                                    <path id="Line_52" d="M0 0l16 16" class="cls-1" data-name="Line 52" transform="rotate(90 -2796.5 -6608)"/>\n' +
          '                                </g>\n' +
          '                            </svg>\n' +
          '                        </div>\n' +
          '                    </div>';
   }
   $('#chosen-products').prepend(products);
   // $('#item-count').text()
    for(let i = 0; i < productsList.length; i++){
       productsCount += 1;
       productsSummaryPrice += productsList[i].productPrice*1;
    }
    productsCountText = productsCount <= 1 ? productsCount + " товар" : (productsCount > 1 && productsCount < 5 ? productsCount + " товара" : productsCount + " товаров");
    $('#item-count').text(productsCountText);
    $('#item-summary').text(productsSummaryPrice);

   $('#summary-submit').click(() => {
      let chosenProductsName = $('#chosen-products-name');
      $('#chosen-products').slideUp('slow');

      chosenProductsName.addClass('option-name__completed')
          .siblings('.option__completed-symbol').removeClass('symbol-uncompleted')
          .siblings('.option-able-symbol').removeClass('symbol-uncompleted')
          .siblings('.option-description__option-image').removeClass('option-image--active');

      if(chosenProductsName.siblings('.option-able-symbol').children().hasClass('able-symbol__opened')){
          $('#chosen-products-name').siblings('.option-able-symbol').children().removeClass('able-symbol__opened');
      }
      $('#customer-information').slideDown('slow');
      $('#customer-information-name').siblings('.option-description__option-image').addClass('option-image--active');
   });

   $('#chosen-products-name').siblings('.option-able-symbol').click((e) => {
       if($(e.target).hasClass('able-symbol__opened')) {
           $('#chosen-products').slideUp('slow');
           $(e.target).removeClass('able-symbol__opened');
       }else {
           $('#chosen-products').slideDown('slow');
           $(e.target).addClass('able-symbol__opened');
       }
   });

    $('#customer-islegal').click((e) => {
       if(e.currentTarget.checked){
          $('#legalEntityForm').slideDown('slow');
          $('.open-block').addClass('open-block--opened').click(() => {

               if($('.open-block').hasClass('open-block--opened')){
                   $('.open-block').removeClass('open-block--opened');
                   $('#legalEntityForm').slideUp('slow');
               }else {
                   $('.open-block').addClass('open-block--opened');
                   $('#legalEntityForm').slideDown('slow');
               }
           });
       }else{
           $('#legalEntityForm').slideUp('slow');
           $('.open-block').removeClass('open-block--opened');
       }
    });

    $('#customer-pickup').click((e) => {
        if($('#customer-courier-eco').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-post').prop('checked') === true) {
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-courier-express').prop('checked', false);
            $('#customer-post').prop('checked', false);
            $('.courier').slideUp();
        }

       if(e.currentTarget.checked){
           setTimeout(() => {
              $('.pickup').slideDown();
           }, 400);
       }else {
           $('.pickup').slideUp();
       }
    });

    $('#customer-courier-eco').click((e) => {
       if($('#customer-pickup').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-post').prop('checked') === true) {
           $('#customer-pickup').prop('checked', false);
           $('#customer-courier-express').prop('checked', false);
           $('#customer-post').prop('checked', false);
           $('.pickup').slideUp();
       }
       if(e.currentTarget.checked){
           setTimeout(() => {
               $('.courier').slideDown();
           }, 400);
       }else {
          $('.courier').slideUp();
       }
    })

    $('#customer-courier-express').click((e) => {
        if($('#customer-pickup').prop('checked') === true || $('#customer-courier-eco').prop('checked') === true || $('#customer-post').prop('checked') === true) {
            $('#customer-pickup').prop('checked', false);
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-post').prop('checked', false);
            $('.pickup').slideUp();
        }
        if(e.currentTarget.checked){
            setTimeout(() => {
                $('.courier').slideDown();
            }, 400);
        }else {
            $('.courier').slideUp();
        }
    })

    $('#customer-post').click(() => {
        if($('#customer-courier-eco').prop('checked') === true || $('#customer-courier-express').prop('checked') === true || $('#customer-pickup').prop('checked') === true) {
            $('#customer-courier-eco').prop('checked', false);
            $('#customer-courier-express').prop('checked', false);
            $('#customer-pickup').prop('checked', false);
            $('.courier').slideUp();
            $('.pickup').slideUp();
        }
    });

    $('.next-button').click(()=> {
        let customerInformationName = $('#customer-information-name');
        $('#customer-information').slideUp('slow');

        customerInformationName.addClass('option-name__completed')
            .siblings('.option__completed-symbol').removeClass('symbol-uncompleted')
            .siblings('.option-able-symbol').removeClass('symbol-uncompleted')
            .siblings('.option-description__option-image').removeClass('option-image--active');

        if(customerInformationName.siblings('.option-able-symbol').children().hasClass('able-symbol__opened')){
            $('#customer-information-name').siblings('.option-able-symbol').children().removeClass('able-symbol__opened');
        }
        $('#delivery').slideDown('slow');
        $('#delivery-name').siblings('.option-description__option-image').addClass('option-image--active');
    });

    $('#customer-information-name').siblings('.option-able-symbol').click((e) => {
        if($(e.target).hasClass('able-symbol__opened')) {
            $('#customer-information').slideUp('slow');
            $(e.target).removeClass('able-symbol__opened');
        }else {
            $('#customer-information').slideDown('slow');
            $(e.target).addClass('able-symbol__opened');
        }
    });

    $('#payment-card-online').click((e) => {
       if($('#payment-bank-transfer').prop('checked') === true ||
           $('#payment-bank-inside').prop('checked') === true ||
           $('#payment-courier-cash').prop('checked') === true ||
           $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true)
       {

          $('#payment-bank-transfer').prop('checked', false);
          $('#payment-bank-inside').prop('checked', false);
          $('#payment-courier-cash').prop('checked', false);
          $('#payment-installment-plan').prop('checked', false);
          $('#payment-credit').prop('checked', false);

          $('#installment-plan').slideUp();
          $('#credit').slideUp();
       }

        if(e.currentTarget.checked){
             $('#card-online').slideDown();
        }else {
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);

    });

    $('#payment-bank-transfer').click(() => {
        if($('#payment-card-online').prop('checked') === true ||
            $('#payment-bank-inside').prop('checked') === true ||
            $('#payment-courier-cash').prop('checked') === true ||
            $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true)
        {

            $('#payment-card-online').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp()
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);

    });

    $('#payment-bank-inside').click(() => {
        if($('#payment-bank-transfer').prop('checked') === true ||
            $('#payment-card-online').prop('checked') === true ||
            $('#payment-courier-cash').prop('checked') === true ||
            $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true)
        {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp()
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);

    });

    $('#payment-courier-cash').click(() => {
        if($('#payment-bank-transfer').prop('checked') === true ||
            $('#payment-bank-inside').prop('checked') === true ||
            $('#payment-card-online').prop('checked') === true ||
            $('#payment-installment-plan').prop('checked') === true || $('#payment-credit').prop('checked') === true)
        {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#credit').slideUp()
            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        submitText = 'Оформить заказ';
        $('.submit-form').text(submitText);


    });

    $('#payment-installment-plan').click((e) => {
        if($('#payment-bank-transfer').prop('checked') === true ||
            $('#payment-bank-inside').prop('checked') === true ||
            $('#payment-courier-cash').prop('checked') === true ||
            $('#payment-card-online').prop('checked') === true || $('#payment-credit').prop('checked') === true)
        {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-card-online').prop('checked', false);
            $('#payment-credit').prop('checked', false);

            $('#card-online').slideUp();
            $('#credit').slideUp();
        }

        if(e.currentTarget.checked){
             $('#installment-plan').slideDown();
        }else {
            $('#installment-plan').slideUp();
        }

        submitText = 'Оформить заказ в рассрочку';
        $('.submit-form').text(submitText);

    });

    $('#payment-credit').click((e) => {
        if($('#payment-bank-transfer').prop('checked') === true ||
            $('#payment-bank-inside').prop('checked') === true ||
            $('#payment-courier-cash').prop('checked') === true ||
            $('#payment-installment-plan').prop('checked') === true || $('#payment-card-online').prop('checked') === true)
        {

            $('#payment-bank-transfer').prop('checked', false);
            $('#payment-bank-inside').prop('checked', false);
            $('#payment-courier-cash').prop('checked', false);
            $('#payment-installment-plan').prop('checked', false);
            $('#payment-card-online').prop('checked', false);

            $('#installment-plan').slideUp();
            $('#card-online').slideUp();
        }

        if(e.currentTarget.checked){
            $('#credit').slideDown();
        }else {
            $('#credit').slideUp();
        }

        submitText = 'Оформить заказ в кредит';
        $('.submit-form').text(submitText);

    });

});