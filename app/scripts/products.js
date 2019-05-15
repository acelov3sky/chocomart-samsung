if (document.getElementById('v-products') !== null) {
    var vm = new Vue({
        el: '#v-products',
        methods: {
            openSidebar () {
                document.getElementById('v-sidebar-wrapper').classList.toggle('open-v-sidebar');
            }
        }
    });
}
import axios from 'axios';
if (document.getElementById('user_info') !== null) {
    var vm = new Vue({
        delimiters: ['~{', '}'],
        el: '#user_info',
        data() {
          return {
              loading: false,
              done: false,
              panding: false,
          }
        },
        methods: {
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
