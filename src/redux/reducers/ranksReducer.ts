import { IRANKS, ranksAction, ranksActionTypes } from '../types/ranksTypes'

const intialState: IRANKS = {
	ranks: [],
	loading: false,
	error: null,
}
export const ranksReducer = (state = intialState, action: ranksAction): IRANKS => {
	switch (action.type) {
		case ranksActionTypes.LOAD_RANKS: {
			return {
				...state,
				loading: true,
			}
		}
		case ranksActionTypes.LOAD_RANKS_SUCCESS: {
			return {
				...state,
				loading: false,
				ranks: action.payload,
			}
		}
		case ranksActionTypes.LOAD_RANKS_ERROR: {
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
