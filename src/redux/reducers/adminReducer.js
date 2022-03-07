import {
	ADMIN_GET_ALL_USER,
	ADMIN_GET_ALL_HISTORY_ORDER,
	ADMIN_GET_ALL_HISTORY_RECHARGE,
	ADMIN_GET_ALL_CATEGORY,
	ADMIN_GET_ALL_HISTORY_MOMO,
	ADMIN_GET_ALL_HISTORY_BANK,
} from '../actions/types'

const initialState = {
	allHistoryOrder: [],
	allHistoryRecharge: [],
	allUser: [],
	allCategory: [],
	allHistoryMomo: [],
	allHistoryBank: [],
}

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADMIN_GET_ALL_USER:
			return {
				...state,
				allUser: action.payload,
			}
		case ADMIN_GET_ALL_HISTORY_ORDER:
			return {
				...state,
				allHistoryOrder: action.payload,
			}
		case ADMIN_GET_ALL_HISTORY_RECHARGE:
			return {
				...state,
				allHistoryRecharge: action.payload,
			}
		case ADMIN_GET_ALL_CATEGORY:
			return {
				...state,
				allCategory: action.payload,
			}
		case ADMIN_GET_ALL_HISTORY_MOMO:
			return {
				...state,
				allHistoryMomo: action.payload,
			}
		case ADMIN_GET_ALL_HISTORY_BANK:
			return {
				...state,
				allHistoryBank: action.payload,
			}
		default:
			return state
	}
}

export default adminReducer
