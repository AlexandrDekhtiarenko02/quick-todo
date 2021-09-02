import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		contentBlock: {
			width: '70%',
			padding: theme.spacing(8),
		},
		darkGray: {
			color: '#7a7a7a',
		},
		todoList: {
			justifyContent: 'between',
			backgroundColor: '#EEEEEE',
			borderRadius: '15px',
			height: '70vh',
			marginTop: theme.spacing(2),
		},
	})
)
