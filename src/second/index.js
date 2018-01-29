import secondVue from './vue-f-second.vue';
export default secondVue;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('second-vue', secondVue);
}
