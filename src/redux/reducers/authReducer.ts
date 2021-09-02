import { authAction, authTypesAction, IAUTH } from '../types/authTypes'

const initialState: IAUTH = {
	registerUserSuccess: false,
	loginUserSuccess: false,
	loading: false,
	error: null,
}

export const authReducer = (state = initialState, action: authAction): IAUTH => {
	switch (action.type) {
		case authTypesAction.REGISTER_USER: {
			return {
				...state,
				loading: true,
			}
		}
		case authTypesAction.REGISTER_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				registerUserSuccess: true,
			}
		}
		case authTypesAction.REGISTER_USER_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case authTypesAction.SIGN_IN: {
			return {
				...state,
				loading: true,
			}
		}
		case authTypesAction.SIGN_IN_SUCCESS: {
			return {
				...state,
				loading: false,
				loginUserSuccess: true,
			}
		}
		case authTypesAction.SIGN_IN_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case authTypesAction.SIGN_OUT: {
			return {
				...state,
				loginUserSuccess: false,
			}
		}
		default:
			return state
	}
}
