import {ORDER_BAKE} from "././orderBakeTypes";

//define initial states
const initialData = {
    newBakeOrder: []
}

//define reducer 
const getNewBakeOrderReducer = (state = initialData, action) => {
    switch (action.type) {
        case ORDER_BAKE: 
        return {
            ...state, 
            newBakeOrder: state.newBakeOrder.concat(action.update)
        }
        default: return state
    }
}

export default getNewBakeOrderReducer;