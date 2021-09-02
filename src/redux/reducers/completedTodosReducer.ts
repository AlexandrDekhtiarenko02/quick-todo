import { completedTodosAction, completedTodosActionTypes, ICOMPLETED_TODOS } from '../types/completedTodosTypes'

const initialState: ICOMPLETED_TODOS = {
	completedTodos: [],
	loading: false,
	error: null,
}
export const completedTodosReducer = (state = initialState, action: completedTodosAction): ICOMPLETED_TODOS => {
	switch (action.type) {
		case completedTodosActionTypes.LOAD_COMPLETED_TODOS: {
			return {
				...state,
				loading: true,
			}
		}
		case completedTodosActionTypes.LOAD_COMPLETED_TODOS_SUCCESS: {
			return {
				...state,
				loading: false,
				completedTodos: action.payload,
			}
		}
		case completedTodosActionTypes.LOAD_COMPLETED_TODOS_ERROR: {
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		}
		case completedTodosActionTypes.ADD_COMPLETED_TODO: {
			return {
				...state,
				completedTodos: [...state.completedTodos, action.payload],
			}
		}
		case completedTodosActionTypes.REMOVE_COMPLETED_TODO: {
			return {
				...state,
				completedTodos: state.completedTodos.filter(todo => todo.id !== action.payload),
			}
		}
		case completedTodosActionTypes.REMOVE_ALL_COMPLETED_TODOS: {
			return {
				...state,
				completedTodos: [],
			}
		}
		default:
			return state
	}
}
