<template>
<div>
  <h1>Waluty</h1>


    <div class="container">
      <div class="columns">
        <div class="col-1"> Lp.</div>
        <div class="col-2"> Symbol</div>
        <div class="col-4"> Waluta</div>
        <div class="col-3"> Kurs</div>
        <div class="col-2"> </div>
      </div>
      <CurrencyName  v-for="(currency, code, index) in currencyNames" :key="index" :currency="currency" :index="index" :code="code" :cRates="currencyRates">
      </CurrencyName>
    </div>
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
      query : "",
    }
  },
  created() {
    axios.get(this.symbolspoint)
      .then(res => this.currencyNames = res.data.symbols);
    axios.get(this.ratespoint)
      .then(res => this.currencyRates = res.data.rates);
   
  },
}
</script>

<style>


</style>
