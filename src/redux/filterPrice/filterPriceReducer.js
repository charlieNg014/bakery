import {PRICE_FILTER} from "./filterPriceTypes";

//define initial states
const initialData = {
    updatedPriceArray: []
}

//define reducer 
const priceFilterReducer = (state = initialData, action) => {
    switch (action.type) {
        case PRICE_FILTER: 
        return {
            ...state, 
            updatedPriceArray: action.update
        }
        default: return state
    }
}

export default priceFilterReducer;