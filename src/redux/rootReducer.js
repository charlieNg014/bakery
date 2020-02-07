import {combineReducers} from "redux"
import dataReducer from "./data/dataReducer"
import bakeTypesReducer from "./filterTypes/filterTypesReducer"

const rootReducer = combineReducers({
    data: dataReducer,
    bakeTypes: bakeTypesReducer
})

export default rootReducer;