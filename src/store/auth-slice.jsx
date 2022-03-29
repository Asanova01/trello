import { createSlice } from '@reduxjs/toolkit'

const user = {
	email: 'asanovabaya@gmail.com',
	password: '123',
}

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userProfile: user,
		authentication: false,
	},
	reducers: {
		login(state, action) {
			if (
				state.userProfile.email === action.payload.email &&
				state.userProfile.password === action.payload.password
			) {
				state.authentication = true
			} else {
				state.authentication = false
			}
		},
	},
})

export const authActions = authSlice.actions
export default authSlice
