import firebase from 'firebase'
import { Dispatch } from 'react'
import { db } from '../../firebase'
import { ISTATISTIC_DAY, IUSER_DATA, userAction, userActionTypes } from '../types/userTypes'
import { IRANK } from '../types/ranksTypes'
import { store } from '../../redux'
export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>
export const loadUser = () => {
	return (dispatch: Dispatch<userAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				if (user) {
					dispatch({ type: userActionTypes.LOAD_USER })
					const userData = (await (await db.collection('users').doc(user?.uid).get()).data()) as IUSER_DATA
					if (userData.statistic.some(item => item.date === new Date().toISOString().split('T')[0])) {
						dispatch({
							type: userActionTypes.LOAD_USER_SUCCESS,
							payload: userData,
						})
					} else {
						const newStatisticDay: ISTATISTIC_DAY = {
							date: new Date().toISOString().split('T')[0],
							count: 0,
							receivedGoalBonus: false,
						}
						await db
							.collection('users')
							.doc(user?.uid)
							.update({
								statistic: [...userData.statistic, newStatisticDay],
							})
						const updatedData = (await (await db.collection('users').doc(user?.uid).get()).data()) as IUSER_DATA
						dispatch({
							type: userActionTypes.LOAD_USER_SUCCESS,
							payload: updatedData,
						})
					}
				}
			})
		} catch (error) {
			dispatch({
				type: userActionTypes.LOAD_USER_ERROR,
				payload: error,
			})
		}
	}
}

export const increaseCompletedTodos = () => {
	return (dispatch: Dispatch<userAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const userData = await db.collection('users').doc(user?.uid).get()
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						completedTodos: userData.data()?.completedTodos + 1,
					})
				dispatch({
					type: userActionTypes.INCREASE_COMPLETED_TODOS,
				})
			})
		} catch (error) {
			dispatch({
				type: userActionTypes.LOAD_USER_ERROR,
				payload: error,
			})
		}
	}
}
export const decreaseCompletedTodos = () => {
	return (dispatch: Dispatch<userAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const userData = await db.collection('users').doc(user?.uid).get()
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						completedTodos: userData.data()?.completedTodos - 1,
					})
				dispatch({
					type: userActionTypes.DECREASE_COMPLETED_TODOS,
				})
			})
		} catch (error) {
			dispatch({
				type: userActionTypes.LOAD_USER_ERROR,
				payload: error,
			})
		}
	}
}
export const increasePoints = (xp: number) => {
	return (dispatch: Dispatch<userAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const userData = await db.collection('users').doc(user?.uid).get()
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						points: userData.data()?.points + xp,
					})
				dispatch({
					type: userActionTypes.INCREASE_POINTS,
					payload: xp,
				})
			})
		} catch (error) {
			dispatch({
				type: userActionTypes.LOAD_USER_ERROR,
				payload: error,
			})
		}
	}
}
export const decreasePoints = (xp: number) => {
	return (dispatch: Dispatch<userAction>) => {
		try {
			firebase.auth().onAuthStateChanged(async user => {
				const userData = await db.collection('users').doc(user?.uid).get()
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						points: userData.data()?.points - xp,
					})
				dispatch({
					type: userActionTypes.DECREASE_POINTS,
					payload: xp,
				})
			})
		} catch (error) {
			dispatch({
				type: userActionTypes.LOAD_USER_ERROR,
				payload: error,
			})
		}
	}
}
export const increaseCurrentDayGoal = () => {
	return (dispatch: Dispatch<userAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			const statisticRef = (await (await db.collection('users').doc(user?.uid).get()).data()) as IUSER_DATA
			const currentStatisticDay = statisticRef.statistic.find(
				item => item.date === new Date().toISOString().split('T')[0]
			) as ISTATISTIC_DAY
			if (currentStatisticDay.count + 1 === statisticRef.settings.requiredGoalPoints && currentStatisticDay.receivedGoalBonus === false) {
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						statistic: statisticRef?.statistic.map((item: ISTATISTIC_DAY) =>
							item.date === new Date().toISOString().split('T')[0] ? { ...item, receivedGoalBonus: true, count: item.count + 1 } : item
						),
					})
				dispatchStore(increasePoints(25))
				dispatch({ type: userActionTypes.SET_RECEIVED_GOAL_BONUS })
			} else {
				await db
					.collection('users')
					.doc(user?.uid)
					.update({
						statistic: statisticRef?.statistic.map((item: ISTATISTIC_DAY) =>
							item.date === new Date().toISOString().split('T')[0] ? { ...item, count: item.count + 1 } : item
						),
					})
			}
			dispatch({ type: userActionTypes.INCREASE_CURRENT_DAY_GOAL_POINTS })
		})
	}
}
export const decreaseCurrentDayGoal = () => {
	return (dispatch: Dispatch<userAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			const statisticRef = await (await db.collection('users').doc(user?.uid).get()).data()
			db.collection('users')
				.doc(user?.uid)
				.update({
					statistic: statisticRef?.statistic.map((item: ISTATISTIC_DAY) =>
						item.date === new Date().toISOString().split('T')[0] ? { ...item, count: item.count - 1 } : item
					),
				})
			dispatch({ type: userActionTypes.DECREASE_CURRENT_DAY_GOAL_POINTS })
		})
	}
}
export const increaseUserRank = () => {
	return (dispatch: Dispatch<userAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			const ranks = (await (await db.collection('features').doc('ranks').get()).data()?.values) as IRANK[]
			const userRef = await db.collection('users').doc(user?.uid)
			const currentRankNumberData = (await userRef.get()).data() as IUSER_DATA
			userRef.update({
				currentRank: ranks[currentRankNumberData?.currentRankNumber + 1].rank,
				currentRankNumber: currentRankNumberData?.currentRankNumber + 1,
			})
			dispatch({
				type: userActionTypes.UP_RANK,
			})
		})
	}
}
export const decreaseUserRank = () => {
	return (dispatch: Dispatch<userAction>) => {
		firebase.auth().onAuthStateChanged(async user => {
			const ranks = (await (await db.collection('features').doc('ranks').get()).data()?.values) as IRANK[]
			const userRef = await db.collection('users').doc(user?.uid)
			const currentRankNumberData = (await userRef.get()).data() as IUSER_DATA
			userRef.update({
				currentRank: ranks[currentRankNumberData?.currentRankNumber - 1].rank,
				currentRankNumber: currentRankNumberData?.currentRankNumber - 1,
			})
		})
	}
}
