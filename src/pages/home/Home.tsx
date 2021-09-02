import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { languages } from '../../language'
import { useStyles } from './homeStyles'
import Logo from '../../assets/Home/Header/logo.svg'
import Brain from '../../assets/Home/Content/brain.svg'
import Smartphone from '../../assets/Home/Content/smartphone.svg'
import Folder from '../../assets/Home/Content/folder.svg'
import Sort from '../../assets/Home/Content/sort.svg'
import Vector from '../../assets/Home/Content/vector.svg'
import '../../scss/home.scss'

export const Home: React.FC = () => {
	const classes = useStyles()
	const [lang, setLang] = useState<string>('eng')

	const handleChangeLang = (event: React.ChangeEvent<{ value: unknown }>) => {
		setLang(event.target.value as string)
		localStorage.setItem('language', event.target.value as string)
	}

	useEffect(() => {
		const setLanguage = async () => {
			const language = (await localStorage.getItem('language')) || lang
			setLang(language as string)
		}
		setLanguage()
	}, [lang])

	return (
		<Grid className={classes.homeContainer} container>
			<AppBar elevation={0} position='fixed'>
				<Grid container className={classes.headerWrapper}>
					<Grid className={classes.headerLogoWrapper} item>
						<img height={50} src={Logo} alt='QUICK TODO LOGO' />
						<Hidden only={['xs', 'sm']}>
							<Typography className={classes.headerLogoText}>QUICK TODO</Typography>
						</Hidden>
					</Grid>
					<Grid item>
						<FormControl>
							<Select disableUnderline value={lang} onChange={handleChangeLang}>
								<MenuItem value='ua'>Українська</MenuItem>
								<MenuItem value='ru'>Русский</MenuItem>
								<MenuItem value='eng'>English</MenuItem>
							</Select>
						</FormControl>
						<Link to='/register'>
							<Button className={classes.button}>{getCurrentLanguageTranslation(languages.registerLabel, lang)}</Button>
						</Link>
						<Link to='/signIn'>
							<Button className={classes.button}>{getCurrentLanguageTranslation(languages.signInLabel, lang)}</Button>
						</Link>
					</Grid>
				</Grid>
			</AppBar>
			<Grid container item className={classes.getStartedWrapper}>
				<Grid item>
					<Typography align='center' variant='h3' component='h1'>
						{getCurrentLanguageTranslation(languages.homeTitle, lang)}
					</Typography>
				</Grid>
				<Grid item>
					<Link style={{ textDecoration: 'none' }} to='/signIn'>
						<Button className={classes.getStartedButton}>{getCurrentLanguageTranslation(languages.startButton, lang)}</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid container item className={classes.featureBlock}>
				<Grid xs={5} item>
					<Typography align='center' variant='h4'>
						{getCurrentLanguageTranslation(languages.clearYourMind, lang)}
					</Typography>
					<Typography align='center'>{getCurrentLanguageTranslation(languages.clearYourMindDescription, lang)}</Typography>
				</Grid>
				<Hidden only={['xs']}>
					<Grid xs={4} className={classes.featureBlockImageItem} item container>
						<img src={Brain} alt='brain' />
					</Grid>
				</Hidden>
			</Grid>
			<Grid container item className={classes.featureBlock}>
				<Hidden only={['xs']}>
					<Grid xs={4} className={classes.featureBlockImageItem} item container>
						<img src={Smartphone} alt='smartphone' />
					</Grid>
				</Hidden>
				<Grid xs={5} item>
					<Typography align='center' variant='h4'>
						{getCurrentLanguageTranslation(languages.alwaysAtHand, lang)}
					</Typography>
					<Typography align='center'>{getCurrentLanguageTranslation(languages.alwaysAtHandDescription, lang)}</Typography>
				</Grid>
			</Grid>
			<Grid container className={classes.functionalityBlock}>
				<Grid item>
					<Typography align='center' variant='h4'>
						{getCurrentLanguageTranslation(languages.ampleOpportunities, lang)}
					</Typography>
				</Grid>

				<Grid container item className={classes.functionalityCardList}>
					<Card className={classes.root}>
						<CardMedia className={classes.media} image={Folder} />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{getCurrentLanguageTranslation(languages.structuringLabel, lang)}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{getCurrentLanguageTranslation(languages.structuringDescription, lang)}
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.root}>
						<CardMedia className={classes.media} image={Sort} title='Contemplative Reptile' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{getCurrentLanguageTranslation(languages.sortingHomeLabel, lang)}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{getCurrentLanguageTranslation(languages.sortingDescription, lang)}
							</Typography>
						</CardContent>
					</Card>
					<Card className={classes.root}>
						<CardMedia className={classes.media} image={Vector} title='Contemplative Reptile' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{getCurrentLanguageTranslation(languages.tagsHomeLabel, lang)}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{getCurrentLanguageTranslation(languages.tagsHomeDescription, lang)}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	)
}
