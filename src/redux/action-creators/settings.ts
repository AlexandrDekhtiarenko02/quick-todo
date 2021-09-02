import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { ISETTINGS, settingsAction, settingsActionTypes } from '../types/settingsTypes'

export const loadSettings = () => {
	return (dispatch: Dispatch<settingsAction>) => {
		try {
			dispatch({ type: settingsActionTypes.LOAD_SETTINGS })
			firebase.auth().onAuthStateChanged(async user => {
				const userData = await db.collection('users').doc(user?.uid).get()
				dispatch({
					type: settingsActionTypes.LOAD_SETTIGNS_SUCCESS,
					payload: userData.data()?.settings,
				})
			})
		} catch (error) {
			dispatch({ type: settingsActionTypes.LOAD_SETTIGNS_ERROR, payload: error })
		}
	}
}
export const changeSettings = (settings: ISETTINGS) => {
	return (dispatch: Dispatch<settingsAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						settings: { ...settings },
					})
			})
		} catch (error) {
			dispatch({ type: settingsActionTypes.LOAD_SETTIGNS_ERROR, payload: error })
		}
	}
}
export const deleteAccount = () => {
	return (dispatch: Dispatch<settingsAction>) => {
		try {
			firebase.auth().onAuthStateChanged(user => {
				user?.delete()
				db.collection('users').doc(user?.uid).delete()
			})
		} catch (error) {
			dispatch({ type: settingsActionTypes.LOAD_SETTIGNS_ERROR, payload: error })
		}
	}
}
export const resetStatistic = () => {
	return (dispatch: Dispatch<settingsAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				await db.collection('users').doc(user?.uid).update({
					currentRankNumber: 0,
					points: 0,
					completedTodos: 0,
					statistic: [],
				})
			})
		} catch (error) {
			dispatch({ type: settingsActionTypes.LOAD_SETTIGNS_ERROR, payload: error })
		}
	}
}
