import React from 'react'
import MainNavigator from './MainNavigator'

const Layout = ({ children }) => {
	return (
		<>
			<MainNavigator />
			<main>{children}</main>
		</>
	)
}

export default Layout
