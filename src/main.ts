import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightGreen.darken3,
    secondary: colors.lightBlue.lighten1
  }
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
