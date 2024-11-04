<template>
    <div>
        <h1>El valor del dolar es: {{ dolarPrice }}</h1>
        <button @click="getIndicadoresEconomicos">Obtener Indicadores Economicos</button>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Indicadores",
    computed: {
        ...mapState(["dolarPrice"]),

        //spread operator -> ...

        // ...mapState(["dolarPrice","country"]),
        // dolarPrice(){
        //     return this.$store.state.dolarPrice
        // }
        // country(){
        //     return this.$store.state.country
        // } 
    },
    methods:{
        ...mapActions(["getIndicadoresEconomicos"])

        // getIndicadoresEconomicos(){
        //     this.$store.dispatch("getIndicadoresEconomicos")
        // }
    }
}
</script>