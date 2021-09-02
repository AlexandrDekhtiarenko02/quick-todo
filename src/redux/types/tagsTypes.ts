import { todosActionTypes } from './todosTypes'

export enum tagsActionTypes {
	LOAD_TAGS = 'LOAD_TAGS',
	LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS',
	LOAD_TAGS_ERROR = 'LOAD_TAGS_ERROR',
	ADD_TAG = 'ADD_TAG',
	REMOVE_TAG = 'REMOVE_TAG',
	EDIT_TAG = 'EDIT_TAG',
}
export interface ITAG {
	id: string
	title: string
	color: string
}
export interface ITAGS_STATE {
	tags: ITAG[]
	loading: boolean
	error: null | string
}
type loadTagsAction = {
	type: tagsActionTypes.LOAD_TAGS
}
type loadTagsSuccessAction = {
	type: tagsActionTypes.LOAD_TAGS_SUCCESS
	payload: ITAG[]
}
type loadTagsErrorAction = {
	type: tagsActionTypes.LOAD_TAGS_ERROR
	payload: string
}
type addTagAction = {
	type: tagsActionTypes.ADD_TAG
	payload: ITAG
}
type removeTagAction = {
	type: tagsActionTypes.REMOVE_TAG | todosActionTypes.REMOVE_TAG
	payload: string
}
type editTagAction = {
	type: tagsActionTypes.EDIT_TAG
	payload: ITAG
}
export type tagsAction = loadTagsAction | loadTagsSuccessAction | loadTagsErrorAction | addTagAction | removeTagAction | editTagAction
