import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { colorsReducer } from './colors'
import { completedTodosReducer } from './completedTodosReducer'
import { projectsReducer } from './projectsReducer'
import { ranksReducer } from './ranksReducer'
import { settingsReducer } from './settingsReducer'
import { tagsReducer } from './tagsReducer'
import { todosReducer } from './todosReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
	projects: projectsReducer,
	todos: todosReducer,
	tags: tagsReducer,
	colors: colorsReducer,
	user: userReducer,
	ranks: ranksReducer,
	completedTodos: completedTodosReducer,
	auth: authReducer,
	settings: settingsReducer,
})
export type RootState = ReturnType<typeof rootReducer>
