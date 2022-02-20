import { GET_INFO_CATEGORY } from './types'

export const getInfoCategory = (data) => {
	return {
		type: GET_INFO_CATEGORY,
		payload: data,
	}
}
