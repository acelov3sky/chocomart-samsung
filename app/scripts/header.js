import axios from 'axios';
if (document.getElementById('ChocomartHeader') !== null) {
    var vm = new Vue({
        delimiters: ['~{', '}'],
        el: '#ChocomartHeader',
        data() {
            return {
                loading: false,
                done: false,
                panding: false,
                basketProducts: [],
                totalAmount: 0
            }
        },
        mounted () {
            function open_sidebar() {
                document.getElementById("mobile-sidebar").classList.toggle("open_sidebar");
                document.getElementById("mobile-sidebar-background").classList.toggle("block_background");
            }
            axios.get('/order/list').then((res) => {
                let response = res.data.products;
                this.basketProducts = response;
                response.forEach(product => {
                    this.totalAmount += product.count * product.offer.price;
                })
            })
        },
        methods: {
            hover_subcategory() {
                let category = document.getElementById('category-1');
                category.classList.add('category-active');
                document.getElementById('subcategory').style.display = 'flex';
            },
            leave_category() {
                let category = document.getElementById('category-1');
                category.classList.remove('category-active');
                document.getElementById('subcategory').style.display = 'none';
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