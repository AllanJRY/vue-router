import Vue from 'vue'
import App from './App.vue'
import router from './router'

export const products = [
  {
    id: 123,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur, dicta eaque fuga maxime qui quidem sequi. Adipisci beatae culpa distinctio hic ipsa, iure nisi officia voluptatibus. Ad, culpa, saepe.',
  },
  {
    id: 456,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur, dicta eaque fuga maxime qui quidem sequi. Adipisci beatae culpa distinctio hic ipsa, iure nisi officia voluptatibus. Ad, culpa, saepe.',
  },
  {
    id: 789,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur, dicta eaque fuga maxime qui quidem sequi. Adipisci beatae culpa distinctio hic ipsa, iure nisi officia voluptatibus. Ad, culpa, saepe.',
  },
];

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
