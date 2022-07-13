import React from 'react'

import AppStyled from '../../styled'
import { user } from '../../images'
import AppFooter from '../footer'
import AppHeader from '../header'
import Form from './form'

export default function Home() {
	return (
		<AppStyled.AppContainer01>
			<AppHeader userAvatar={user} />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					Esse é o perfil que aparece para responsáveis ou ONGs que
					recebem sua mensagem.
				</AppStyled.AppH2BlueMargin>
				<Form>
					<AppStyled.AppDivCentered>
						<AppStyled.AppButton>Salvar</AppStyled.AppButton>
					</AppStyled.AppDivCentered>
				</Form>
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer01>
	)
}
