import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeFilterReducer from "./filterTypes/filterTypesReducer"

const rootReducer = combineReducers({
    data: dataReducer,
    bakeFilter: bakeFilterReducer
})

export default rootReducer;