import {GET_PRODUCT_DETAILS} from "./productDetailsTypes";

//define initial states
const initialData = {
    productDetails: []
}

//define reducer 
const getProductDetailsReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS: 
        return {
            ...state, 
            productDetails: action.update
        }
        default: return state
    }
}

export default getProductDetailsReducer;