import {
	ADMIN_GET_ALL_USER,
	ADMIN_GET_ALL_HISTORY_ORDER,
	ADMIN_GET_ALL_HISTORY_RECHARGE,
	ADMIN_GET_ALL_CATEGORY,
} from './types'

export const adminGetAllUser = (data) => {
	return {
		type: ADMIN_GET_ALL_USER,
		payload: data,
	}
}

export const adminGetAllHistoryOrder = (data) => {
	return {
		type: ADMIN_GET_ALL_HISTORY_ORDER,
		payload: data,
	}
}

export const adminGetAllHistoryRecharge = (data) => {
	return {
		type: ADMIN_GET_ALL_HISTORY_RECHARGE,
		payload: data,
	}
}

export const adminGetAllCategory = (data) => {
	return {
		type: ADMIN_GET_ALL_CATEGORY,
		payload: data,
	}
}
