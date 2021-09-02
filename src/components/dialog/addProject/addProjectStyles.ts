import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'

export const useStyles = makeStyles(() =>
	createStyles({
		dialog: {
			padding: 40,
		},
		colorCircle: {
			width: 15,
			height: 15,
			borderRadius: 50,
			marginRight: 5,
		},
	})
)
