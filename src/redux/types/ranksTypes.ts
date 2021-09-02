export enum ranksActionTypes {
	LOAD_RANKS = 'LOAD_RANKS',
	LOAD_RANKS_SUCCESS = 'LOAD_RANKS_SUCCESS',
	LOAD_RANKS_ERROR = 'LOAD_RANKS_ERROR',
}
export interface IRANK {
	rank: string
	requiredPoints: number
}
export interface IRANKS {
	ranks: IRANK[]
	loading: boolean
	error: null | string
}
type loadRunk = {
	type: ranksActionTypes.LOAD_RANKS
}
type loadRunkSuccess = {
	type: ranksActionTypes.LOAD_RANKS_SUCCESS
	payload: IRANK[]
}
type loadRunkError = {
	type: ranksActionTypes.LOAD_RANKS_ERROR
	payload: string
}
export type ranksAction = loadRunk | loadRunkSuccess | loadRunkError
