import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeFilterReducer from "./filterTypes/filterTypesReducer"
import getProductDetailsReducer from "./productdetails/productDetailsReducer"
import getNewBakeOrderReducer from "./orderBake/orderBakeReducer"
import getUpdateBakeOrderReducer from "./updateOrder/updateOrderReducer"
import getFinalBakeOrderReducer from "./finalOrder/finalOrderReducer"

const rootReducer = combineReducers({
    data: dataReducer,
    bakeFilter: bakeFilterReducer,
    getProductDetails: getProductDetailsReducer,
    getNewBakeOrder: getNewBakeOrderReducer, 
    getUpdateBakeOrder: getUpdateBakeOrderReducer, 
    getFinalBakeOrder: getFinalBakeOrderReducer
})

export default rootReducer;