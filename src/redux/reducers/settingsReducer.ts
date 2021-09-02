import { ISETTINGS_STATE, settingsAction, settingsActionTypes } from '../types/settingsTypes'

const initialState: ISETTINGS_STATE = {
	settings: {
		name: '',
		surname: '',
		requiredGoalPoints: 6,
		language: 'russian',
		theme: '',
	},
	loading: false,
	error: null,
}
export const settingsReducer = (state = initialState, action: settingsAction): ISETTINGS_STATE => {
	switch (action.type) {
		case settingsActionTypes.LOAD_SETTINGS: {
			return {
				...state,
				loading: true,
			}
		}
		case settingsActionTypes.LOAD_SETTIGNS_SUCCESS: {
			return {
				...state,
				loading: false,
				settings: action.payload,
			}
		}
		case settingsActionTypes.LOAD_SETTIGNS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case settingsActionTypes.CHANGE_SETTIGNS: {
			return {
				...state,
				settings: action.payload,
			}
		}
		default:
			return state
	}
}
