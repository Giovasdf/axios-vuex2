import axios from "axios";
export default {
        async getIndicadoresEconomicos({ commit }){
            try {
                const response = await axios.get("https://mindicador.cl/api");
                commit("changeDolarPrice",response.data.dolar.valor);
            } catch (error) {
                console.error("Error al obtener los indicadores económicos:", error);
            }
        }
}