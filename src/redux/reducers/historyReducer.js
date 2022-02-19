import {
	GET_HISTORY_ORDER,
	GET_HISTORY_RECHARGE,
	GET_HISTORY_RECHARGE_USER,
	GET_HISTORY_ORDER_USER,
	LOGOUT,
} from '../actions/types'

const initialState = {
	historyOrder: [],
	historyRecharge: [],
	historyOrderUser: [],
	historyRechargeUser: [],
}

const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_HISTORY_ORDER:
			return {
				...state,
				historyOrder: action.payload,
			}
		case GET_HISTORY_RECHARGE:
			return {
				...state,
				historyRecharge: action.payload,
			}
		case GET_HISTORY_RECHARGE_USER:
			return {
				...state,
				historyRechargeUser: action.payload,
			}
		case GET_HISTORY_ORDER_USER:
			return {
				...state,
				historyOrderUser: action.payload,
			}
		case LOGOUT:
			return {
				...state,
				historyOrderUser: [],
				historyRechargeUser: [],
			}
		default:
			return state
	}
}

export default historyReducer
