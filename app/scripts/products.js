import axios from 'axios';
if (document.getElementById('ChocomartProducts') !== null) {
    var vm = new Vue({
        el: '#ChocomartProducts',
        delimiters: ['~{', '}'],
        data() {
            return {
                loading: false,
                done: false,
                panding: false,
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-product', {
                loop: true,
                simulateTouch: false,
                navigation: {
                    nextEl: '.swiper-product-next',
                    prevEl: '.swiper-product-prev'
                }
            });
        },
        methods: {
            openSidebar () {
                document.getElementById('v-sidebar-wrapper').classList.toggle('open-v-sidebar');
            },
            reg() {
                document.getElementById('registration-sign').style.display = "block";
            },
            logout () {
                this.panding = true;
                this.loading = true;
                axios.post('/logout').then(res => {
                    this.loading = false;
                    this.done = true;
                    setTimeout(() => {
                        this.panding = false;
                        this.done = false;
                        location.reload();
                    }, 1000);

                })
            }
        }
    });
}
// if (document.getElementById('v-products') !== null) {
//     var vm = new Vue({
//         el: '#v-products',
//         methods: {
//             openSidebar () {
//                 document.getElementById('v-sidebar-wrapper').classList.toggle('open-v-sidebar');
//             }
//         }
//     });
// }

