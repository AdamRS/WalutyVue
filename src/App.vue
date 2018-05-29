<template>
<div>
    <h1 @click="test">Waluty</h1>
    <table class="table table-striped table-hover" >
      <thead>
        <tr>
          <th>Lp. </th>
          <th>Symbol</th>
          <th>Waluta</th>
          <th>Kurs</th>

        </tr>
      </thead>
      <tbody>
        <tr is="CurrencyName"  v-for="(currency, code, index) in currencyNames" :key="index" :currency="currency" :index="index" :code="code" :cos="currencyRates"></tr>
      </tbody>
    </table>
</div>
</template>

<script>

import axios from "axios";
import CurrencyName from "./components/CurrencyName"

export default { 
  name: 'App',
  components: {
    CurrencyName,
  },
  props: {
    symbolspoint : String,
    ratespoint : String
  },
  data() {
    return{
      currencyNames: [],
      currencyRates: [],
    }
  },
  created() {
    axios.get(this.symbolspoint)
      .then(res => this.currencyNames = res.data.symbols);
    axios.get(this.ratespoint)
      .then(res => this.currencyRates = res.data.rates);
   
  },
  methods: {
    test() {
      console.log(this.currencyRates["ALL"]);
      

    }
  }
}
</script>

<style>


</style>
