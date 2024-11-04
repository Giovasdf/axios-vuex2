import { createStore } from "vuex";
import state from "./modules/dolarState";
import actions from "./modules/dolarActions";
import mutations from "./modules/dolarMutations";

export default createStore({
    state,
    actions,
    mutations
});