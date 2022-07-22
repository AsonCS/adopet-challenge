import React, { useEffect, useState } from 'react'

import { getPets } from '../../../api/repository/remote'
import { userPlaceholder } from '../../images'
import Pets from '../../../api/model/Pets'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import PetsList from './PetsList'
import Styled from './styled'

export default function Home() {
	const [pets, setPets] = useState<Pets>(new Pets())

	useEffect(() => {
		getPets().then((pets) => setPets(pets))
	}, [])

	return (
		<Styled.Container>
			<AppHeader userAvatar={userPlaceholder} />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					<Styled.H2Span>Olá!</Styled.H2Span> Veja os amigos
					disponíveis para adoção!
				</AppStyled.AppH2BlueMargin>
				<PetsList
					pets={pets}
					onPetClick={(id, name) => alert(`Pet ${name} com id ${id}`)}
				/>
			</AppStyled.AppMain>
			<AppFooter />
		</Styled.Container>
	)
}
