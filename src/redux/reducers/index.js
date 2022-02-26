import { combineReducers } from 'redux'
import userReducer from './userReducer'
import historyReducer from './historyReducer'
import productReducer from './productReducer'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
	user: userReducer,
	history: historyReducer,
	product: productReducer,
	admin: adminReducer,
})

export default rootReducer
