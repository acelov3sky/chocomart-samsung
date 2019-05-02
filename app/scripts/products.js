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
