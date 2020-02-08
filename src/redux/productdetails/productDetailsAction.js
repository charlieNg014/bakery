import {GET_PRODUCT_DETAILS} from "./productDetailsTypes"

export const getProductDetails = (productDetails) => {
    return {
        type: GET_PRODUCT_DETAILS,
        update: productDetails
    }
}