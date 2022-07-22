type Pet = {
	id: number
	image: string
	name: string
	age: string
	size: string
	behavior: string
	location: string
}

export default class Pets {
	constructor(public readonly list: Array<Pet> = []) {}
}
