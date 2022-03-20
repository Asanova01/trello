import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import todosSlice from './todos-slice'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		todos: todosSlice.reducer
	},
})

export default store
