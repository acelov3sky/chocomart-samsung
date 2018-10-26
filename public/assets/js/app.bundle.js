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

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
    $('.toggle').click(function () {
        if ($(this).children('div').hasClass('parameter-triangle--opened')) {
            $(this).children('div').removeClass('parameter-triangle--opened');
            $(this).children('h5').removeClass('title--active');
        } else {
            $(this).children('div').addClass('parameter-triangle--opened');
            $(this).children('h5').addClass('title--active');
        }
        $(this).nextAll('.parameter-content-wrapper').slideToggle(400, 'linear');
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

var swiper = new Swiper('.swiper-product', {
    // centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-product-next',
        prevEl: '.swiper-product-prev'
    }
});

/***/ })

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvbGVzcy9tYWluLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImpRdWVyeSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm5leHRBbGwiLCJzbGlkZVRvZ2dsZSIsInN3aXBlciIsIlN3aXBlciIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzaW11bGF0ZVRvdWNoIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBQSxtQkFBT0EsQ0FBQyxHQUFSOztBQUVBQSxtQkFBT0EsQ0FBQyxHQUFSOztBQUVBO0FBQ0FDLE9BQU8sWUFBVSxDQUVoQixDQUZELEU7Ozs7Ozs7O0FDTkEseUM7Ozs7Ozs7QUNBQUQsbUJBQU9BLENBQUMsR0FBUjtBQUNBQSxtQkFBT0EsQ0FBQyxHQUFSLEU7Ozs7Ozs7QUNEQUUsMkNBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFVO0FBQ3hCRixNQUFFLFNBQUYsRUFBYUcsS0FBYixDQUFtQixZQUFVO0FBQ3pCLFlBQUdILEVBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLEtBQWpCLEVBQXdCQyxRQUF4QixDQUFpQyw0QkFBakMsQ0FBSCxFQUFtRTtBQUMvREwsY0FBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0JFLFdBQXhCLENBQW9DLDRCQUFwQztBQUNBTixjQUFFLElBQUYsRUFBUUksUUFBUixDQUFpQixJQUFqQixFQUF1QkUsV0FBdkIsQ0FBbUMsZUFBbkM7QUFDSCxTQUhELE1BSUk7QUFDQU4sY0FBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0JHLFFBQXhCLENBQWlDLDRCQUFqQztBQUNBUCxjQUFFLElBQUYsRUFBUUksUUFBUixDQUFpQixJQUFqQixFQUF1QkcsUUFBdkIsQ0FBZ0MsZUFBaEM7QUFDSDtBQUNEUCxVQUFFLElBQUYsRUFBUVEsT0FBUixDQUFnQiw0QkFBaEIsRUFBOENDLFdBQTlDLENBQTBELEdBQTFELEVBQStELFFBQS9EO0FBQ0gsS0FWRDtBQVdILENBWkQsRTs7Ozs7Ozs7QUNBQSxJQUFJQyxTQUFTLElBQUlDLE1BQUosQ0FBVyxpQkFBWCxFQUE4QjtBQUN2QztBQUNBQyxVQUFNLElBRmlDO0FBR3ZDQyxjQUFVO0FBQ05DLGVBQU8sSUFERDtBQUVOQyw4QkFBc0I7QUFGaEIsS0FINkI7QUFPdkNDLG1CQUFlLEtBUHdCO0FBUXZDQyxnQkFBWTtBQUNSQyxnQkFBUSxzQkFEQTtBQUVSQyxnQkFBUTtBQUZBO0FBUjJCLENBQTlCLENBQWIsQyIsImZpbGUiOiJhc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0YLQuNC70LggKi9cbnJlcXVpcmUoJ19zdHlsZXMvbWFpbi5sZXNzJyk7XG5cbnJlcXVpcmUoJy4vc2NyaXB0cy9tYWluLmpzJylcblxuLyog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8gKi9cbmpRdWVyeShmdW5jdGlvbigpe1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2Fzc2V0cy9sZXNzL21haW4ubGVzc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vc2lkZWJhci5qcycpO1xucmVxdWlyZSgnLi9wcm9kdWN0LmpzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvbWFpbi5qcyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLnRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCQodGhpcykuY2hpbGRyZW4oJ2RpdicpLmhhc0NsYXNzKCdwYXJhbWV0ZXItdHJpYW5nbGUtLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdkaXYnKS5yZW1vdmVDbGFzcygncGFyYW1ldGVyLXRyaWFuZ2xlLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2g1JykucmVtb3ZlQ2xhc3MoJ3RpdGxlLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignZGl2JykuYWRkQ2xhc3MoJ3BhcmFtZXRlci10cmlhbmdsZS0tb3BlbmVkJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdoNScpLmFkZENsYXNzKCd0aXRsZS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5uZXh0QWxsKCcucGFyYW1ldGVyLWNvbnRlbnQtd3JhcHBlcicpLnNsaWRlVG9nZ2xlKDQwMCwgJ2xpbmVhcicpO1xuICAgIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvc2lkZWJhci5qcyIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb2R1Y3QnLCB7XG4gICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgICBkZWxheTogMjUwMCxcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXG4gICAgfSxcbiAgICBzaW11bGF0ZVRvdWNoOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItcHJvZHVjdC1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1wcm9kdWN0LXByZXYnXG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvcHJvZHVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=