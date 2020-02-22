import {PRICE_FILTER} from "./filterPriceTypes"

export const filteredPrice = (newPriceArray) => {
    return {
        type: PRICE_FILTER,
        update: newPriceArray
    }
}