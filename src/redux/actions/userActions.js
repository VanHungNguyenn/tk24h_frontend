import { LOGIN, GET_USER } from './types'

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
