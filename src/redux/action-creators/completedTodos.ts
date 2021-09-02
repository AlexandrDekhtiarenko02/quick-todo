import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { ITODO } from '../types/todosTypes'
import { completedTodosAction, completedTodosActionTypes } from '../types/completedTodosTypes'

export const loadCompletedTodos = () => {
	return (dispatch: Dispatch<completedTodosAction>) => {
		try {
			const completedTodos: ITODO[] = []
			dispatch({ type: completedTodosActionTypes.LOAD_COMPLETED_TODOS })
			firebase.auth().onAuthStateChanged(async user => {
				const todos = await db.collection('users').doc(user?.uid).collection('completedTodos').get()
				todos.docs.forEach(todo => completedTodos.push(todo.data() as ITODO))
				dispatch({
					type: completedTodosActionTypes.LOAD_COMPLETED_TODOS_SUCCESS,
					payload: completedTodos,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const addCompletedTodo = (todo: ITODO) => {
	return (dispatch: Dispatch<completedTodosAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			try {
				await db.collection('users').doc(user?.uid).collection('completedTodos').doc(todo.id).set(todo)
				dispatch({ type: completedTodosActionTypes.ADD_COMPLETED_TODO, payload: todo })
			} catch (error) {
				console.log(error)
			}
		})
	}
}
