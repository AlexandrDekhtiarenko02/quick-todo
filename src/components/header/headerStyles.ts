import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			backgroundColor: '#fff',
			zIndex: theme.zIndex.drawer + 1,
		},
		menuButton: {
			marginRight: '10px',
		},
		title: {
			flexGrow: 1,
		},
		logo: {
			marginRight: '10px',
			height: '40px',
		},
	})
)
