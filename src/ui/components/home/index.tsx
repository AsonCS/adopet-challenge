import Router from 'next/router'
import React from 'react'

import useRedirectUser from '../../hooks/useRedirectUser'
import usePets from '../../hooks/usePets'
import { messages } from '../../paths'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import PetsList from './PetsList'
import Styled from './styled'

export default function Home() {
	useRedirectUser()
	const pets = usePets()

	return (
		<Styled.Container>
			<AppHeader />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					<Styled.H2Span>Olá!</Styled.H2Span> Veja os amigos
					disponíveis para adoção!
				</AppStyled.AppH2BlueMargin>
				<PetsList
					pets={pets}
					onPetClick={(id, name) => {
						Router.push(`${messages}?id=${id}&name=${name}`)
					}}
				/>
			</AppStyled.AppMain>
			<AppFooter />
		</Styled.Container>
	)
}
