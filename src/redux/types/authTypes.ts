export enum authTypesAction {
	REGISTER_USER = 'REGISTER_USER',
	REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
	REGISTER_USER_ERROR = 'REGISTER_USER_ERROR',

	SIGN_IN = 'SIGN_IN',
	SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
	SIGN_IN_ERROR = 'SIGN_IN_ERROR',

	SIGN_OUT = 'SIGN_OUT',
}
export interface IAUTH {
	registerUserSuccess: boolean
	loginUserSuccess: boolean
	loading: boolean
	error: null | string
}
export interface IAUTH_USER_DATA {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword: string
}
type registerUserAction = {
	type: authTypesAction.REGISTER_USER
}
type registerUserSuccessAction = {
	type: authTypesAction.REGISTER_USER_SUCCESS
}
type registerUserErrorAction = {
	type: authTypesAction.REGISTER_USER_ERROR
	payload: string
}
type signInAction = {
	type: authTypesAction.SIGN_IN
}
type signInSuccessAction = {
	type: authTypesAction.SIGN_IN_SUCCESS
}
type signInErrorAction = {
	type: authTypesAction.SIGN_IN_ERROR
	payload: string
}
type signOutAction = {
	type: authTypesAction.SIGN_OUT
}
export type authAction =
	| registerUserAction
	| registerUserSuccessAction
	| registerUserErrorAction
	| signInAction
	| signInSuccessAction
	| signInErrorAction
	| signOutAction
