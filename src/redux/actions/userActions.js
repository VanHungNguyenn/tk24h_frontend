import { LOGIN, GET_USER, GET_TOKEN, SWITCH_ADMIN } from './types'

export const login = (data) => {
	return {
		type: LOGIN,
		payload: data,
	}
}

export const getUser = (data) => {
	return {
		type: GET_USER,
		payload: data,
	}
}

export const getToken = (data) => {
	return {
		type: GET_TOKEN,
		payload: data,
	}
}

export const switchAdmin = () => {
	return {
		type: SWITCH_ADMIN,
	}
}
