<template>
    <div >
        <div class="columns">
            <div class="col-1"> {{ index +1}}</div>
            <div class="col-2"> {{ code }}</div>
            <div class="col-4"> {{ currency }}</div>
            <div class="col-3 text-right"> {{ this.cRates[code].toFixed(4)   }}   </div>
            <div class="col-2 " @click="conversionStart= !conversionStart">  <button class="btn">Przelicz</button></div>
        </div>
        <div class="columns" v-if="conversionStart">
             <input class="col-2" type="number" min="1"  v-model="money"> Euro  to    {{ (this.cRates[code] * money).toFixed(4) }}   {{ code }}  ({{currency}})
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrencyName',
    props: [
        "index", "currency", "code", "cRates"
    ],
    data() {
        return {
            conversionStart: false,
            money: 1
        }
    },
}
</script>
<style>

</style>