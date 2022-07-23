export default class UserNotSignedInException extends Error {
	constructor() {
		super('User Not Signed In Error')
		Object.setPrototypeOf(this, UserNotSignedInException.prototype)
	}
}
