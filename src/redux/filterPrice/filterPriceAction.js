import {BAKE_PRICE_FILTER} from "./filterPriceTypes"

export const filterBakePrice = (newPriceArray) => {
    return {
        type: BAKE_PRICE_FILTER,
        update: newPriceArray
    }
}