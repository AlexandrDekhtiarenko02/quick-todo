import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ITODO } from '../../../redux/types/todosTypes'
import Chip from '@material-ui/core/Chip'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { removeCompletedTodo } from '../../../redux/action-creators/todos'
import FlagIcon from '@material-ui/icons/Flag'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Completed from '../../../assets/Main/completed.svg'

type IPROPS = {
	todo: ITODO
}

export const CompletedTodoItem: FC<IPROPS> = ({ todo }) => {
	const loaded = useTypedSelector(state => state.todos.loaded)
	const dispatch = useDispatch()
	const handleRemoveTodo = () => dispatch(removeCompletedTodo(todo.id as string))

	return (
		<Fade in={loaded}>
			<Grid container style={{ marginTop: 20 }}>
				<Grid xs={11} item>
					<Box display='flex'>
						<Box marginRight={2}>
							<img height={30} src={Completed} alt='completed' />
						</Box>
						<Typography color='primary'>{todo.title}</Typography>
						<Box marginLeft={2}>
							{todo.tag && (
								<Chip
									clickable
									variant='outlined'
									icon={<LocalOfferIcon style={{ color: todo.tag?.color }} />}
									label={todo.tag?.title}
									size='small'
								/>
							)}
						</Box>
					</Box>
				</Grid>
				<Grid item>
					<Box display='flex' alignItems='center'>
						<FlagIcon style={{ color: todo.priorityColor }} />
						<IconButton onClick={handleRemoveTodo} color='primary'>
							<DeleteOutlineIcon />
						</IconButton>
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
