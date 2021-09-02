import { ITAGS_STATE, tagsAction, tagsActionTypes } from '../types/tagsTypes'

const intialState: ITAGS_STATE = {
	tags: [],
	loading: false,
	error: null,
}
export const tagsReducer = (state = intialState, action: tagsAction) => {
	switch (action.type) {
		case tagsActionTypes.LOAD_TAGS: {
			return {
				...state,
				loading: true,
			}
		}
		case tagsActionTypes.LOAD_TAGS_SUCCESS: {
			return {
				...state,
				loading: false,
				tags: action.payload,
			}
		}
		case tagsActionTypes.LOAD_TAGS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case tagsActionTypes.ADD_TAG: {
			return {
				...state,
				tags: [...state.tags, action.payload],
			}
		}
		case tagsActionTypes.REMOVE_TAG: {
			return {
				...state,
				tags: state.tags.filter(tag => tag.id !== action.payload),
			}
		}
		case tagsActionTypes.EDIT_TAG: {
			return {
				...state,
				tags: state.tags.map(tag => (tag.id === action.payload.id ? { ...action.payload } : tag)),
			}
		}
		default:
			return state
	}
}
