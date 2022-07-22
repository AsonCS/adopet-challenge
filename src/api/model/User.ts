export default class User {
	constructor(
		public readonly email: string,
		public readonly name: string,
		public password: string = ''
	) {}
}
