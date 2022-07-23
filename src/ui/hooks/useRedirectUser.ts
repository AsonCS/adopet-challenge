import { useEffect } from 'react'
import Router from 'next/router'

import useSessionUser from './useSessionUser'
import User from '../../api/model/User'
import { landPage } from '../paths'

export default function useRedirectUser(
	whenLoggedIn: boolean = false,
	path: string = landPage
): User | null | undefined {
	const user = useSessionUser()

	useEffect(() => {
		if (whenLoggedIn && user) {
			Router.replace(path)
		} else if (!whenLoggedIn && user === null) {
			Router.replace(path)
		}
	}, [user])

	return user
}
