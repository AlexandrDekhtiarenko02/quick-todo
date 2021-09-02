import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'

export const useStyles = makeStyles(() =>
	createStyles({
		registerContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		},
		registerBlock: {
			border: '1px solid #aaaaaa',
			borderRadius: 10,
			paddingLeft: 30,
			paddingRight: 30,
			paddingTop: 20,
			paddingBottom: 20,
		},
		registerContent: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
		logo: {
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: 20,
		},
		centerContent: {
			marginTop: 10,
			justifyContent: 'center',
		},
		imageMargin: {
			marginRight: 5,
		},
		otherResourcesRegisterButton: {
			backgroundColor: 'transparent',
			border: '1px solid #aaaaaa',
			padding: 10,
		},
	})
)
