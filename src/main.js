import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Inc from './components/Inc';
import SimpleCard from './components/SimpleCard';

Vue.config.productionTip = false;

Vue.component('Inc', Inc);
Vue.component('SimpleCard', SimpleCard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
