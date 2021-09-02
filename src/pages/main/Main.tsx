import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import { useDispatch } from 'react-redux'
import { loadProjects } from '../../redux/action-creators/projects'
import { loadTodos } from '../../redux/action-creators/todos'
import { loadTags } from '../../redux/action-creators/tags'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Header } from '../../components/header/Header'
import { SideMenu } from '../../components/sideMenu/SideMenu'
import { TodosList } from '../../components/todo/todoList/TodosList'
import { loadColors } from '../../redux/action-creators/colors'
import { loadUser } from '../../redux/action-creators/user'
import { loadRanks } from '../../redux/action-creators/ranks'
import { loadSettings } from '../../redux/action-creators/settings'
import { languages } from '../../language'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useStyles } from './mainStyles'
import NotSelectedProjectIcon from '../../assets/Main/select.svg'
import Logo from '../../assets/Home/Header/logo.svg'

export const Main: React.FC = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const lang = useTypedSelector(state => state.settings.settings.language.toString())
	const projectName = useTypedSelector(state => state.projects.projects)
	const isLoadingProjects = useTypedSelector(state => state.projects.loading)
	const isLoadingTag = useTypedSelector(state => state.tags.loading)
	const isLoadingColors = useTypedSelector(state => state.colors.loading)
	const isLoadingUser = useTypedSelector(state => state.user.loading)
	const isLoadingRanks = useTypedSelector(state => state.ranks.loading)

	const [open, setOpen] = useState<boolean>(true)
	const { currentProject, currentCategory } = useTypedSelector(state => state.projects)
	const changeDriwerVisibility = () => setOpen(!open)

	useEffect(() => {
		dispatch(loadProjects())
		dispatch(loadTags())
		dispatch(loadColors())
		dispatch(loadUser())
		dispatch(loadRanks())
		dispatch(loadSettings())
	}, [dispatch])
	useEffect(() => {
		dispatch(loadTodos(currentProject, currentCategory))
	}, [currentProject, currentCategory, dispatch])

	return (
		<>
			{!isLoadingProjects && !isLoadingColors && !isLoadingRanks && !isLoadingTag && !isLoadingUser ? (
				<Fade timeout={1500} in={!isLoadingProjects}>
					<Box>
						<Header changeDriwerVisibility={changeDriwerVisibility} />
						<Box display='flex'>
							<SideMenu open={open} currentProject={currentProject} />
							{currentProject === '' ? (
								<Box className={classes.centerContentOfBlock}>
									<Typography component='h4'>{getCurrentLanguageTranslation(languages.selectProject, lang)}</Typography>
									<Box marginTop='20px'>
										<img height={100} src={NotSelectedProjectIcon} alt='select project icon' />
									</Box>
								</Box>
							) : (
								<TodosList
									projectName={
										currentCategory === 'completedTodos'
											? getCurrentLanguageTranslation(languages.completedTodos, lang)
											: projectName.find(project => project.id === currentProject)?.title
									}
								/>
							)}
						</Box>
					</Box>
				</Fade>
			) : (
				<Box className={classes.centerContentOfBlock}>
					<Box display='flex' marginBottom='30px'>
						<img className={classes.logo} src={Logo} alt='Quick Todo logo' />
						<Typography color='primary' variant='h4'>
							QUICK TODO
						</Typography>
					</Box>
					<CircularProgress color='secondary' />
				</Box>
			)}
		</>
	)
}
