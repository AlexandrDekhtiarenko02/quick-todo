import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import withStyles from '@material-ui/styles/withStyles'
import { Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
)

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: 0,
			padding: theme.spacing(2),
		},
		closeButton: {
			position: 'absolute',
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: theme.palette.grey[500],
		},
	})
export const DialogContent = withStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent)

export const DialogActions = withStyles((theme: Theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions)
