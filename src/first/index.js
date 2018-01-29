import firstVue from './vue-f-first.vue';
export default firstVue;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('first-vue', firstVue);
}
