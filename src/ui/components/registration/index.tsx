import React from 'react'

import { landPage } from '../../paths'
import { logo02 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'
import Form from './form'

export default function Registration() {
	const Containers = (props: { children: any }) => {
		return (
			<AppStyled.AppContainer>
				<AppStyled.Forma01>
					<AppStyled.Forma03>
						<AppStyled.Forma04>
							<AppStyled.AppContent>
								{props.children}
							</AppStyled.AppContent>
						</AppStyled.Forma04>
					</AppStyled.Forma03>
				</AppStyled.Forma01>
			</AppStyled.AppContainer>
		)
	}

	return (
		<Containers>
			<AppHeader userAvatar={null} />
			<AppStyled.AppMain>
				<AppStyled.Logo src={logo02} alt='Adopet logo' />
				<Styled.H2>
					Ainda não tem cadastro?
					<span />
					Então, antes de buscar seu melhor amigo, precisamos de
					alguns dados:
				</Styled.H2>
				<Form>
					<AppStyled.AppButton>
						<a href={landPage}>Cadastrar</a>
					</AppStyled.AppButton>
				</Form>
			</AppStyled.AppMain>
			<AppFooter />
		</Containers>
	)
}
