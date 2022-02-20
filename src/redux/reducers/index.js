import { combineReducers } from 'redux'
import userReducer from './userReducer'
import historyReducer from './historyReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
	user: userReducer,
	history: historyReducer,
	product: productReducer,
})

export default rootReducer
