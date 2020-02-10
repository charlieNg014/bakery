import {ORDER_BAKE} from "./orderBakeTypes"

export const getNewBakeOrder = (newOrder) => {
    return {
        type: ORDER_BAKE,
        update: newOrder
    }
}