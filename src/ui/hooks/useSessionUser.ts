import { useState, useEffect } from 'react'

import { getSessionUser } from '../../api/repository/local'
import User from '../../api/model/User'

export default function useSessionUser(): User | null | undefined {
	const [user, setUser] = useState<User | null | undefined>(undefined)

	useEffect(() => {
		getSessionUser().then(setUser)
	}, [])

	return user
}
