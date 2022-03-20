import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import TodoList from './components/Todo/TodoList'

function App() {
	return (
		<>
			<Routes>
				<Route path='/TodoList' element={<TodoList />} />
				<Route path='/' element={<LoginPage/>} />
			</Routes>
		</>
	)
}

export default App
