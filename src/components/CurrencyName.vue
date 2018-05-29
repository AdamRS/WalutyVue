<template>
    <tr>
        <td>{{ index +1}}</td>
        <td>{{ code }}</td>
        <td>{{ currency }}</td>
        <td class="float-right">{{ this.cos[code]}}</td>
    </tr>
</template>

<script>
export default {
    name: 'CurrencyName',
    props: [
        "index", "currency", "code", "cos"
    ],
    data() {
        return {
        }
    },
}
</script>
<style>

</style>