import React, { ChangeEvent, useState } from 'react'
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
import { addProject } from '../../../redux/action-creators/projects'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { useStyles } from './addProjectStyles'
import { languages } from '../../../language'

export interface IPROPS {
	open: boolean
	close: () => void
}

export const AddProjectDialog: React.FC<IPROPS> = ({ close, open }) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const { colors } = useTypedSelector(state => state.colors)
	const lang = useTypedSelector(state => state.settings.settings.language)
	const [projectColor, setProjectColor] = useState<string>('')
	const [projectName, setProjectName] = useState<string>('')

	const handleProjectName = (e: ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)
	const handleChangeColor = (event: React.ChangeEvent<{ value: unknown }>) => setProjectColor(event.target.value as string)

	const onAddProject = () => {
		dispatch(addProject(projectColor, projectName))
		close()
	}

	return (
		<Dialog fullWidth onClose={close} open={open}>
			<DialogContent>
				<TextField
					fullWidth
					onChange={handleProjectName}
					value={projectName}
					label={getCurrentLanguageTranslation(languages.addProjectNamePlaceholder, lang)}
					InputProps={{ disableUnderline: true }}
				/>
				<FormControl fullWidth>
					<InputLabel id='color_select'>{getCurrentLanguageTranslation(languages.addProjectColorPlaceHolder, lang)}</InputLabel>
					<Select labelId='color_select' id='color_select' value={projectColor} onChange={handleChangeColor}>
						{colors.map(color => (
							<MenuItem key={Math.random()} value={color.value}>
								<Box display='flex' alignItems='center'>
									<Box style={{ backgroundColor: color.value }} className={classes.colorCircle}></Box>
									{color.title}
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button color='secondary' variant='outlined' onClick={onAddProject}>
					{getCurrentLanguageTranslation(languages.addButton, lang)}
				</Button>
				<Button color='secondary' variant='outlined' onClick={close}>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
