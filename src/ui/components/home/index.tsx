import React from 'react'

import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import PetsList from './PetsList'
import { petList } from './Pets'
import Styled from './styled'

export default function Home() {
	const Containers = (props: { children: any }) => {
		return (
			<AppStyled.AppContainer>
				<AppStyled.Forma01>
					<AppStyled.AppContent>
						{props.children}
					</AppStyled.AppContent>
				</AppStyled.Forma01>
			</AppStyled.AppContainer>
		)
	}

	return (
		<Containers>
			<AppHeader userAvatar={''} />
			<AppStyled.AppMain>
				<Styled.H2>
					Olá! Veja os amigos disponíveis para adoção!
				</Styled.H2>
				<PetsList
					petList={petList}
					onPetClick={(id, name) => alert(`Pet ${name} com id ${id}`)}
				/>
			</AppStyled.AppMain>
			<AppFooter />
		</Containers>
	)
}
