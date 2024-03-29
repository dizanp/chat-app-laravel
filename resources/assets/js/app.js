
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat-box', require('./components/chat/Chatbox.vue'));
Vue.component('chat-messages', require('./components/chat/Message.vue'));
Vue.component('chat-form', require('./components/chat/Form.vue'));
Vue.component('chat-userlist', require('./components/chat/Users.vue'));

const app = new Vue({
    el: '#app'
});
