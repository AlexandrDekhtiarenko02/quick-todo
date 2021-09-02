import { colorsAction, colorsActionTypes, ICOLORS } from '../types/colorsTypes'

const initialState: ICOLORS = {
	colors: [],
	loading: false,
	error: null,
}
export const colorsReducer = (state = initialState, action: colorsAction): ICOLORS => {
	switch (action.type) {
		case colorsActionTypes.LOAD_COLORS: {
			return {
				...state,
				loading: true,
			}
		}
		case colorsActionTypes.LOAD_COLORS_SUCCESS: {
			return {
				...state,
				loading: false,
				colors: action.payload,
			}
		}
		case colorsActionTypes.LOAD_COLORS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		default:
			return state
	}
}
