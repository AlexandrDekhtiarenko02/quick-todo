import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'

export const useStyles = makeStyles(() =>
	createStyles({
		homeContainer: {
			paddingLeft: '5%',
			paddingRight: '5%',
		},
		headerWrapper: {
			paddingLeft: '5%',
			paddingRight: '5%',
			paddingTop: '10px',
			paddingBottom: '10px',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: '#fff',
		},
		headerLogoWrapper: {
			display: 'flex',
			alignItems: 'center',
		},
		headerLogoText: {
			marginLeft: '5px',
		},
		button: {
			'&:hover': {
				borderRadius: 0,
				borderBottom: '2px solid #FF7575',
				backgroundColor: '#fff',
			},
		},
		getStartedWrapper: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '90vh',
		},
		getStartedButton: {
			backgroundColor: '#FF7575',
			color: '#fff',
			marginTop: '10px',
			'&:hover': {
				color: '#FF7575',
			},
		},
		featureBlock: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			marginBottom: '100px',
		},
		featureBlockImageItem: {
			justifyContent: 'center',
		},
		functionalityBlock: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
		functionalityCardList: {
			display: 'flex',
			justifyContent: 'space-around',
			flexWrap: 'wrap',
			marginTop: '30px',
		},
		root: {
			marginTop: '20px',
			maxWidth: 260,
			maxHeight: 340,
		},
		media: {
			marginLeft: '25%',
			width: 120,
			height: 120,
		},
	})
)
