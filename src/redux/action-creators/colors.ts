import { Dispatch } from 'react'
import { db } from '../../firebase'
import { colorsAction, colorsActionTypes } from '../types/colorsTypes'

export const loadColors = () => {
	const colors: any[] = []
	return async (dispatch: Dispatch<colorsAction>) => {
		try {
			dispatch({ type: colorsActionTypes.LOAD_COLORS })
			const colorsRef = await db.collection('colors').get()
			await colorsRef.forEach(color => colors.push(color.data()))
			dispatch({ type: colorsActionTypes.LOAD_COLORS_SUCCESS, payload: colors })
		} catch (error) {
			dispatch({ type: colorsActionTypes.LOAD_COLORS_ERROR, payload: error })
		}
	}
}
