import { getCurrentDate } from '../../utils/dates'
import { IUSER, userAction, userActionTypes } from '../types/userTypes'

const initialState: IUSER = {
	userData: {
		fullName: '',
		email: '',
		ui: '',
		currentRankNumber: 0,
		completedTodos: 0,
		points: 0,
		statistic: [],
		currentDate: '',
		settings: {
			requiredGoalPoints: 0,
		},
	},
	loading: false,
	error: null,
}
export const userReducer = (state = initialState, action: userAction): IUSER => {
	switch (action.type) {
		case userActionTypes.LOAD_USER: {
			return {
				...state,
				loading: true,
			}
		}
		case userActionTypes.LOAD_USER_SUCCESS: {
			return {
				...state,
				userData: action.payload,
				loading: false,
			}
		}
		case userActionTypes.LOAD_USER_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case userActionTypes.UP_RANK: {
			return {
				...state,
				userData: { ...state.userData, currentRankNumber: state.userData.currentRankNumber + 1 },
			}
		}
		case userActionTypes.INCREASE_COMPLETED_TODOS: {
			return {
				...state,
				userData: { ...state.userData, completedTodos: state.userData.completedTodos + 1 },
			}
		}
		case userActionTypes.DECREASE_COMPLETED_TODOS: {
			return {
				...state,
				userData: { ...state.userData, completedTodos: state.userData.completedTodos - 1 },
			}
		}
		case userActionTypes.INCREASE_POINTS: {
			return {
				...state,
				userData: { ...state.userData, points: state.userData.points + action.payload },
			}
		}
		case userActionTypes.DECREASE_POINTS: {
			return {
				...state,
				userData: { ...state.userData, points: state.userData.points - action.payload },
			}
		}
		case userActionTypes.INCREASE_CURRENT_DAY_GOAL_POINTS: {
			return {
				...state,
				userData: {
					...state.userData,
					statistic: state.userData.statistic.map(item =>
						item.date === new Date().toISOString().split('T')[0] ? { ...item, count: item.count + 1 } : item
					),
				},
			}
		}
		case userActionTypes.DECREASE_CURRENT_DAY_GOAL_POINTS: {
			return {
				...state,
				userData: {
					...state.userData,
					statistic: state.userData.statistic.map(item =>
						item.date === new Date().toISOString().split('T')[0] ? { ...item, count: item.count - 1 } : item
					),
				},
			}
		}
		case userActionTypes.SET_RECEIVED_GOAL_BONUS: {
			const currentDate = getCurrentDate()
			return {
				...state,
				userData: {
					...state.userData,
					statistic: state.userData.statistic.map(item => (item.date === currentDate ? { ...item, receivedGoalBonus: true } : item)),
				},
			}
		}
		default:
			return state
	}
}
