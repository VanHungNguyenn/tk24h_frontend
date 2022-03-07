import {
	ADMIN_GET_ALL_USER,
	ADMIN_GET_ALL_HISTORY_ORDER,
	ADMIN_GET_ALL_HISTORY_RECHARGE,
	ADMIN_GET_ALL_CATEGORY,
	ADMIN_GET_ALL_HISTORY_MOMO,
	ADMIN_GET_ALL_HISTORY_BANK,
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

export const adminGetAllHistoryMomo = (data) => {
	return {
		type: ADMIN_GET_ALL_HISTORY_MOMO,
		payload: data,
	}
}

export const adminGetAllHistoryBank = (data) => {
	return {
		type: ADMIN_GET_ALL_HISTORY_BANK,
		payload: data,
	}
}
