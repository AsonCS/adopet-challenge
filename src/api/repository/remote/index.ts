import Pets from '../../model/Pets'

export const getPets = async (): Promise<Pets> => {
	const response: Pets = await fetch('/json/pets.json')
		.then((value) => value.json())
		.then((value) => new Pets(value))
		// eslint-disable-next-line handle-callback-err, @typescript-eslint/no-unused-vars
		.catch((error) => {
			// console.log(error)
			return new Pets()
		})

	// console.log(response.list)
	return response
}
