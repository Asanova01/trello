import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Notfoundpage from './pages/Notfoundpage'
import MainPage from './pages/MainPage'
import LoadingSpinner from './components/Layout/LoadingSpinner'

const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const SignupPage = React.lazy(() => import('./pages/SignupPage'))
const TodoList = React.lazy(() => import('./pages/TodoList'))

function App() {
	return (
		<>
			<Suspense
				fallback={
					<div className='centered'>
						<LoadingSpinner />
					</div>
				}
			>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='login' element={<LoginPage />}/>
					<Route path='home' element={<TodoList />} />
					<Route path='signup' element={<SignupPage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
