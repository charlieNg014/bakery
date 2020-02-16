import {UPDATE_PRODUCT_DETAILS} from "./updateProductDetailsTypes";

//define initial states
const initialData = {
    updatedProductDetails: []
}

//define reducer 
const getUpdatedProductDetailsReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_DETAILS: 
        return {
            ...state, 
            updatedProductDetails: action.update
        }
        default: return state
    }
}

export default getUpdatedProductDetailsReducer;