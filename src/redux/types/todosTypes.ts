import { ITAG } from './tagsTypes'

export enum todosActionTypes {
	LOAD_TODOS = 'LOAD_TODO',
	LOAD_TODOS_SUCCESS = 'LOAD_TODO_SUCCESS',
	LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR',
	ADD_TODO = 'ADD_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	EDIT_TODO = 'EDIT_TODO',
	REMOVE_TAG = 'REMOVE_TAG',
	CHANGE_TODO_COMPLETE_STATUS = 'CHANGE_TODO_COMPLETE_STATUS',
}
export interface ITODO {
	title: string
	finished: boolean
	text: string
	tag: ITAG | null
	date?: any
	priorityValue: number
	priorityColor: string
	id?: string
	projectName: string
}
export interface ITODOS {
	todos: ITODO[]
	loaded: boolean
	loading: boolean
	error: string | null
}
type loadTodos = {
	type: todosActionTypes.LOAD_TODOS
}
type loadTodosSuccess = {
	type: todosActionTypes.LOAD_TODOS_SUCCESS
	payload: ITODO[]
}
type loadTodosError = {
	type: todosActionTypes.LOAD_TODOS_ERROR
	payload: string
}
type addTodo = {
	type: todosActionTypes.ADD_TODO
	payload: ITODO
}
type removeTodo = {
	type: todosActionTypes.REMOVE_TODO
	payload: string
}
type completeTodo = {
	type: todosActionTypes.CHANGE_TODO_COMPLETE_STATUS
	payload: string
}
type editTodo = {
	type: todosActionTypes.EDIT_TODO
	payload: ITODO
}
type removeTag = {
	type: todosActionTypes.REMOVE_TAG
	payload: string
}
export type todosAction = loadTodos | loadTodosSuccess | loadTodosError | addTodo | removeTodo | completeTodo | editTodo | removeTag
