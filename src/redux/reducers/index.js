import { combineReducers } from 'redux'
import userReducer from './userReducer'
import historyReducer from './historyReducer'

const rootReducer = combineReducers({
	user: userReducer,
	history: historyReducer,
})

export default rootReducer
