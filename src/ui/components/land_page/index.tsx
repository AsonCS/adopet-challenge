import React from 'react'

import { logo03, draw01 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'

export default function LandPage() {
	return (
		<Styled.Container>
			<AppStyled.Forma01>
				<AppStyled.Forma02>
					<AppStyled.AppContent>
						<AppHeader userAvatar={null} />
						<AppStyled.AppMain>
							<AppStyled.Logo src={logo03} alt='Adopet logo' />
							<Styled.H1>Boas-vindas!</Styled.H1>
							<Styled.H2>
								Que tal mudar sua vida adotando seu novo melhor
								amigo? Vem com a gente!
							</Styled.H2>
							<AppStyled.AppAnchor>
								Já tenho conta
							</AppStyled.AppAnchor>
							<AppStyled.AppAnchor>
								Quero me cadastrar
							</AppStyled.AppAnchor>
							<Styled.DivDraw>
								<img src={draw01} />
							</Styled.DivDraw>
							<AppFooter />
						</AppStyled.AppMain>
					</AppStyled.AppContent>
				</AppStyled.Forma02>
			</AppStyled.Forma01>
		</Styled.Container>
	)
}
