import React, { FC, useRef, useState } from 'react'
import { removeProject, setCurrentProject } from '../../redux/action-creators/projects'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { languages } from '../../language'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useStyles } from './ProjectItemStyles'

interface IPROPS {
	item: {
		title: string
		color: string
		id: string
	}
}
export const ProjectItem: FC<IPROPS> = ({ item }) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const [openProjectMenu, setOpenProjectMenu] = useState<boolean>(false)
	const currentProject = useTypedSelector(state => state.projects.currentProject)
	const anchorRef = useRef<HTMLButtonElement>(null)
	const lang = useTypedSelector(state => state.settings.settings.language.toString())

	const handleToggle = () => setOpenProjectMenu(prevOpen => !prevOpen)
	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return
		}
		setOpenProjectMenu(false)
	}
	const handleRemoveProject = () => {
		dispatch(removeProject(item.id))
		setOpenProjectMenu(false)
	}
	return (
		<>
			<Box display='flex'>
				<ListItem
					className={classes.listItem}
					selected={item.id === currentProject}
					button
					onClick={() => dispatch(setCurrentProject(item.id, item.title, 'projects'))}
				>
					<Box className={classes.listItemCircle} style={{ backgroundColor: item.color }}></Box>
					<ListItemText primary={item.title} />
				</ListItem>
				<IconButton ref={anchorRef} aria-haspopup='true' onClick={handleToggle}>
					<MoreHorizIcon />
				</IconButton>
			</Box>
			<Popper open={openProjectMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: 10000 }}>
				{({ TransitionProps, placement }) => (
					<Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList>
									<MenuItem onClick={handleRemoveProject}>{getCurrentLanguageTranslation(languages.removeProject, lang)}</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	)
}
