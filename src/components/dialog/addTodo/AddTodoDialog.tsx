import React, { ChangeEvent, FC, useState } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { SelectPriorityComponent } from '../../selectPriority/SelectPriorityComponent'
import { addTodo } from '../../../redux/action-creators/todos'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { languages } from '../../../language'
import { ITAG } from '../../../redux/types/tagsTypes'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

interface IPROPS {
	open: boolean
	handleClose: () => void
}

export const AddTodoDialog: FC<IPROPS> = ({ open, handleClose }) => {
	const dispatch = useDispatch()
	const { currentProject, currentProjectTitle } = useTypedSelector(state => state.projects)
	const { tags } = useTypedSelector(state => state.tags)
	const lang = useTypedSelector(state => state.settings.settings.language)
	const [todoTitle, setTodoTitle] = useState<string>('')
	const [tag, setTag] = useState<ITAG>({ title: '', color: '', id: '' })
	const [tagTitle, setTagTitle] = useState<string>(tags[0]?.title || '')
	const [todoDescription, setTodoDescription] = useState<string>('')
	const [priorityValue, setPriorityValue] = useState<number>(1)
	const [priorityColor, setPriorityColor] = useState<string>('gray')

	const handleTodoTitle = (e: ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)
	const handleTodoDescription = (e: ChangeEvent<HTMLInputElement>) => setTodoDescription(e.target.value)

	const handleTagTitle = (event: React.ChangeEvent<{ value: unknown }>) => {
		setTagTitle(event.target.value as string)
	}

	const handleAddTodo = () => {
		dispatch(
			addTodo(
				{
					title: todoTitle,
					text: todoDescription,
					finished: false,
					date: new Date().toISOString().split('T')[0],
					priorityValue,
					priorityColor,
					id: '',
					tag: tag,
					projectName: currentProjectTitle,
				},
				currentProject
			)
		)
		handleClose()
	}

	return (
		<Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
			<DialogContent>
				<TextField
					value={todoTitle}
					onChange={handleTodoTitle}
					multiline
					placeholder={getCurrentLanguageTranslation(languages.addTodoTitlePlaceholder, lang)}
					type='text'
					fullWidth
					variant='standard'
					InputProps={{
						disableUnderline: true,
					}}
				/>
				<TextField
					fullWidth
					value={todoDescription}
					onChange={handleTodoDescription}
					multiline
					placeholder={getCurrentLanguageTranslation(languages.addTodoDescriptionPlaceholder, lang)}
					InputProps={{
						disableUnderline: true,
					}}
				/>
				<Box display='flex' alignItems='center' justifyContent='flex-end'>
					{tags.length ? (
						<Select disableUnderline labelId='tag-select' id='demo-simple-select' value={tagTitle} onChange={handleTagTitle}>
							{tags.map(tag => (
								<MenuItem onClick={() => setTag(tag)} key={Math.random()} value={tag.title}>
									<Box display='flex'>
										<Box marginRight='10px'>
											<LocalOfferIcon style={{ color: tag.color }} fontSize='small' />
										</Box>
										<Typography style={{ color: tag.color }}>{tag.title}</Typography>
									</Box>
								</MenuItem>
							))}
						</Select>
					) : (
						<Typography color='secondary' variant='subtitle2'>
							Добавьте теги
						</Typography>
					)}
					<Box marginLeft={5}>
						<SelectPriorityComponent
							priorityColor={priorityColor}
							setPriorityColor={setPriorityColor}
							setPriorityValue={setPriorityValue}
						/>
					</Box>
				</Box>
			</DialogContent>
			<Divider />
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
				<Button onClick={handleAddTodo} color='primary'>
					{getCurrentLanguageTranslation(languages.addButton, lang)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
