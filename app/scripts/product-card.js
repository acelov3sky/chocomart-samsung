import axios from 'axios'
if (document.getElementById('product-mobile') !== null) {
    var product_card_mobile = new Vue({
        el: '#product-mobile',
        delimiters: ['~{', '}'],
        data () {
            return {
                char: false,
                buy: false,
                sent: false,
                warrant: false,
                panding: false,
                done: false,
                loading: false
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        methods: {
            BuyNow(id, count) {
                axios.get('/order/add/' + id + '/' + count).then(res => {
                    window.location.href = '/order';
                })
            },
            ToBasket(id, count) {
                document.getElementById('product-card-mobile-basket-modal').style.display = "block";
                this.panding = true;
                this.loading = true;
                axios.get('/order/add/' + id + "/" + count).then(res => {
                    this.loading = false;
                    this.done = true;
                    setTimeout(() => {
                        this.panding = false;
                        this.done = false;
                        document.getElementById('product-card-mobile-basket-modal').style.display = "none";
                    }, 1500);
                })
            }
        }
    });
}
if (document.getElementById('product-card') !== null) {
    var product_card = new Vue({
        el: '#product-card',
        delimiters: ['~{', '}'],
        data () {
            return {
                char: true,
                buy: false,
                sent: false,
                warrant: false,
                fastBuy: [],
                product: []
            }
        },
        methods: {
            closeBasket() {
                document.getElementById('product-card-basket-modal').style.display = "none";
            },
            changeThis(x) {
                var cur_sub_img = document.getElementsByClassName('product-card-images-list_item__active');
                cur_sub_img[0].classList.remove('product-card-images-list_item__active');
                var cur_img = document.getElementById('main_img');
                cur_img.style.backgroundImage = "url("+ x.src +")";
                x.classList.add('product-card-images-list_item__active');
            },
            openLink(y, x) {
                if (current_header_index !== x) {
                    document.getElementById('product-card-info-content-' + x).style.display = "block";
                    document.getElementById('product-card-info-content-' + current_header_index).style.display = "none";
                    var cur_link = document.getElementsByClassName('link-active');
                    cur_link[0].classList.remove('link-active');
                    y.classList.add('link-active');
                    current_header_index = x;
                }
            },
            closeOneClick() {
                document.getElementById('product-card-onclick-modal').style.display = "none";
            },
            buyOneCLick(id, count) {
                axios.get('/order/' + id + '/' + count).then(res => {
                    for (var i = 0; i < res.data.length; i++) {
                        if (parseInt(res.data[i].offer.id) === parseInt(id)) {
                            this.product = res.data;
                        }
                        else {
                            axios.get('/order/' + res.data[i].offer.id + '/' + 0).then(del => {
                            })
                        }
                    }
                });
            }
        }
    });
}
