import { ITODOS, todosAction, todosActionTypes } from '../types/todosTypes'
const initialState: ITODOS = {
	todos: [],
	loading: false,
	loaded: false,
	error: null,
}
export const todosReducer = (state = initialState, action: todosAction): ITODOS => {
	switch (action.type) {
		case todosActionTypes.LOAD_TODOS:
			return {
				...state,
				loading: true,
				loaded: false,
			}
		case todosActionTypes.LOAD_TODOS_SUCCESS: {
			return {
				...state,
				todos: action.payload,
				loading: false,
				loaded: true,
			}
		}
		case todosActionTypes.LOAD_TODOS_ERROR: {
			return {
				...state,
				loading: false,
				loaded: false,
				error: action.payload,
			}
		}
		case todosActionTypes.ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case todosActionTypes.REMOVE_TODO: {
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		}
		case todosActionTypes.CHANGE_TODO_COMPLETE_STATUS: {
			return {
				...state,
				todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, finished: !todo.finished } : todo)),
			}
		}
		case todosActionTypes.EDIT_TODO: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload.id ? { ...action.payload } : item)),
			}
		}
		case todosActionTypes.REMOVE_TAG: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, tag: null } : item)),
			}
		}
		default:
			return state
	}
}
