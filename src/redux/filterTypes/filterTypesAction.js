import {BAKE_FILTER} from "./filterTypesTypes"

export const filteredBake = (newBakeArray) => {
    return {
        type: BAKE_FILTER,
        update: newBakeArray
    }
}