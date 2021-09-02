import React, { ChangeEvent, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/action-creators/auth'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { languages } from '../../language'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useStyles } from './authificationStyles'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import Logo from '../../assets/Home/Header/logo.svg'
export const SignIn: React.FC = () => {
	const dispatch = useDispatch()
	const { loginUserSuccess, loading } = useTypedSelector(state => state.auth)
	const classes = useStyles()

	const [email, setEmail] = useState<string>('')
	const [lang, setLang] = useState<string>('eng')
	const [password, setPassword] = useState<string>('')

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
	const handleSignIn = () => dispatch(signIn(email, password))

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
						{getCurrentLanguageTranslation(languages.signInLabel, lang)}
					</Typography>
				</Grid>
				<Divider />
				<Grid container item className={classes.centerContent}>
					<FormControl fullWidth>
						<InputLabel htmlFor='email'>{getCurrentLanguageTranslation(languages.enterEmail, lang)}</InputLabel>
						<Input
							value={email}
							id='email'
							type='text'
							onChange={handleEmail}
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
						<InputLabel htmlFor='confirm_password'>{getCurrentLanguageTranslation(languages.enterPassword, lang)}</InputLabel>
						<Input
							value={password}
							id='confirm_password'
							type='password'
							onChange={handlePassword}
							startAdornment={
								<InputAdornment position='start'>
									<LockOpenIcon color='primary' />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<Button onClick={handleSignIn} color='secondary'>
						{loading && <CircularProgress size={14} />}
						{!loading && getCurrentLanguageTranslation(languages.signInLabel, lang)}
					</Button>
				</Grid>
				<Grid container item className={classes.centerContent}>
					<Typography variant='caption'>
						{getCurrentLanguageTranslation(languages.orRegisterLabel, lang)}&nbsp;
						<Link style={{ textDecoration: 'none' }} to='/register'>
							<Typography variant='caption' color='secondary'>
								{getCurrentLanguageTranslation(languages.registerLabel, lang)}
							</Typography>
						</Link>
					</Typography>
				</Grid>
			</Grid>
			{loginUserSuccess && <Redirect to='/main' />}
		</Grid>
	)
}
