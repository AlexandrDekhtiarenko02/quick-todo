import { Menu, MenuItem, MenuProps, withStyles } from '@material-ui/core'

export const StyledMenu = withStyles({})((props: MenuProps) => (
	<Menu
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

export const StyledMenuItem = withStyles(() => ({
	root: {
		margin: 10,
		'&:hover': {
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				backgroundColor: 'transparent',
				color: 'red',
			},
		},
	},
}))(MenuItem)
