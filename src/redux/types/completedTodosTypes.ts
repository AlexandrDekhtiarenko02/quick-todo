import { ITODO } from './todosTypes'

export enum completedTodosActionTypes {
	LOAD_COMPLETED_TODOS = 'LOAD_COMPLETED_TODOS',
	LOAD_COMPLETED_TODOS_SUCCESS = 'LOAD_COMPLETED_TODOS_SUCCESS',
	LOAD_COMPLETED_TODOS_ERROR = 'LOAD_COMPLETED_TODOS_ERROR',
	ADD_COMPLETED_TODO = 'ADD_COMPLETE_TODO',
	REMOVE_COMPLETED_TODO = 'REMOVE_COMPLETE_TODO',
	REMOVE_ALL_COMPLETED_TODOS = 'REMOVE_ALL_COMPLETED_TODOS',
}
export interface ICOMPLETED_TODOS {
	completedTodos: ITODO[]
	loading: boolean
	error: null | string
}
type loadCompletedTodos = {
	type: completedTodosActionTypes.LOAD_COMPLETED_TODOS
}
type loadCompletedTodosSuccess = {
	type: completedTodosActionTypes.LOAD_COMPLETED_TODOS_SUCCESS
	payload: ITODO[]
}
type loadCompletedTodosError = {
	type: completedTodosActionTypes.LOAD_COMPLETED_TODOS_ERROR
	payload: null | string
}
type AddCompletedTodo = {
	type: completedTodosActionTypes.ADD_COMPLETED_TODO
	payload: ITODO
}
type RemoveCompletedTodo = {
	type: completedTodosActionTypes.REMOVE_COMPLETED_TODO
	payload: string
}
type removeAllCompletedTodos = {
	type: completedTodosActionTypes.REMOVE_ALL_COMPLETED_TODOS
}
export type completedTodosAction =
	| loadCompletedTodos
	| loadCompletedTodosSuccess
	| loadCompletedTodosError
	| AddCompletedTodo
	| RemoveCompletedTodo
	| removeAllCompletedTodos
