import { useState, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useBlocker } from './useBlocker'

export function useCallbackPrompt() {
	const navigate = useNavigate()
	const location = useLocation()
    console.log(location);
	const [showPrompt, setShowPrompt] = useState(false)
	const [lastLocation, setLastLocation] = useState(null)
	const [confirmedNavigation, setConfirmedNavigation] = useState(false)
	const cancelNavigation = useCallback(() => {
		setShowPrompt(false)
	}, [])

	const handleBlockedNavigation = useCallback(
		(nextLocation) => {
			if (
				!confirmedNavigation &&
				nextLocation.location.pathname !== location.pathname
			) {
				setShowPrompt(true)
				setLastLocation(nextLocation)
				return false
			}
			return true
		},
		[confirmedNavigation],
	)

	const confirmNavigation = useCallback(() => {
		setShowPrompt(false)
		setConfirmedNavigation(true)
	}, [])
	useEffect(() => {
		if (confirmedNavigation && lastLocation) {
			navigate(lastLocation.location.pathname)
		}
	}, [confirmedNavigation, lastLocation])
	useBlocker(handleBlockedNavigation)
	return [showPrompt, confirmNavigation, cancelNavigation]
}