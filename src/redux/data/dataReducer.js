import {IMPORT_DATA} from "./dataTypes";
import {cake, bake} from "../../data"

//define initial states
const initialData = {
    initialCake: cake,
    initialBake: bake
}

//define reducer 
const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case IMPORT_DATA: 
        return {
            ...state, 
            initialCake: state.initialCake
        }

        default: return state
    }
}

export default dataReducer;

