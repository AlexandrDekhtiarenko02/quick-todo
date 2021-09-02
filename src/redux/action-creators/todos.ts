import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { ITODO, todosAction, todosActionTypes } from '../types/todosTypes'

export const loadTodos = (currentProject: string, currentCategory: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		const todos: any[] = []

		firebase.auth().onAuthStateChanged(async user => {
			try {
				dispatch({
					type: todosActionTypes.LOAD_TODOS,
				})
				if (currentCategory !== 'completedTodos') {
					const projectTodos = await db
						.collection(`users`)
						.doc(user?.uid)
						.collection(currentCategory)
						.doc(currentProject)
						.collection('todos')
						.get()
					projectTodos.forEach(item => todos.push(item.data()))
				} else {
					const completedTodos = await db.collection(`users`).doc(user?.uid).collection(currentCategory).get()
					completedTodos.forEach(item => todos.push(item.data()))
				}
				dispatch({
					type: todosActionTypes.LOAD_TODOS_SUCCESS,
					payload: todos,
				})
			} catch (error) {
				dispatch({
					type: todosActionTypes.LOAD_TODOS_ERROR,
					payload: error,
				})
			}
		})
	}
}
export const sortTodos = (condition: string, currentProject: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		dispatch({
			type: todosActionTypes.LOAD_TODOS,
		})
		try {
			const todos: any = []
			firebase.auth().onAuthStateChanged(async user => {
				await db
				const projectTodos = await db
					.collection(`users`)
					.doc(user?.uid)
					.collection('projects')
					.doc(currentProject)
					.collection('todos')
					.orderBy(condition)
					.get()
				projectTodos.forEach(item => todos.push(item.data()))
				dispatch({
					type: todosActionTypes.LOAD_TODOS_SUCCESS,
					payload: todos,
				})
			})
		} catch (error) {
			dispatch({
				type: todosActionTypes.LOAD_TODOS_ERROR,
				payload: error,
			})
		}
	}
}
export const addTodo = (todo: ITODO, currentProject: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const todoRef = await db.collection(`users/${user?.uid}/projects`).doc(currentProject).collection('todos').doc()
				await todoRef.set({
					...todo,
					id: todoRef.id,
				})
				dispatch({
					type: todosActionTypes.ADD_TODO,
					payload: {
						...todo,
						id: todoRef.id,
						date: new Date().getDate(),
					},
				})
			})
		} catch (error) {}
	}
}
export const removeTodo = (id: string, currentProject: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db.collection(`users/${user?.uid}/projects/${currentProject}/todos`).doc(id).delete()
				dispatch({
					type: todosActionTypes.REMOVE_TODO,
					payload: id,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const removeCompletedTodo = (id: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			try {
				await db.collection('users').doc(user?.uid).collection('completedTodos').doc(id).delete()
				dispatch({ type: todosActionTypes.REMOVE_TODO, payload: id })
			} catch (error) {
				console.log(error)
			}
		})
	}
}
export const changeTodoCompleteStatus = (currentProject: string, todoId: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const todoRef = await db
					.collection('users')
					.doc(user?.uid)
					.collection('projects')
					.doc(currentProject)
					.collection('todos')
					.doc(todoId)

				const status = await todoRef.get().then(res => res.data())
				todoRef.update({
					finished: !status?.finished,
				})
				dispatch({
					type: todosActionTypes.CHANGE_TODO_COMPLETE_STATUS,
					payload: todoId,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const editTodo = (currentProject: string, editedTodo: ITODO) => {
	return (dispatch: Dispatch<todosAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db
					.collection('users')
					.doc(user?.uid)
					.collection('projects')
					.doc(currentProject)
					.collection('todos')
					.doc(editedTodo.id)
					.update({
						...editedTodo,
					})
				dispatch({
					type: todosActionTypes.EDIT_TODO,
					payload: editedTodo,
				})
			})
		} catch (error) {}
	}
}
export const removeTodoTag = (todoId: string, currentProject: string) => {
	return (dispatch: Dispatch<todosAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db.collection('users').doc(user?.uid).collection('projects').doc(currentProject).collection('todos').doc(todoId).update({
					tag: null,
				})
				dispatch({ type: todosActionTypes.REMOVE_TAG, payload: todoId })
			})
		} catch (error) {
			console.log(error)
		}
	}
}
