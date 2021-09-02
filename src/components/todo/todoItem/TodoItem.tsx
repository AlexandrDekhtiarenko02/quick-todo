import React, { Dispatch, SetStateAction, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { ITODO } from '../../../redux/types/todosTypes'
import { useDispatch } from 'react-redux'
import { addTodo, changeTodoCompleteStatus, removeTodo, removeTodoTag } from '../../../redux/action-creators/todos'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import FlagIcon from '@material-ui/icons/Flag'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CreateIcon from '@material-ui/icons/Create'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import {
	decreaseCompletedTodos,
	increaseCompletedTodos,
	increasePoints,
	decreasePoints,
	increaseCurrentDayGoal,
	decreaseCurrentDayGoal,
} from '../../../redux/action-creators/user'
import { addCompletedTodo } from '../../../redux/action-creators/completedTodos'
import { languages } from '../../../language'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { GreenCheckbox, StyledMenu, StyledMenuItem, useStyles } from './todoItemStyles'

type IPROPS = {
	todo: ITODO
	openEditTodoDialog: () => void
	selectTodo: Dispatch<SetStateAction<ITODO | null>>
	openTodoInfo: (todo: ITODO) => void
}

export const TodoItem: React.FC<IPROPS> = ({ todo, selectTodo, openEditTodoDialog, openTodoInfo }) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const loaded = useTypedSelector(state => state.todos.loaded)
	const currentProject = useTypedSelector(state => state.projects.currentProject)
	const lang = useTypedSelector(state => state.settings.settings.language.toString())

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [finished, setFinished] = useState<boolean>(todo.finished)
	const XP = 15

	const remove = () => dispatch(removeTodo(todo.id as string, currentProject))
	const handleRemoveTodoTag = () => dispatch(removeTodoTag(todo.id as string, currentProject))
	const handleOpenTodoInfo = () => openTodoInfo(todo)
	const handleChange = () => {
		if (!finished) {
			dispatch(increaseCompletedTodos())
			dispatch(removeTodo(todo.id as string, currentProject))
			dispatch(increasePoints(XP))
			dispatch(addCompletedTodo({ ...todo, finished: true, id: todo.id }))
			dispatch(increaseCurrentDayGoal())
		} else {
			dispatch(decreaseCompletedTodos())
			dispatch(decreasePoints(XP))
			dispatch(decreaseCurrentDayGoal())
		}
		setFinished(!finished)
		dispatch(changeTodoCompleteStatus(currentProject, todo.id as string))
	}
	const handleMore = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const copyTodo = () => {
		dispatch(addTodo(todo, currentProject))
		handleClose()
	}
	const handleSelectTodo = () => {
		openEditTodoDialog()
		selectTodo(todo)
		handleClose()
	}

	return (
		<Fade in={loaded}>
			<Grid container>
				<Grid xs={10} item>
					<Button onClick={handleOpenTodoInfo}>
						<GreenCheckbox checked={finished} onChange={handleChange} />
						<Typography className={classes.todoTitle}>{todo.title}</Typography>
						{todo.tag?.id && (
							<Chip
								clickable
								variant='outlined'
								onDelete={handleRemoveTodoTag}
								icon={<LocalOfferIcon style={{ color: todo.tag?.color }} />}
								label={todo.tag?.title}
								size='small'
							/>
						)}
					</Button>
				</Grid>
				<Grid item>
					<Box display='flex' alignItems='center'>
						<FlagIcon style={{ color: todo.priorityColor }} />
						<IconButton onClick={remove} color='primary'>
							<DeleteOutlineIcon />
						</IconButton>
						<IconButton onClick={handleMore}>
							<MoreHorizIcon />
						</IconButton>
						<StyledMenu id='customized-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<StyledMenuItem onClick={handleSelectTodo}>
								<ListItemIcon>
									<CreateIcon />
								</ListItemIcon>
								<ListItemText primary={getCurrentLanguageTranslation(languages.editTodoLabel, lang)} />
							</StyledMenuItem>
							<StyledMenuItem onClick={copyTodo}>
								<ListItemIcon>
									<FileCopyIcon />
								</ListItemIcon>
								<ListItemText primary={getCurrentLanguageTranslation(languages.dublicateTodo, lang)} />
							</StyledMenuItem>
						</StyledMenu>
					</Box>
				</Grid>
				<Grid container item>
					<Grid xs={12} item>
						<Divider />
					</Grid>
				</Grid>
			</Grid>
		</Fade>
	)
}
