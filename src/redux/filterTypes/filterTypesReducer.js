import {BAKE_FILTER} from "./filterTypesTypes";

//define initial states
const initialData = {
    updatedBakeArray: []
}

//define reducer 
const bakeFilterReducer = (state = initialData, action) => {
    switch (action.type) {
        case BAKE_FILTER: 
        return {
            ...state, 
            updatedBakeArray: action.update
        }
        default: return state
    }
}

export default bakeFilterReducer;