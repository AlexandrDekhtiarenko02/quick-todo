import React, { ChangeEvent, useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Box from '@material-ui/core/Box'
import { addTag } from '../../../redux/action-creators/tags'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { languages } from '../../../language'
import { useStyles } from './addTagStyles'

export interface IPROPS {
	open: boolean
	close: () => void
}

export const AddTagDialog: FC<IPROPS> = ({ close, open }) => {
	const dispatch = useDispatch()
	const { colors } = useTypedSelector(state => state.colors)
	const lang = useTypedSelector(state => state.settings.settings.language)
	const classes = useStyles()

	const [tagName, setTagName] = useState<string>('')
	const [tagColor, setTagColor] = useState<string>('')

	const handleTagName = (e: ChangeEvent<HTMLInputElement>) => setTagName(e.target.value)
	const handleTagColor = (event: React.ChangeEvent<{ value: unknown }>) => setTagColor(event.target.value as string)

	const onAddTag = () => {
		dispatch(addTag(tagColor, tagName))
		close()
	}
	
	return (
		<Dialog fullWidth onClose={close} open={open}>
			<DialogContent>
				<TextField
					fullWidth
					onChange={handleTagName}
					value={tagName}
					label={getCurrentLanguageTranslation(languages.addTagNamePlaceholder, lang)}
					InputProps={{
						disableUnderline: true,
					}}
				/>
				<FormControl fullWidth>
					<InputLabel id='color_select'>{getCurrentLanguageTranslation(languages.addTagColorPlaceHolder, lang)}</InputLabel>
					<Select className={classes.root} id='color_select' value={tagColor} onChange={handleTagColor}>
						{colors.map(color => (
							<MenuItem key={Math.random()} value={color.value}>
								<Box className={classes.root}>
									<Box style={{ backgroundColor: color.value }} className={classes.colorCircle}></Box>
									{color.title}
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button color='secondary' variant='outlined' onClick={onAddTag}>
					{getCurrentLanguageTranslation(languages.addButton, lang)}
				</Button>
				<Button color='secondary' variant='outlined' onClick={close}>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
