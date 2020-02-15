import {FINAL_ORDER_BAKE} from "./finalOrderTypes";

//define initial states
const initialData = {
    finalOrder: []
}

//define reducer 
const getFinalBakeOrderReducer = (state = initialData, action) => {
    switch (action.type) {
        case FINAL_ORDER_BAKE: 
        return {
            ...state, 
            finalOrder: action.update
        }
        default: return state
    }
}

export default getFinalBakeOrderReducer;