import {UPDATE_ORDER_BAKE} from "././updateOrderTypes";

//define initial states
const initialData = {
    updateOrder: []
}

//define reducer 
const getUpdateBakeOrderReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_ORDER_BAKE: 
        return {
            ...state, 
            updateOrder: action.update
        }
        default: return state
    }
}

export default getUpdateBakeOrderReducer;