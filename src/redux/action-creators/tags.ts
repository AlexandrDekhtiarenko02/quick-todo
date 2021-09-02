import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { tagsAction, tagsActionTypes } from '../types/tagsTypes'
import { todosActionTypes } from '../types/todosTypes'

export const loadTags = () => {
	return (dispatch: Dispatch<tagsAction>) => {
		const tags: any[] = []
		dispatch({ type: tagsActionTypes.LOAD_TAGS })
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const response = await db.collection(`users/${user?.uid}/tags`)
				const loadedTags = await response.get()
				loadedTags.forEach(tag => {
					tags.push({
						...tag.data(),
						id: tag.id,
					})
				})
				dispatch({
					type: tagsActionTypes.LOAD_TAGS_SUCCESS,
					payload: tags,
				})
			})
		} catch (error) {
			dispatch({
				type: tagsActionTypes.LOAD_TAGS_ERROR,
				payload: error,
			})
		}
	}
}
export const addTag = (color: string, title: string) => {
	return (dispatch: Dispatch<tagsAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const response = await db.collection(`users/${user?.uid}/tags`).doc()
				await response.set({
					color: color,
					title: title,
					id: response.id,
				})
				dispatch({
					type: tagsActionTypes.ADD_TAG,
					payload: {
						color,
						title,
						id: response.id,
					},
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const removeTag = (id: string) => {
	return async (dispatch: Dispatch<tagsAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const projects = await db.collection('users').doc(user?.uid).collection('projects')
				const projectsData = await projects.get()
				await projectsData.forEach(async project => {
					const query = await projects.doc(project.id).collection('todos').where('tag.id', '==', id).get()
					query.docs.forEach(async item => {
						const todo = await item.data()
						projects.doc(project.id).collection('todos').doc(todo.id).update({
							tag: null,
						})
						dispatch({ type: todosActionTypes.REMOVE_TAG, payload: todo.id })
					})
				})
				await db.collection(`users`).doc(user?.uid).collection('tags').doc(id).delete()
				dispatch({
					type: tagsActionTypes.REMOVE_TAG,
					payload: id,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
