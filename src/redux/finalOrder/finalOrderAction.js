import {FINAL_ORDER_BAKE} from "./finalOrderTypes"

export const getFinalBakeOrder = (finalOrder) => {
    return {
        type: FINAL_ORDER_BAKE,
        update: finalOrder
    }
}