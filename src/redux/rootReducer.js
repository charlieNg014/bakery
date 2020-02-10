import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeFilterReducer from "./filterTypes/filterTypesReducer"
import getProductDetailsReducer from "./productdetails/productDetailsReducer"
import getNewBakeOrderReducer from "./orderBake/orderBakeReducer"

const rootReducer = combineReducers({
    data: dataReducer,
    bakeFilter: bakeFilterReducer,
    getProductDetails: getProductDetailsReducer,
    getNewBakeOrder: getNewBakeOrderReducer
})

export default rootReducer;