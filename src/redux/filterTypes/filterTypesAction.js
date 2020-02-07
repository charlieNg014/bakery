import {BAKE_TYPES_FILTER} from "./filterTypesTypes"

export const filterBakeTypes = (newBakeArray) => {
    return {
        type: BAKE_TYPES_FILTER,
        update: newBakeArray
    }
}