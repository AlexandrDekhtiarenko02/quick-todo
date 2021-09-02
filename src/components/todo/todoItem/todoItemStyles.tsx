import { Checkbox, CheckboxProps, createStyles, makeStyles, Menu, MenuItem, MenuProps, withStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

export const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props: CheckboxProps) => <Checkbox color='default' {...props} />)
export const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
	},
})((props: MenuProps) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
))
export const StyledMenuItem = withStyles(theme => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem)
export const useStyles = makeStyles(() =>
	createStyles({
		todo: {
			margin: '5px',
		},
		todoTitle: {
			color: '#7a7a7a',
			marginRight: '5px',
		},
	})
)
