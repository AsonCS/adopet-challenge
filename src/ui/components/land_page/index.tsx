import React from 'react'

import { login, registration } from '../../paths'
import { logo03, draw01 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'

export default function LandPage() {
	return (
		<Styled.Container>
			<AppStyled.AppContainer0102>
				<AppHeader userAvatar={null} />
				<AppStyled.AppMain>
					<AppStyled.Logo src={logo03} alt='Adopet logo' />
					<Styled.H1>Boas-vindas!</Styled.H1>
					<AppStyled.AppH2>
						<Styled.SpanPortrait>
							Que tal mudar sua vida adotando seu novo melhor
							amigo?Vem com a gente!
						</Styled.SpanPortrait>
						<Styled.SpanLandscape>
							Adotar pode mudar uma vida. Que tal buscar seu novo
							melhor amigo hoje? Vem com a gente!
						</Styled.SpanLandscape>
					</AppStyled.AppH2>
					<Styled.Anchor href={login}>Já tenho conta</Styled.Anchor>
					<Styled.Anchor href={registration}>
						Quero me cadastrar
					</Styled.Anchor>
				</AppStyled.AppMain>
				<Styled.DivDraw>
					<Styled.Draw src={draw01} alt='Imagem cachorro e gato' />
				</Styled.DivDraw>
				<AppFooter />
			</AppStyled.AppContainer0102>
		</Styled.Container>
	)
}
