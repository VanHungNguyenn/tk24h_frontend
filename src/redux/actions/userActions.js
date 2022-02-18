import { LOGIN } from './types'

export const login = (data) => {
	return {
		type: LOGIN,
		payload: data,
	}
}
