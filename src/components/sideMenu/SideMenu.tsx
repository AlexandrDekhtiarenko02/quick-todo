import React, { useState } from 'react'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ProjectItem } from '../project/ProjectItem'
import { AddProjectDialog } from '../dialog/addProject/AddProjectDialog'
import { TagItem } from '../tag/TagItem'
import { AddTagDialog } from '../dialog/addTag/AddTagDialog'
import { useDispatch } from 'react-redux'
import { setCurrentProject } from '../../redux/action-creators/projects'
import { languages } from '../../language'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useStyles } from './sideMenuStyles'
import FolderIcon from '@material-ui/icons/Folder'
import MoreIcon from '@material-ui/icons/More'
import DoneIcon from '@material-ui/icons/Done'
import { Add, ExpandMore, ExpandLess } from '@material-ui/icons'

interface IPROPS {
	open: boolean
	currentProject: string
}
export const SideMenu: React.FC<IPROPS> = ({ open }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const lang = useTypedSelector(state => state.settings.settings.language.toString())
	const { projects } = useTypedSelector(state => state.projects)
	const { tags } = useTypedSelector(state => state.tags)

	const [openNestedProjectsList, setOpenNestedProjectList] = useState<boolean>(true)
	const [openNestedTagsList, setOpenNestedTagsList] = useState<boolean>(true)
	const [addProjectDialogShow, setAddProjectDialogShow] = useState<boolean>(false)
	const [addTagDialogShow, setAddTagDialogShow] = useState<boolean>(false)

	const changeProjectsListVisibility = () => setOpenNestedProjectList(!openNestedProjectsList)
	const changeTagsListVisibility = () => setOpenNestedTagsList(!openNestedTagsList)
	const closeAddProjectDialog = () => setAddProjectDialogShow(false)
	const openAddProjectDialog = () => setAddProjectDialogShow(true)
	const closeAddTagDialog = () => setAddTagDialogShow(false)
	const openAddTagDialog = () => setAddTagDialogShow(true)
	const handleSetCompletedTodosActive = () => dispatch(setCurrentProject('todos', 'Выполненные Todo', 'completedTodos'))

	return (
		<Drawer
			variant='permanent'
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<List>
				<ListItem>
					<ListItemIcon>
						<FolderIcon />
					</ListItemIcon>
					<ListItemText primary={getCurrentLanguageTranslation(languages.drafts, lang)} />
					<IconButton onClick={openAddProjectDialog}>
						<Add />
					</IconButton>
					<IconButton onClick={changeProjectsListVisibility}>{openNestedProjectsList ? <ExpandLess /> : <ExpandMore />}</IconButton>
				</ListItem>
				<Collapse in={openNestedProjectsList} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{projects.map(item => (
							<ProjectItem key={Math.random()} item={item} />
						))}
					</List>
				</Collapse>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<MoreIcon />
					</ListItemIcon>
					<ListItemText primary={getCurrentLanguageTranslation(languages.tags, lang)} />
					<IconButton onClick={openAddTagDialog}>
						<Add />
					</IconButton>
					<IconButton onClick={changeTagsListVisibility}>{openNestedTagsList ? <ExpandLess /> : <ExpandMore />}</IconButton>
				</ListItem>
				<Collapse in={openNestedTagsList} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{tags.map(tag => (
							<TagItem key={Math.random()} tag={tag} />
						))}
					</List>
				</Collapse>
				<Divider />
				<ListItem button onClick={handleSetCompletedTodosActive}>
					<ListItemIcon>
						<DoneIcon />
					</ListItemIcon>
					<ListItemText primary={getCurrentLanguageTranslation(languages.completedTodos, lang)} />
				</ListItem>
			</List>
			<AddProjectDialog open={addProjectDialogShow} close={closeAddProjectDialog} />
			<AddTagDialog open={addTagDialogShow} close={closeAddTagDialog} />
		</Drawer>
	)
}
