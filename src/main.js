import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App,{
    props: {
      symbolspoint: "http://data.fixer.io/api/symbols?access_key=6d72d36d698dfa7a26c809e8d5a708e6&format=1",
      ratespoint: "http://data.fixer.io/api/latest?access_key=6d72d36d698dfa7a26c809e8d5a708e6&format=1"
    }
  })
})