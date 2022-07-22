import { sha256 } from 'js-sha256'

import UserNotSignedInException from '../../exception/UserNotSignedInException'
import WrongPasswordException from '../../exception/WrongPasswordException'
import User from '../../model/User'

const SESSION_USER = 'SESSION_USER'

export const setUser = async (user: User): Promise<boolean> => {
	try {
		localStorage.setItem(
			user.email,
			JSON.stringify(
				new User(user.email, user.name, sha256(user.password))
			)
		)
		return Promise.resolve(true)
	} catch (error) {
		// console.log(error)
		return Promise.resolve(false)
	}
}

export const getUser = async (
	email: string,
	password: string
): Promise<User | undefined> => {
	try {
		const item = localStorage.getItem(email)
		if (!item) {
			throw new UserNotSignedInException()
		}
		const user = JSON.parse(item) as User
		if (user.password !== sha256(password)) {
			throw new WrongPasswordException()
		}
		user.password = ''
		return Promise.resolve(user)
	} catch (error) {
		// console.log(error)
		return Promise.reject(error)
	}
}

export const setSessionUser = async (
	email: string,
	name: string
): Promise<boolean> => {
	try {
		sessionStorage.setItem(
			SESSION_USER,
			JSON.stringify(new User(email, name, ''))
		)
		return Promise.resolve(true)
	} catch (error) {
		return Promise.resolve(false)
	}
}

export const getSessionUser = async (): Promise<User | null> => {
	try {
		const item = sessionStorage.getItem(SESSION_USER)
		if (!item) {
			return Promise.resolve(null)
		}
		const user = JSON.parse(item) as User
		return Promise.resolve(user)
	} catch (error) {
		return Promise.resolve(null)
	}
}
