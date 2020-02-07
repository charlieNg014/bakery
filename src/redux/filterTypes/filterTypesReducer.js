import {BAKE_TYPES_FILTER} from "./filterTypesTypes";

//define initial states
const initialData = {
    updatedBakeArray: []
}

//define reducer 
const bakeTypesReducer = (state = initialData, action) => {
    switch (action.type) {
        case BAKE_TYPES_FILTER: 
        return {
            ...state, 
            updatedBakeArray: action.update
        }
        default: return state
    }
}

export default bakeTypesReducer;