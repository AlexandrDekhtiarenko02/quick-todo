import { IPROJECTS, projectAction, projectActionTypes } from '../types/projectsTypes'

const intialState: IPROJECTS = {
	projects: [],
	currentProject: '',
	currentCategory: '',
	currentProjectTitle: '',
	loading: false,
	error: null,
}
export const projectsReducer = (state = intialState, action: projectAction): IPROJECTS => {
	switch (action.type) {
		case projectActionTypes.LOAD_PROJECTS: {
			return {
				...state,
				loading: true,
			}
		}
		case projectActionTypes.LOAD_PROJECTS_SUCCESS: {
			return {
				...state,
				projects: action.payload,
				loading: false,
			}
		}
		case projectActionTypes.LOAD_PROJECTS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case projectActionTypes.ADD_PROJECT: {
			return {
				...state,
				projects: [...state.projects, action.payload],
			}
		}
		case projectActionTypes.REMOVE_PROJECT: {
			return {
				...state,
				projects: state.projects.filter(project => project.id !== action.payload),
			}
		}
		case projectActionTypes.SET_CURRENT_PROJECT: {
			return {
				...state,
				currentProject: action.payload.projectId,
				currentProjectTitle: action.payload.projectName,
				currentCategory: action.payload.currentCategory,
			}
		}
		default:
			return state
	}
}
