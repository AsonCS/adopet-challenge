import { useState, useEffect } from 'react'

import { getPets } from '../../api/repository/remote'
import Pets from '../../api/model/Pets'

export default function usePets(): Pets {
	const [pets, setPets] = useState<Pets>(new Pets())

	useEffect(() => {
		getPets().then((pets) => setPets(pets))
	}, [])

	return pets
}
