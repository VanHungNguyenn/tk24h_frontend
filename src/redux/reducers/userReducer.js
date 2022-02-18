import { LOGIN, GET_USER } from '../actions/types'

const initialState = {
	user: [],
	token: '',
	isLogged: false,
	isAdmin: false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLogged: true,
				token: action.payload.token,
			}
		case GET_USER:
			return {
				...state,
				user: action.payload.user,
				isAdmin: action.payload.user.role === 1,
			}
		default:
			return state
	}
}

export default userReducer
