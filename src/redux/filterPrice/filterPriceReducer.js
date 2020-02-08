import {BAKE_PRICE_FILTER} from "./filterPriceTypes";

//define initial states
const initialData = {
    updatedBakePriceArray: []
}

//define reducer 
const bakePriceReducer = (state = initialData, action) => {
    switch (action.type) {
        case BAKE_PRICE_FILTER: 
        return {
            ...state, 
            updatedBakePriceArray: action.update
        }
        default: return state
    }
}

export default bakePriceReducer;