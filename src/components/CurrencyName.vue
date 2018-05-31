<template>
    <div>
        <div class="columns">
            <div class="col-1"> {{ index +1}}</div>
            <div class="col-2"> {{ code }}</div>
            <div class="col-4"> {{ currency }}</div>
            <div class="col-3 float-right"> {{ this.cRates[code]}}</div>
            <div class="col-2 " @click="conversionStart= !conversionStart">  Przelicz</div>
        </div>
        <div class="columns" v-if="conversionStart">
            <div class="col-12"> Tu będzie się przeliczać waluta</div>
            
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
        }
    },
}
</script>
<style>

</style>