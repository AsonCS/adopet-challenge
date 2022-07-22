export default class WrongPasswordException extends Error {
	constructor() {
		super('Wrong Password Error')
		Object.setPrototypeOf(this, WrongPasswordException.prototype)
	}
}
