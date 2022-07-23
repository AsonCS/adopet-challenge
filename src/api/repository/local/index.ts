import { sha256 } from 'js-sha256'

import UserNotSignedInException from '../../exception/UserNotSignedInException'
import WrongPasswordException from '../../exception/WrongPasswordException'
import User from '../../model/User'

const SESSION_USER = 'SESSION_USER'
const IMG_USER = 'IMG_USER'

export const setUser = async (
	user: User,
	savePassword: boolean = false
): Promise<boolean> => {
	try {
		const store = new User(
			user.about,
			user.address,
			user.avatar,
			user.email,
			user.name,
			user.password,
			user.phone
		)
		const avatar = store.avatar
		store.avatar = ''
		if (savePassword) {
			store.password = sha256(store.password)
		}
		localStorage.setItem(store.email, JSON.stringify(store))
		localStorage.setItem(`${store.email}_${IMG_USER}`, avatar)
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
		user.avatar = localStorage.getItem(`${user.email}_${IMG_USER}`)
		return Promise.resolve(user)
	} catch (error) {
		// console.log(error)
		return Promise.reject(error)
	}
}

export const setSessionUser = async (user: User | null): Promise<boolean> => {
	try {
		if (user) {
			const store = new User(
				user.about,
				user.address,
				user.avatar,
				user.email,
				user.name,
				user.password,
				user.phone
			)
			const avatar = store.avatar
			store.avatar = ''
			sessionStorage.setItem(SESSION_USER, JSON.stringify(store))
			sessionStorage.setItem(IMG_USER, avatar)
		} else {
			sessionStorage.removeItem(SESSION_USER)
		}
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
		user.avatar = sessionStorage.getItem(IMG_USER)
		return Promise.resolve(user)
	} catch (error) {
		return Promise.resolve(null)
	}
}
