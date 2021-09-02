import { Dispatch } from 'react'
import { ranksAction, ranksActionTypes } from '../types/ranksTypes'
import { db } from '../../firebase'

export const loadRanks = () => {
	return async (dispatch: Dispatch<ranksAction>) => {
		try {
			dispatch({
				type: ranksActionTypes.LOAD_RANKS,
			})
			const ranks = await db.collection('features').doc('ranks').get()
			dispatch({
				type: ranksActionTypes.LOAD_RANKS_SUCCESS,
				payload: ranks.data()?.values,
			})
		} catch (error) {
			dispatch({
				type: ranksActionTypes.LOAD_RANKS_ERROR,
				payload: error,
			})
		}
	}
}
