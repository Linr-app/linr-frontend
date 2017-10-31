import Vue from 'vue'
import App from '../components/App.vue'
import router from '../components/router'

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
});

Vue.prototype.$CalculateSnowflake = function (restaurantid, userid) {

    const pad = function (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };

    const cljs = new ClientJS();
    const d = new Date();

    return pad(cljs.getFingerprint(), 10) + d.getFullYear() + pad(d.getMonth(),2) + pad(d.getDay(), 2) + pad(restaurantid, 3) + pad(userid, 3);

};
