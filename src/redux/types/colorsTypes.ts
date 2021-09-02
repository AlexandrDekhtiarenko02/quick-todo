export enum colorsActionTypes {
	LOAD_COLORS = 'LOAD_COLORS',
	LOAD_COLORS_SUCCESS = 'LOAD_COLORS_SUCCESS',
	LOAD_COLORS_ERROR = 'LOAD_COLORS_ERROR',
}
interface ICOLOR {
	title: string
	value: string
}
export interface ICOLORS {
	colors: ICOLOR[]
	loading: boolean
	error: null | string
}
type loadColors = {
	type: colorsActionTypes.LOAD_COLORS
}
type loadColorsSuccess = {
	type: colorsActionTypes.LOAD_COLORS_SUCCESS
	payload: ICOLOR[]
}
type loadColorsError = {
	type: colorsActionTypes.LOAD_COLORS_ERROR
	payload: string
}
export type colorsAction = loadColors | loadColorsSuccess | loadColorsError
