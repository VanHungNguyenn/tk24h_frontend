import {
	GET_HISTORY_ORDER,
	GET_HISTORY_RECHARGE,
	GET_HISTORY_ORDER_USER,
	GET_HISTORY_RECHARGE_USER,
	LOGOUT,
} from './types'

export const getHistoryOrder = (data) => {
	return {
		type: GET_HISTORY_ORDER,
		payload: data,
	}
}

export const getHistoryRecharge = (data) => {
	return {
		type: GET_HISTORY_RECHARGE,
		payload: data,
	}
}

export const getHistoryOrderUser = (data) => {
	return {
		type: GET_HISTORY_ORDER_USER,
		payload: data,
	}
}

export const getHistoryRechargeUser = (data) => {
	return {
		type: GET_HISTORY_RECHARGE_USER,
		payload: data,
	}
}

export const Logout = () => {
	return {
		type: LOGOUT,
	}
}
