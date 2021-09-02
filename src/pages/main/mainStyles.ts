import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'

export const useStyles = makeStyles(() =>
	createStyles({
		centerContentOfBlock: {
			width: '100%',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		logo: {
			marginRight: '10px',
			height: '40px',
		},
	})
)
