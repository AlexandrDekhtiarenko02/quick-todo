import React, { ChangeEvent, useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../../assets/Home/Header/logo.svg'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import Backdrop from '@material-ui/core/Backdrop'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import { registerUser } from '../../redux/action-creators/auth'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { languages } from '../../language'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useStyles } from './authificationStyles'

export const Register: React.FC = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { registerUserSuccess } = useTypedSelector(state => state.auth)

	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [openBackdrog, setOpenBackdrog] = useState<boolean>(false)
	const [lang, setLang] = useState('eng')

	const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
	const handleSurname = (e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)
	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
	const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)
	const handleCloseBackdrop = () => setOpenBackdrog(false)
	const handleToggleBackdrop = () => setOpenBackdrog(!openBackdrog)

	const handleRegisterUser = () => {
		dispatch(registerUser({ name, surname, email, password, confirmPassword }))
		handleToggleBackdrop()
	}

	useEffect(() => {
		const setLanguage = async () => {
			const language = (await localStorage.getItem('language')) || lang
			setLang(language as string)
		}
		setLanguage()
	}, [lang])

	return (
		<Grid container className={classes.registerContainer}>
			<Grid className={classes.registerBlock} item>
				<Grid container item className={classes.logo}>
					<img height={40} src={Logo} alt='logo' />
				</Grid>
				<Grid container item className={classes.centerContent}>
					<Typography variant='h5' color='primary'>
						{getCurrentLanguageTranslation(languages.registerLabel, lang)}
					</Typography>
				</Grid>
				<Divider />
				<Grid container item className={classes.centerContent}>
					<FormControl>
						<InputLabel htmlFor='name'>{getCurrentLanguageTranslation(languages.enterName, lang)}</InputLabel>
						<Input value={name} onChange={handleName} id='name' type='text' />
					</FormControl>
					<FormControl>
						<InputLabel htmlFor='surname'>{getCurrentLanguageTranslation(languages.enterSurname, lang)}</InputLabel>
						<Input id='surname' type='text' value={surname} onChange={handleSurname} />
					</FormControl>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<FormControl fullWidth>
						<InputLabel htmlFor='email'>{getCurrentLanguageTranslation(languages.enterEmail, lang)}</InputLabel>
						<Input
							value={email}
							onChange={handleEmail}
							id='email'
							type='email'
							startAdornment={
								<InputAdornment position='start'>
									<MailOutlineIcon color='primary' />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<FormControl fullWidth>
						<InputLabel htmlFor='password'>{getCurrentLanguageTranslation(languages.enterPassword, lang)}</InputLabel>
						<Input
							value={password}
							onChange={handlePassword}
							id='password'
							type='password'
							startAdornment={
								<InputAdornment position='start'>
									<LockOpenIcon color='primary' />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<FormControl fullWidth>
						<InputLabel htmlFor='confirm_password'>{getCurrentLanguageTranslation(languages.confirmPassword, lang)}</InputLabel>
						<Input
							value={confirmPassword}
							onChange={handleConfirmPassword}
							id='confirm_password'
							type='password'
							startAdornment={
								<InputAdornment position='start'>
									<LockOpenIcon color='primary' />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<Button color='secondary' onClick={handleRegisterUser}>
						{getCurrentLanguageTranslation(languages.registerButton, lang)}
					</Button>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<Typography variant='caption'>
						{getCurrentLanguageTranslation(languages.orSignInLabel, lang)}&nbsp;
						<Link style={{ textDecoration: 'none' }} to='/signIn'>
							<Typography variant='caption' color='secondary'>
								{getCurrentLanguageTranslation(languages.orSingInLink, lang)}
							</Typography>
						</Link>
					</Typography>
				</Grid>
			</Grid>
			<Backdrop open={openBackdrog} onClick={handleCloseBackdrop}>
				<CircularProgress color='inherit' />
			</Backdrop>
			{registerUserSuccess && <Redirect to='/main' />}
		</Grid>
	)
}
