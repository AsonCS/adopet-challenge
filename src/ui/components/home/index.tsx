import React from 'react'

import { userPlaceholder } from '../../images'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import PetsList from './PetsList'
import { petList } from './Pets'
import Styled from './styled'

export default function Home() {
	return (
		<Styled.Container>
			<AppHeader userAvatar={userPlaceholder} />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					<Styled.H2Span>Olá!</Styled.H2Span> Veja os amigos
					disponíveis para adoção!
				</AppStyled.AppH2BlueMargin>
				<PetsList
					petList={petList}
					onPetClick={(id, name) => alert(`Pet ${name} com id ${id}`)}
				/>
			</AppStyled.AppMain>
			<AppFooter />
		</Styled.Container>
	)
}
