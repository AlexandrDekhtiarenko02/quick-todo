import React, { FC } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { SettingsDialog } from '../../dialog/settings/SettingsDialog'
import { signOut } from '../../../redux/action-creators/auth'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useState } from 'react'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Settings } from '@material-ui/icons'
import { useStyles } from './userStyles'
import { languages } from '../../../language'

interface IPROPS {
	anchorEl: HTMLButtonElement | null
	handleClose: () => void
}

export const User: FC<IPROPS> = ({ anchorEl, handleClose }) => {
	const dispatch = useDispatch()
	const classes = useStyles()

	const lang = useTypedSelector(state => state.settings.settings.language)
	const { userData } = useTypedSelector(state => state.user)

	const [openSettings, setOpenSettings] = useState<boolean>(false)
	const handleOpenSettings = () => setOpenSettings(true)
	const handleCloseSettings = () => setOpenSettings(false)
	const handleSignOut = () => dispatch(signOut())

	const open = Boolean(anchorEl)

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
		>
			<Grid className={classes.userPopover} container>
				<Grid item>
					<Avatar alt='Remy Sharp' />
				</Grid>
				<Grid xs={8} item>
					<Typography className={classes.userPopoverName}>{userData.fullName}</Typography>
					<Typography color='primary' className={classes.userPopoverEmail}>
						{userData.email}
					</Typography>
					<Divider />
				</Grid>
				<Grid xs={12} item>
					<List component='nav'>
						<ListItem button onClick={handleOpenSettings}>
							<Settings color='secondary' className={classes.popoverListItemIcon} />
							<ListItemText secondary={getCurrentLanguageTranslation(languages.settingsLabel, lang)} />
						</ListItem>
						<ListItem button onClick={handleSignOut}>
							<ExitToAppIcon color='secondary' className={classes.popoverListItemIcon} />
							<ListItemText secondary={getCurrentLanguageTranslation(languages.logoutLabel, lang)} />
						</ListItem>
					</List>
				</Grid>
			</Grid>
			<SettingsDialog open={openSettings} handleClose={handleCloseSettings} />
		</Popover>
	)
}
