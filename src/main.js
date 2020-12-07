import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Inc from './components/Inc'

Vue.config.productionTip = false;

Vue.component('Inc', Inc);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
