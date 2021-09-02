import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { TodoItem } from '../todoItem/TodoItem'
import { AddTodoDialog } from '../../dialog/addTodo/AddTodoDialog'
import { EditTodoDialog } from '../../dialog/editTodo/EditTodoDialog'
import { ITODO } from '../../../redux/types/todosTypes'
import { sortTodos } from '../../../redux/action-creators/todos'
import { TodoInfoDialog } from '../../dialog/todoInfo/TodoInfoDialog'
import { CompletedTodoItem } from '../completedTodoItem/CompletedTodoItem'
import { languages } from '../../../language'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { useStyles } from './todoListStyles'
import SortIcon from '@material-ui/icons/Sort'
import AddIcon from '@material-ui/icons/Add'

interface IPROPS {
	projectName: string | undefined
}

export const TodosList: React.FC<IPROPS> = ({ projectName }) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [openTodoInfo, setOpenTodoInfo] = useState(false)
	const { currentProject, currentCategory, loading } = useTypedSelector(state => state.projects)
	const { todos } = useTypedSelector(state => state.todos)
	const lang = useTypedSelector(state => state.settings.settings.language.toString())

	const [currentTodo, setCurrentTodo] = useState<ITODO | null>(null)
	const [visibleAddTodoDialog, setVisibleAddTodoDialog] = useState<boolean>(false)
	const [visibleEditTodoDialog, setVisibleEditTodoDialog] = useState<boolean>(false)
	const [mutableTodo, setMutableTodo] = useState<ITODO | null>(null)
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const openAddTodoDialog = () => setVisibleAddTodoDialog(true)
	const closeAddTodoDialog = () => setVisibleAddTodoDialog(false)
	const openEditTodoDialog = () => setVisibleEditTodoDialog(true)
	const closeEditTodoDialog = () => setVisibleEditTodoDialog(false)
	const handleCloseTodoInfo = () => setOpenTodoInfo(false)
	const handleOpenTodoInfo = (todo: ITODO) => {
		setOpenTodoInfo(true)
		setCurrentTodo(todo)
	}

	return (
		<Fade in={!loading}>
			<Box className={classes.contentBlock}>
				<Box display='flex' justifyContent='space-between' alignItems='center' marginTop={5}>
					<Box display='flex'>
						<Typography variant='h4' className={classes.darkGray}>
							{currentCategory === 'completedTodos' ? getCurrentLanguageTranslation(languages.completedTodos, lang) : projectName}
						</Typography>
						<Button onClick={openAddTodoDialog} color='secondary'>
							<AddIcon />
						</Button>
					</Box>
					<Box>
						<Button onClick={handleClick} color='primary' className={classes.darkGray} startIcon={<SortIcon />}>
							{getCurrentLanguageTranslation(languages.sortingLabel, lang)}
						</Button>
						<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem
								onClick={() => {
									dispatch(sortTodos('title', currentProject))
									handleClose()
								}}
							>
								{getCurrentLanguageTranslation(languages.sortingByAlphabet, lang)}
							</MenuItem>
							<MenuItem
								onClick={() => {
									dispatch(sortTodos('priorityValue', currentProject))
									handleClose()
								}}
							>
								{getCurrentLanguageTranslation(languages.sortingByPriority, lang)}
							</MenuItem>
						</Menu>
					</Box>
				</Box>
				<Divider />
				{loading ? (
					<Box marginTop={20} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
						<CircularProgress color='secondary' />
					</Box>
				) : todos.length > 0 ? (
					<Fade timeout={1000} in={!(todos.length < 0)}>
						<Box display='flex' flexDirection='column' marginTop={3}>
							{currentCategory !== 'completedTodos'
								? todos.map(item => (
										<TodoItem
											key={Math.random()}
											openTodoInfo={handleOpenTodoInfo}
											openEditTodoDialog={openEditTodoDialog}
											selectTodo={setMutableTodo}
											todo={item}
										/>
								  ))
								: todos.map(item => <CompletedTodoItem todo={item} />)}

							<Button onClick={openAddTodoDialog} color='secondary' startIcon={<AddIcon />}>
								{getCurrentLanguageTranslation(languages.addButtonTodoList, lang)}
							</Button>
						</Box>
					</Fade>
				) : (
					<Fade timeout={1000} in={!(todos.length > 0)}>
						<Box marginTop={20} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
							<Typography component='h3'>{getCurrentLanguageTranslation(languages.emptyList, lang)}</Typography>
							{currentProject !== 'todos' && (
								<Button onClick={openAddTodoDialog} color='secondary' startIcon={<AddIcon />}>
									{getCurrentLanguageTranslation(languages.addButtonTodoList, lang)}
								</Button>
							)}
						</Box>
					</Fade>
				)}
				<AddTodoDialog open={visibleAddTodoDialog} handleClose={closeAddTodoDialog} />
				<EditTodoDialog todo={mutableTodo ? mutableTodo : todos[0]} open={visibleEditTodoDialog} handleClose={closeEditTodoDialog} />
				{currentTodo && (
					<TodoInfoDialog openEditTodoDialog={openEditTodoDialog} todo={currentTodo} open={openTodoInfo} onClose={handleCloseTodoInfo} />
				)}
			</Box>
		</Fade>
	)
}
