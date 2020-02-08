import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeFilterReducer from "./filterTypes/filterTypesReducer"
import getProductDetailsReducer from "./productdetails/productDetailsReducer"

const rootReducer = combineReducers({
    data: dataReducer,
    bakeFilter: bakeFilterReducer,
    getProductDetails: getProductDetailsReducer
})

export default rootReducer;