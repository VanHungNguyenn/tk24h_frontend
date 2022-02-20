import { GET_INFO_CATEGORY } from '../actions/types'

const initialState = {
	infoCategory: [],
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO_CATEGORY:
			return {
				...state,
				infoCategory: action.payload,
			}
		default:
			return state
	}
}

export default productReducer
