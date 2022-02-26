import { LOGIN, GET_USER, GET_TOKEN, SWITCH_ADMIN } from '../actions/types'

const initialState = {
	user: [],
	token: '',
	isLogged: false,
	isAdmin: false,
	adminActive: false,
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
		case GET_TOKEN:
			return {
				...state,
				token: action.payload,
				isLogged: true,
			}
		case SWITCH_ADMIN:
			return {
				...state,
				adminActive: !state.adminActive,
			}
		default:
			return state
	}
}

export default userReducer
