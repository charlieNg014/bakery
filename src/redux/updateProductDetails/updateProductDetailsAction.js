import {UPDATE_PRODUCT_DETAILS} from "./updateProductDetailsTypes"

export const getUpdateProductDetails = (updatedProductDetails) => {
    return {
        type: UPDATE_PRODUCT_DETAILS,
        update: updatedProductDetails
    }
}