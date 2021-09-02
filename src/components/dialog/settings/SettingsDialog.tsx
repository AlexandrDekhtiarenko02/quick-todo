import React, { ChangeEvent, useEffect, useState, FC } from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { DialogActions, DialogContent, styles, useStyles } from './settingsStyles'
import { changeSettings, deleteAccount, resetStatistic } from '../../../redux/action-creators/settings'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { Redirect } from 'react-router'
import { languages } from '../../../language'

export interface DialogTitleProps extends WithStyles<typeof styles> {
	id: string
	children: React.ReactNode
	onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
	const { children, classes, onClose, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	)
})

interface IPROPS {
	open: boolean
	handleClose: () => void
}
export const SettingsDialog: FC<IPROPS> = ({ open, handleClose }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const lang = useTypedSelector(state => state.settings.settings.language)
	const { settings } = useTypedSelector(state => state.settings)
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [requiredGoalPoints, setRequiredDayGoal] = useState<number>(0)
	const [language, setLanguage] = useState<string>('russian')
	const [theme, setTheme] = useState<string>('')
	const [accountIsDeleted, setAccontIsDeleted] = useState(false)

	const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
	const handleSurname = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
	const handleRequredDayGoad = (e: ChangeEvent<HTMLInputElement>) => setRequiredDayGoal(parseInt(e.target.value))
	const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => setLanguage(event.target.value as string)

	const handleResetStatistic = () => {
		handleClose()
		dispatch(resetStatistic())
	}
	const handleChangeSettings = () => {
		handleClose()
		dispatch(changeSettings({ name, surname, requiredGoalPoints, theme, language }))
	}
	const handleDeleteAccount = () => {
		dispatch(deleteAccount())
		setAccontIsDeleted(true)
	}

	useEffect(() => {
		if (settings) {
			setName(settings.name)
			setSurname(settings.surname)
			setRequiredDayGoal(settings.requiredGoalPoints)
			setLanguage(settings.language)
			setTheme(settings.theme)
		}
	}, [settings])

	return (
		<Dialog fullWidth onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
			<DialogTitle id='customized-dialog-title' onClose={handleClose}>
				<Typography color='primary'>{getCurrentLanguageTranslation(languages.settingsLabel, lang)}</Typography>
			</DialogTitle>
			<DialogContent dividers>
				<Box display='flex' flexDirection='column' marginBottom={2}>
					<Typography color='primary'>{getCurrentLanguageTranslation(languages.nameLabel, lang)}</Typography>
					<TextField value={name} onChange={handleName} size='small' variant='outlined' />
				</Box>
				<Box display='flex' flexDirection='column' marginBottom={2}>
					<Typography color='primary'>{getCurrentLanguageTranslation(languages.surnameLabel, lang)}</Typography>
					<TextField value={surname} onChange={handleSurname} size='small' variant='outlined' />
				</Box>
				<Divider />
				<Box width='20%' marginTop={2}>
					<Typography color='primary'>{getCurrentLanguageTranslation(languages.dayGoalLabel, lang)}</Typography>
					<TextField
						type='number'
						InputProps={{ inputProps: { min: 0, max: 200 } }}
						value={requiredGoalPoints}
						onChange={handleRequredDayGoad}
						size='small'
						id='outlined-basic'
						variant='outlined'
					/>
				</Box>
				<FormControl className={classes.formControl}>
					<InputLabel id='demo-simple-select-label'>{getCurrentLanguageTranslation(languages.languageLabel, lang)}</InputLabel>
					<Select labelId='demo-simple-select-label' id='demo-simple-select' value={language} onChange={handleChangeLanguage}>
						<MenuItem value='ru'>Русский</MenuItem>
						<MenuItem value='ua'>Українська</MenuItem>
						<MenuItem value='eng'>English</MenuItem>
					</Select>
				</FormControl>
				<Box marginTop={2}>
					<Typography color='secondary'>{getCurrentLanguageTranslation(languages.dangerZoneLabel, lang)}</Typography>
					<Box
						border='1px solid #FF7373'
						padding={2}
						borderRadius={10}
						display='flex'
						alignItems='start'
						flexDirection='column'
						marginTop={1}
					>
						<Box marginBottom={2}>
							<Typography color='secondary'>{getCurrentLanguageTranslation(languages.resetStatisticLabel, lang)}</Typography>
							<Typography variant='caption' color='secondary'>
								{getCurrentLanguageTranslation(languages.resetStatisticDescription, lang)}
							</Typography>
							<Button onClick={handleResetStatistic} variant='outlined' color='secondary'>
								{getCurrentLanguageTranslation(languages.resetStatisticButton, lang)}
							</Button>
						</Box>

						<Typography color='secondary'>{getCurrentLanguageTranslation(languages.removeAccountLabel, lang)}</Typography>
						<Typography variant='caption' color='secondary'>
							{getCurrentLanguageTranslation(languages.removeAccountDescription, lang)}
						</Typography>
						<Button onClick={handleDeleteAccount} variant='outlined' color='secondary'>
							{getCurrentLanguageTranslation(languages.removeAccountButton, lang)}
						</Button>
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' autoFocus onClick={handleClose} color='primary'>
					{getCurrentLanguageTranslation(languages.cancelButton, lang)}
				</Button>
				<Button variant='outlined' autoFocus onClick={handleChangeSettings} color='secondary'>
					{getCurrentLanguageTranslation(languages.saveChangesButton, lang)}
				</Button>
			</DialogActions>
			{accountIsDeleted && <Redirect to='/' />}
		</Dialog>
	)
}
