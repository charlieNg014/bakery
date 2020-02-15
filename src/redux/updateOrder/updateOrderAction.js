import {UPDATE_ORDER_BAKE} from "./updateOrderTypes"

export const getUpdateBakeOrder = (updatedOrder) => {
    return {
        type: UPDATE_ORDER_BAKE,
        update: updatedOrder
    }
}