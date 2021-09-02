export enum userActionTypes {
	LOAD_USER = 'LOAD_USER',
	LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
	LOAD_USER_ERROR = 'LOAD_USER_ERROR',
	UP_RANK = 'UP_RANK',
	INCREASE_COMPLETED_TODOS = 'INCREASE_COMPLETED_TODOS',
	DECREASE_COMPLETED_TODOS = 'DECREASE_COMPLETED_TODOS',
	INCREASE_POINTS = 'INCREASE_POINTS',
	DECREASE_POINTS = 'DECREASE_POINTS',
	INCREASE_CURRENT_DAY_GOAL_POINTS = 'INCREASE_CURRENT_DAY_GOAL_POINTS',
	DECREASE_CURRENT_DAY_GOAL_POINTS = 'DECREASE_CURRENT_DAY_GOAL_POINTS',
	SET_RECEIVED_GOAL_BONUS = 'SET_RECEIVED_GOAL_BONUS',
}
export interface ISTATISTIC_DAY {
	date: string
	count: number
	receivedGoalBonus: boolean
}
interface IUSER_SETTINGS {
	requiredGoalPoints: number
}
export interface IUSER_DATA {
	fullName: string
	email: string
	ui: string
	currentRankNumber: number
	completedTodos: number
	points: number
	currentDate: string
	statistic: ISTATISTIC_DAY[]
	settings: IUSER_SETTINGS
}
export interface IUSER {
	userData: IUSER_DATA
	loading: boolean
	error: string | null
}
type loadUserAction = {
	type: userActionTypes.LOAD_USER
}
type loadUserActionSuccess = {
	type: userActionTypes.LOAD_USER_SUCCESS
	payload: IUSER_DATA
}
type loadUserActionError = {
	type: userActionTypes.LOAD_USER_ERROR
	payload: string
}
type upRank = {
	type: userActionTypes.UP_RANK
}
type increaseCompletedTodos = {
	type: userActionTypes.INCREASE_COMPLETED_TODOS
}
type decreaseCompletedTodos = {
	type: userActionTypes.DECREASE_COMPLETED_TODOS
}
type increasePoints = {
	type: userActionTypes.INCREASE_POINTS
	payload: number
}
type decreasePoints = {
	type: userActionTypes.DECREASE_POINTS
	payload: number
}
type increaseCurrentDayGoalPoints = {
	type: userActionTypes.INCREASE_CURRENT_DAY_GOAL_POINTS
}
type decreaseCurrentDayGoalPoints = {
	type: userActionTypes.DECREASE_CURRENT_DAY_GOAL_POINTS
}
type setReceivedGoalBonus = {
	type: userActionTypes.SET_RECEIVED_GOAL_BONUS
}
export type userAction =
	| loadUserAction
	| loadUserActionSuccess
	| loadUserActionError
	| upRank
	| increaseCompletedTodos
	| decreaseCompletedTodos
	| decreaseCompletedTodos
	| increasePoints
	| decreasePoints
	| increaseCurrentDayGoalPoints
	| decreaseCurrentDayGoalPoints
	| setReceivedGoalBonus
