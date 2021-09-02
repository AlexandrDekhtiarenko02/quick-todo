export enum projectActionTypes {
	LOAD_PROJECTS = 'LOAD_PROJECTS',
	LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS',
	LOAD_PROJECTS_ERROR = 'LOAD_PROJECTS_ERROR',
	ADD_PROJECT = 'ADD_PROJECT',
	REMOVE_PROJECT = 'REMOVE_PROJECT',
	CHANGE_PROJECT = 'CHANGE_PROJECT',
	SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT',
}
interface IPROJECT {
	title: string
	color: string
	id: string
}
export interface IPROJECTS {
	projects: IPROJECT[]
	currentProject: string
	currentProjectTitle: string
	currentCategory: string
	loading: boolean
	error: null | string
}
type loadProject = {
	type: projectActionTypes.LOAD_PROJECTS
}
type loadProjectSuccess = {
	type: projectActionTypes.LOAD_PROJECTS_SUCCESS
	payload: IPROJECT[]
}
type loadProjectError = {
	type: projectActionTypes.LOAD_PROJECTS_ERROR
	payload: string
}
type addProject = {
	type: projectActionTypes.ADD_PROJECT
	payload: IPROJECT
}
type removeProject = {
	type: projectActionTypes.REMOVE_PROJECT
	payload: string
}
type setCurrentProject = {
	type: projectActionTypes.SET_CURRENT_PROJECT
	payload: {
		projectId: string
		projectName: string
		currentCategory: string
	}
}
export type projectAction = loadProject | loadProjectSuccess | loadProjectError | addProject | removeProject | setCurrentProject
