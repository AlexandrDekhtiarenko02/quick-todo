import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'

export const useStyles = makeStyles(() =>
	createStyles({
		userPopover: {
			padding: '20px',
		},
		userPopoverName: {
			fontSize: 18,
			marginLeft: 10,
		},
		userPopoverEmail: {
			fontSize: 14,
			marginLeft: 10,
			paddingBottom: 5,
		},
		popoverListItemIcon: {
			marginRight: 10,
		},
	})
)
