import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { getCurrentDate } from '../../utils/dates'
import { authAction, authTypesAction, IAUTH_USER_DATA } from '../types/authTypes'

export const registerUser = (user: IAUTH_USER_DATA) => {
	const { name, surname, email, password, confirmPassword } = user
	return async (dispatch: Dispatch<authAction>) => {
		try {
			dispatch({ type: authTypesAction.REGISTER_USER })
			if (password === confirmPassword) {
				const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
				await db
					.collection('users')
					.doc(response.user?.uid)
					.set({
						ui: response.user?.uid,
						fullName: `${name} ${surname}`,
						email,
						points: 0,
						completedTodos: 0,
						currentRankNumber: 0,
						settings: {
							name: user.name,
							surname: user.surname,
							theme: 'light',
							language: 'ru',
							requiredGoalPoints: 5,
						},
						statistic: [],
					})
				await db.collection('users').doc(response.user?.uid).collection('projects').doc('myfirstTodo').set({
					color: '#aaa',
					title: 'Мой первый проект',
					id: 'myfirstTodo',
				})
				await db.collection('users').doc(response.user?.uid).collection('tags')
				await db.collection('users').doc(response.user?.uid).collection('projects').doc('myfirstTodo').collection('todos').doc().set({
					title: 'Добро пожаловать в QuickTodo',
					text: 'Это твой первый todo. Можешь выполнить его или удалить',
					finished: false,
					date: getCurrentDate(),
					tag: null,
					priorityColor: '#393E46',
					priorityValue: 1,
					projectName: 'Мой первый проект',
				})
				dispatch({ type: authTypesAction.REGISTER_USER_SUCCESS })
			} else {
				dispatch({ type: authTypesAction.REGISTER_USER_ERROR, payload: 'Введенные пароли не совпадают' })
			}
		} catch (error) {
			dispatch({ type: authTypesAction.REGISTER_USER_ERROR, payload: error })
		}
	}
}
export const checkAuth = () => {
	return (dispatch: Dispatch<authAction>) => {
		dispatch({
			type: authTypesAction.SIGN_IN,
		})
		try {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					dispatch({
						type: authTypesAction.SIGN_IN_SUCCESS,
					})
				} else {
					dispatch({
						type: authTypesAction.SIGN_IN_ERROR,
						payload: 'Такого пользователя не существует',
					})
				}
			})
		} catch (error) {
			dispatch({
				type: authTypesAction.SIGN_IN_ERROR,
				payload: error,
			})
		}
	}
}
export const signIn = (email: string, password: string) => {
	return async (dispatch: Dispatch<authAction>) => {
		dispatch({
			type: authTypesAction.SIGN_IN,
		})
		await firebase.auth().signInWithEmailAndPassword(email, password)
		dispatch({
			type: authTypesAction.SIGN_IN_SUCCESS,
		})
	}
}
export const signOut = () => {
	return async (dispatch: Dispatch<authAction>) => {
		dispatch({ type: authTypesAction.SIGN_OUT })
		await firebase.auth().signOut()
	}
}
