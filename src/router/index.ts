import { Home } from '../pages/home/Home'
import { Main } from '../pages/main/Main'
import { Register } from '../pages/authification/Register'
import { SignIn } from '../pages/authification/SignIn'

export const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/register', component: Register },
	{ path: '/signIn', component: SignIn },
]
export const privateRoutes = [{ path: '/main', component: Main }]
