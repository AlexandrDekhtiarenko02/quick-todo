import React, { FC, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { CircularProgressWithLabel } from '../../circularProgress/CircularProgress'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { increaseUserRank } from '../../../redux/action-creators/user'
import { ISTATISTIC_DAY } from '../../../redux/types/userTypes'
import { getCurrentDate } from '../../../utils/dates'
import { getCircleProgressRatioValue } from '../../../utils/userStatistic'
import { getCurrentLanguageTranslation } from '../../../utils/languages'
import { languages } from '../../../language'

interface IPROPS {
	anchorEl: HTMLButtonElement | null
	handleClose: () => void
}

export const Statistic: FC<IPROPS> = ({ anchorEl, handleClose }) => {
	const dispatch = useDispatch()
	const { userData, loading } = useTypedSelector(state => state.user)
	const { ranks } = useTypedSelector(state => state.ranks)
	const lang = useTypedSelector(state => state.settings.settings.language)

	const open = Boolean(anchorEl)
	const maxCicrleValue = 100
	const { count, receivedGoalBonus } = (userData.statistic.find(item => item.date === getCurrentDate()) as ISTATISTIC_DAY) || {}

	useEffect(() => {
		if (userData.points >= ranks[userData.currentRankNumber + 1]?.requiredPoints && userData.currentRankNumber <= ranks.length - 1) {
			dispatch(increaseUserRank())
		}
	}, [userData.points, dispatch, ranks, userData.currentRankNumber])

	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			{!loading ? (
				<Box paddingLeft={2} paddingRight={2}>
					<Box marginBottom={2}>
						<Typography variant='h6' color='secondary'>
							{getCurrentLanguageTranslation(languages.productivityTitle, lang)}
						</Typography>
						<Divider />
					</Box>
					<Box marginBottom={1}>
						<Typography variant='body2'>
							{getCurrentLanguageTranslation(languages.completedTodos, lang)}&nbsp;-&nbsp;
							<strong>{userData.completedTodos}</strong>
						</Typography>
					</Box>
					<Box marginBottom={1}>
						<Typography variant='body2'>
							{getCurrentLanguageTranslation(languages.karmaPoints, lang)} -&nbsp;
							<strong>{userData.points} xp</strong>
						</Typography>
					</Box>
					<Box marginBottom={2} display='flex' flexDirection='column' alignItems='center'>
						<Typography variant='subtitle2'>{getCurrentLanguageTranslation(languages.yourLevelTitle, lang)}</Typography>
						<Box marginTop={1}>
							<CircularProgressWithLabel
								label={ranks[userData.currentRankNumber]?.rank}
								value={
									userData.currentRankNumber === ranks.length - 1
										? maxCicrleValue
										: getCircleProgressRatioValue(userData.points, ranks[userData.currentRankNumber + 1]?.requiredPoints)
								}
							/>
						</Box>
					</Box>
					<Box marginBottom={2}>
						{userData.currentRankNumber === ranks.length - 1 ? (
							<Typography variant='body2'>
								<strong>{getCurrentLanguageTranslation(languages.maxStatisticLevel, lang)}</strong>
							</Typography>
						) : (
							<Typography variant='body2'>
								{ranks[userData.currentRankNumber + 1]?.requiredPoints - userData?.points}{' '}
								{getCurrentLanguageTranslation(languages.leftToTheNextLevel, lang)} -&nbsp;
								<strong>{ranks[userData.currentRankNumber + 1]?.rank}</strong>
							</Typography>
						)}
					</Box>
					<Box marginBottom={2} display='flex' flexDirection='column' alignItems='center'>
						<Typography variant='subtitle2'>{getCurrentLanguageTranslation(languages.todaysSuccessTitle, lang)}</Typography>
						{receivedGoalBonus ? (
							<Typography style={{ color: '#FFB740' }} variant='caption'>
								{getCurrentLanguageTranslation(languages.receivedBonus, lang)}&nbsp;
							</Typography>
						) : (
							<Typography variant='caption'>{getCurrentLanguageTranslation(languages.todaysSuccessDescription, lang)}</Typography>
						)}

						<Box marginTop={1}>
							<CircularProgressWithLabel
								label={`${count}/${userData.settings.requiredGoalPoints}`}
								value={receivedGoalBonus ? 100 : getCircleProgressRatioValue(count, userData.settings.requiredGoalPoints)}
							/>
						</Box>
					</Box>
					<Box marginBottom={2} display='flex' flexDirection='column' alignItems='center'>
						<Typography variant='subtitle2'>{getCurrentLanguageTranslation(languages.lastMonthSuccess, lang)}</Typography>
						<Typography variant='caption'>{getCurrentLanguageTranslation(languages.lastMonthSuccessDescription, lang)}</Typography>
						<Box marginTop={1}>
							<AreaChart
								width={300}
								height={200}
								data={userData.statistic}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='date' />
								<YAxis />
								<Tooltip />
								<Area dataKey='count' stroke='#FF7575' fill='#FF7575' fillOpacity={0.3} />
							</AreaChart>
						</Box>
					</Box>
				</Box>
			) : (
				<CircularProgress disableShrink />
			)}
		</Popover>
	)
}
