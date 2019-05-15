setTimeout(function () {
    if (userInfo === null) {
        $('#registration-sign').css({'display': 'block'})
    }
}, 1500);
import axios from 'axios';
if(document.getElementById('registration-sign')) {
    new Vue({
        el: '#registration-sign',
        delimiters: ['~{', '}'],
        data: function () {
            return {
                showLoginReg: true,
                showModal: true,
                userData: {
                    username: "",
                    'user-phone': "",
                    'user-email': "",
                    'user-password': "",
                    'user-re-password': ""
                },
                loginData: {
                    email: "",
                    password: ""
                },
                login_side: true,
                errors: {
                    'user-exists': {
                        empty: false,
                        error: false
                    },
                    username: {
                        empty: false,
                        error: false
                    },
                    'user-phone': {
                        empty: false,
                        error: false
                    },
                    'user-email': {
                        empty: false,
                        error: false
                    },
                    'user-password': {
                        empty: false,
                        error: false,
                    },
                    'user-re-password': {
                        empty: false,
                        error: false
                    }
                },
                loading: false,
                done: false,
                panding: false,
                failed_validation: false
            }
        },
        mounted() {
        },
        methods: {
            registerUser() {
                let bodyFormData = new FormData();
                bodyFormData.set('username', this.userData.username);
                bodyFormData.set('user-phone', this.userData['user-phone']);
                bodyFormData.set('user-email', this.userData['user-email']);
                bodyFormData.set('user-password', this.userData['user-password']);
                bodyFormData.set('user-re-password', this.userData['user-re-password']);
                for (let property in this.errors) {
                    if (this.errors.hasOwnProperty(property)) {
                        this.errors[property].empty = false;
                        this.errors[property].error = false;
                    }
                }
                this.panding = true;
                this.loading = true;
                axios.post('register', bodyFormData).then(res => {
                    for (let property in res.data) {
                        if (res.data.hasOwnProperty(property)) {
                            if (property === 'user-exists') {
                                this.errors[property].error = true;
                            }
                            res.data[property].forEach(item => {
                                if (item === 'isEmpty') {
                                    this.errors[property].empty = true;
                                } else {
                                    this.errors[property].error = true;
                                }
                            });
                        }
                    }
                    if (res.data.length === 0) {
                        this.done = true;
                        this.loading = false;
                        setTimeout(() => {
                            this.panding = false;
                            this.done = false;
                            this.userData.username = "";
                            this.userData['user-phone'] = "";
                            this.userData['user-email'] = "";
                            this.userData['user-password'] = "";
                            this.userData['user-re-password'] = "";
                        }, 3000);
                    } else {
                        this.panding = false;
                        this.loading = false;
                    }
                    console.log(res);
                }).catch(error => {
                    this.panding = false;
                    this.loading = false;
                });
            },
            login() {
                let bodyFormData = new FormData();
                bodyFormData.set('user-email', this.loginData.email);
                bodyFormData.set('user-password', this.loginData.password);
                this.loading = true;
                this.panding = true;
                this.failed_validation = false;
                axios.post('/login', bodyFormData).then(res => {
                    if (res.data['user-email'] !== undefined && res.data['user-phone'] !== undefined && res.data['username'] !== undefined) {
                        this.done = true;
                        this.loading = false;
                        this.login_side = false;
                        setTimeout(() => {
                            this.panding = false;
                            this.done = false;
                            this.login_side = true;
                            this.showModal = false;
                            this.loginData['user-email'] = "";
                            this.loginData['user-password'] = "";
                        }, 3000);
                    } else {
                        this.panding = false;
                        this.loading = false;
                        this.failed_validation = true;
                    }
                })
            },
            closeModal() {
                document.getElementById('registration-sign').style.display = "none";
            }
        }
    })
}