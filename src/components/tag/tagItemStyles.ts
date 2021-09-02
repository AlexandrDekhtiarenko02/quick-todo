import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		listItem: {
			borderRadius: '10px',
		},
		paper: {
			marginRight: theme.spacing(2),
		},
	})
)
