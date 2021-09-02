import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import { ITODO } from '../../../redux/types/todosTypes'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import { languages } from '../../../language'

interface IPROPS {
	open: boolean
	todo: ITODO
	openEditTodoDialog: () => void
	onClose: () => void
}

export const TodoInfoDialog: FC<IPROPS> = ({ open, todo, onClose, openEditTodoDialog }) => {
	const lang = useTypedSelector(state => state.settings.settings.language)
	const handleOpenEditTodoDialog = () => {
		onClose()
		openEditTodoDialog()
	}

	return (
		<Dialog fullWidth open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
			<DialogTitle id='form-dialog-title'>{todo.title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{todo.text}</DialogContentText>
				<Box marginBottom={2}>
					<Chip
						clickable
						variant='outlined'
						icon={<LocalOfferIcon style={{ color: todo.tag?.color }} />}
						label={todo.tag?.title}
						size='small'
					/>
				</Box>
				<DialogContentText color='secondary'>
					{getCurrentLanguageTranslation(languages.priorityLabel, lang)} - <Typography display='inline'>{todo.priorityValue}</Typography>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button color='primary' onClick={onClose}>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
				<Button color='secondary' onClick={handleOpenEditTodoDialog}>
					{getCurrentLanguageTranslation(languages.changeButton, lang)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
