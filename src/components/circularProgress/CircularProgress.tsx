import React, { FC } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

interface IPROPS {
	value: number
	label: string
}

export const CircularProgressWithLabel: FC<IPROPS> = ({ value, label }) => {
	return (
		<Box position='relative' display='inline-flex'>
			<CircularProgress thickness={1.5} color='secondary' size={80} variant='determinate' value={value} />
			<Box top={0} left={0} bottom={0} right={0} position='absolute' display='flex' alignItems='center' justifyContent='center'>
				<Typography color='secondary' component='div'>
					{label}
				</Typography>
			</Box>
		</Box>
	)
}
