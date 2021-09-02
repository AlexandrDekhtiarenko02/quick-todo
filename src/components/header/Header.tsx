import React, { useState } from 'react'
import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { User } from '../popovers/user/User'
import { Menu, Equalizer } from '@material-ui/icons'
import { Statistic } from '../popovers/statistic/Statistic'
import { useStyles } from './headerStyles'
import Logo from '../../assets/Home/Header/logo.svg'

interface IPROPS {
	changeDriwerVisibility: () => void
}

export const Header: React.FC<IPROPS> = ({ changeDriwerVisibility }) => {
	const classes = useStyles()
	const [anchorUserPopover, setAnchorUserPopover] = useState<HTMLButtonElement | null>(null)
	const [anchorStatsPopover, setAnchorStatPopover] = useState<HTMLButtonElement | null>(null)

	const handleUserPopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorUserPopover(event.currentTarget)
	const handleUserPopoverClose = () => setAnchorUserPopover(null)
	const handleStatPopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorStatPopover(event.currentTarget)
	const handleStatPopoverClose = () => setAnchorStatPopover(null)

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton className={classes.menuButton} edge='start' color='secondary' aria-label='menu' onClick={changeDriwerVisibility}>
					<Menu />
				</IconButton>
				<img className={classes.logo} src={Logo} alt='Quick Todo logo' />
				<Typography color='primary' className={classes.title} variant='h6'>
					QUICK TODO
				</Typography>
				<IconButton />
				<Button color='secondary' onClick={handleStatPopoverOpen}>
					<Equalizer />
				</Button>
				<Button onClick={handleUserPopoverOpen}>
					<Avatar alt='Remy Sharp' />
				</Button>
			</Toolbar>
			<User anchorEl={anchorUserPopover} handleClose={handleUserPopoverClose} />
			<Statistic anchorEl={anchorStatsPopover} handleClose={handleStatPopoverClose} />
		</AppBar>
	)
}
