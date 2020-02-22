import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeFilterReducer from "./filterTypes/filterTypesReducer"
import getProductDetailsReducer from "./productdetails/productDetailsReducer"
import getNewBakeOrderReducer from "./orderBake/orderBakeReducer"
import getUpdateBakeOrderReducer from "./updateOrder/updateOrderReducer"
import getFinalBakeOrderReducer from "./finalOrder/finalOrderReducer"
import getUpdatedProductDetailsReducer from "./updateProductDetails/updateProductDetailsReducer"
import priceFilterReducer from './filterPrice/filterPriceReducer'

const rootReducer = combineReducers({
    data: dataReducer,
    bakeFilter: bakeFilterReducer,
    getProductDetails: getProductDetailsReducer,
    getUpdatedProductDetails: getUpdatedProductDetailsReducer,
    getNewBakeOrder: getNewBakeOrderReducer, 
    getUpdateBakeOrder: getUpdateBakeOrderReducer, 
    getFinalBakeOrder: getFinalBakeOrderReducer, 
    priceFilter: priceFilterReducer
})

export default rootReducer;