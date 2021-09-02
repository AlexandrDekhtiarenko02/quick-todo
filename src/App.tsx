import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { publicRoutes, privateRoutes } from './router'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { checkAuth } from './redux/action-creators/auth'
import './firebase'
import './scss/app.scss'

export const App: React.FC = () => {
	const dispatch = useDispatch()
	const { loginUserSuccess } = useTypedSelector(state => state.auth)

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{loginUserSuccess ? (
					<Switch>
						{privateRoutes.map(route => (
							<Route key={Math.random()} path={route.path} component={route.component} exact />
						))}
						<Redirect to='/main' />
					</Switch>
				) : (
					<Switch>
						{publicRoutes.map(route => (
							<Route key={Math.random()} path={route.path} component={route.component} exact />
						))}
						<Redirect to='/' />
					</Switch>
				)}
			</BrowserRouter>
		</ThemeProvider>
	)
}
