import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core/styles'

const drawerWidth = 300
export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerOpen: {
			padding: '60px 20px 20px 20px',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			paddingTop: '60px',
			paddingLeft: '20px',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			[theme.breakpoints.up('sm')]: {
				width: 0,
			},
		},
		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
		},
		listItemCircle: {
			borderRadius: '50%',
			width: '12px',
			height: '12px',
			marginRight: '15px',
		},
		listItem: {
			borderRadius: '10px',
		},
		paper: {
			marginRight: theme.spacing(2),
		},
	})
)
