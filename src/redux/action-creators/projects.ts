import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { projectAction, projectActionTypes } from '../types/projectsTypes'

export const loadProjects = () => {
	return (dispatch: Dispatch<projectAction>) => {
		const projects: any[] = []
		dispatch({ type: projectActionTypes.LOAD_PROJECTS })
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const response = await db.collection(`users/${user?.uid}/projects`)
				const loadedProjects = await response.get()
				loadedProjects.forEach(project => {
					projects.push({
						...project.data(),
						projectId: project.id,
					})
				})
				dispatch({
					type: projectActionTypes.LOAD_PROJECTS_SUCCESS,
					payload: projects,
				})
			})
		} catch (error) {
			dispatch({
				type: projectActionTypes.LOAD_PROJECTS_ERROR,
				payload: error,
			})
		}
	}
}
export const addProject = (color: string, title: string) => {
	return (dispatch: Dispatch<projectAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const response = await db.collection(`users/${user?.uid}/projects`).doc()
				await response.set({
					color: color,
					title: title,
					id: response.id,
				})
				dispatch({
					type: projectActionTypes.ADD_PROJECT,
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
export const removeProject = (id: string) => {
	return async (dispatch: Dispatch<projectAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const ref = await db.collection(`users`).doc(user?.uid).collection('projects').doc(id)
				await ref.collection('todos').onSnapshot(snapshot => {
					snapshot.docs.forEach(doc => {
						ref.collection('todos').doc(doc.id).delete()
					})
				})
				await ref.delete()
				dispatch({
					type: projectActionTypes.REMOVE_PROJECT,
					payload: id,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const changeCompleteStatus = (status: boolean) => {
	return async (dispatch: Dispatch<projectAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db.collection('users').doc(user?.uid).collection('projects').doc('myfirstTodo').collection('todos').doc('testTodo').update({
					checked: false,
				})
			})
		} catch (error) {
			console.log(error)
		}
	}
}
export const setCurrentProject = (projectId: string, projectName: string, currentCategory: string) => {
	return {
		type: projectActionTypes.SET_CURRENT_PROJECT,
		payload: {
			projectId,
			projectName,
			currentCategory,
		},
	}
}
