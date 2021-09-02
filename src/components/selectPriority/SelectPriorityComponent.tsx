import React, { SetStateAction, Dispatch, FC } from 'react'
import Box from '@material-ui/core/Box'
import Icon from '@material-ui/core/Icon'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import { StyledMenuItem } from '../styledMenu/StyledMenu'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useStyles } from './selectPriorityStyles'
import { languages } from '../../language'
import FlagIcon from '@material-ui/icons/Flag'

interface IPROPS {
	priorityColor: string
	setPriorityColor: Dispatch<SetStateAction<string>>
	setPriorityValue: Dispatch<SetStateAction<number>>
}

export const SelectPriorityComponent: FC<IPROPS> = ({ priorityColor, setPriorityColor, setPriorityValue }) => {
	const classes = useStyles()
	const lang = useTypedSelector(state => state.settings.settings.language.toString())

	return (
		<Box display='flex' alignItems='center'>
			<Icon style={{ color: priorityColor }}>
				<FlagIcon />
			</Icon>
			<Select disableUnderline>
				<StyledMenuItem
					onClick={() => {
						setPriorityColor('#D83A56')
						setPriorityValue(1)
					}}
				>
					<ListItemIcon>
						<FlagIcon className={classes.p1} fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={`${getCurrentLanguageTranslation(languages.priorityLabel, lang)} 1`} />
				</StyledMenuItem>
				<StyledMenuItem
					onClick={() => {
						setPriorityColor('#FF7600')
						setPriorityValue(2)
					}}
				>
					<ListItemIcon>
						<FlagIcon className={classes.p2} fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={`${getCurrentLanguageTranslation(languages.priorityLabel, lang)} 2`} />
				</StyledMenuItem>
				<StyledMenuItem
					onClick={() => {
						setPriorityColor('#F7FD04')
						setPriorityValue(3)
					}}
				>
					<ListItemIcon>
						<FlagIcon className={classes.p3} fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={`${getCurrentLanguageTranslation(languages.priorityLabel, lang)} 3`} />
				</StyledMenuItem>
				<StyledMenuItem
					onClick={() => {
						setPriorityColor('#9EDE73')
						setPriorityValue(4)
					}}
				>
					<ListItemIcon>
						<FlagIcon className={classes.p4} fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={`${getCurrentLanguageTranslation(languages.priorityLabel, lang)} 4`} />
				</StyledMenuItem>
			</Select>
		</Box>
	)
}
