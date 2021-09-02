export enum settingsActionTypes {
	LOAD_SETTINGS = 'LOAD_SETTINGS',
	LOAD_SETTIGNS_SUCCESS = 'LOAD_SETTIGNS_SUCCESS',
	LOAD_SETTIGNS_ERROR = 'LOAD_SETTIGNS_ERROR',
	CHANGE_SETTIGNS = 'CHANGE_SETTIGNS',
}
export interface ISETTINGS {
	name: string
	surname: string
	requiredGoalPoints: number
	language: string
	theme: string
}
export interface ISETTINGS_STATE {
	settings: ISETTINGS
	loading: boolean
	error: null | string
}
type loadSettingsAction = {
	type: settingsActionTypes.LOAD_SETTINGS
}
type loadSettingsSuccessAction = {
	type: settingsActionTypes.LOAD_SETTIGNS_SUCCESS
	payload: ISETTINGS
}
type loadSettingsErrorAction = {
	type: settingsActionTypes.LOAD_SETTIGNS_ERROR
	payload: string
}
type changeSettingsAction = {
	type: settingsActionTypes.CHANGE_SETTIGNS
	payload: ISETTINGS
}
export type settingsAction = loadSettingsAction | loadSettingsErrorAction | loadSettingsSuccessAction | changeSettingsAction
