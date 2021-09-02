import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { ITODO } from '../../../redux/types/todosTypes'
import { editTodo } from '../../../redux/action-creators/todos'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ITAG } from '../../../redux/types/tagsTypes'
import { SelectPriorityComponent } from '../../selectPriority/SelectPriorityComponent'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { languages } from '../../../language'
import TodoTitleIcon from '../../../assets/Main/title.svg'
import TodoTextIcon from '../../../assets/Main/text.svg'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

interface IPROPS {
	todo: ITODO
	open: boolean
	handleClose: () => void
}

export const EditTodoDialog: FC<IPROPS> = ({ todo, open, handleClose }) => {
	const dispatch = useDispatch()
	const { tags } = useTypedSelector(state => state.tags)
	const lang = useTypedSelector(state => state.settings.settings.language)
	const currentProject = useTypedSelector(state => state.projects.currentProject)

	const [todoTitle, setTodoTitle] = useState<string>('')
	const [todoDescription, setTodoDescription] = useState<string>('')
	const [tag, setTag] = useState<ITAG>({ title: '', color: '', id: '' })
	const [tagTitle, setTagTitle] = useState<string | null | undefined>('')
	const [priorityValue, setPriorityValue] = useState<number>(1)
	const [priorityColor, setPriorityColor] = useState<string>('')

	const handleTagTitle = (event: React.ChangeEvent<{ value: unknown }>) => {
		setTagTitle(event.target.value as string)
	}
	const handleEditTodo = () => {
		dispatch(
			editTodo(currentProject, {
				...todo,
				title: todoTitle,
				text: todoDescription,
				tag,
				priorityColor,
				priorityValue,
			})
		)
		handleClose()
	}
	const handleTodoTitle = (e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)
	const handleTodoDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setTodoDescription(e.target.value)

	useEffect(() => {
		if (todo) {
			setTodoTitle(todo.title)
			setTodoDescription(todo.text)
			setTagTitle(todo?.tag?.title)
			setPriorityValue(todo.priorityValue)
			setPriorityColor(todo.priorityColor)
		}
	}, [open, todo])

	return (
		<Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
			<DialogTitle id='form-dialog-title'>{getCurrentLanguageTranslation(languages.editTodoLabel, lang)}</DialogTitle>
			<Divider />
			<DialogContent>
				<Box display='flex' alignItems='center'>
					<Box marginTop={3} marginRight={3}>
						<img height={25} src={TodoTitleIcon} alt='title' />
					</Box>
					<TextField
						value={todoTitle}
						onChange={handleTodoTitle}
						autoFocus
						margin='dense'
						id='title'
						label={getCurrentLanguageTranslation(languages.editTodoTitleLabel, lang)}
						type='text'
						fullWidth
					/>
				</Box>
				<Box display='flex' alignItems='center'>
					<Box marginTop={3} marginRight={3}>
						<img height={25} src={TodoTextIcon} alt='todo description' />
					</Box>
					<TextField
						value={todoDescription}
						onChange={handleTodoDescription}
						autoFocus
						multiline
						margin='dense'
						id='description'
						label={getCurrentLanguageTranslation(languages.editTodoDesctiptionLabel, lang)}
						type='text'
						fullWidth
					/>
				</Box>
				<Box display='flex' alignItems='center' justifyContent='flex-end'>
					<Select disableUnderline labelId='tag-select' id='demo-simple-select' value={tagTitle} onChange={handleTagTitle}>
						{tags.map(tag => (
							<MenuItem onClick={() => setTag(tag)} key={tag.id} value={tag.title}>
								<Box display='flex'>
									<Box marginRight='10px'>
										<LocalOfferIcon style={{ color: tag.color }} fontSize='small' />
									</Box>
									<Typography style={{ color: tag.color }}>{tag.title}</Typography>
								</Box>
							</MenuItem>
						))}
					</Select>
					<SelectPriorityComponent priorityColor={priorityColor} setPriorityColor={setPriorityColor} setPriorityValue={setPriorityValue} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
				<Button onClick={handleEditTodo} color='primary'>
					{getCurrentLanguageTranslation(languages.changeButton, lang)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
