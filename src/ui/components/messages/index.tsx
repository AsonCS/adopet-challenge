import React from 'react'

import { userPlaceholder } from '../../images'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import Form from './form'

export default function Messages() {
	return (
		<AppStyled.AppContainer01>
			<AppHeader userAvatar={userPlaceholder} />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					Envie uma mensagem para a pessoa ou instituição que está
					cuidando do animal:
				</AppStyled.AppH2BlueMargin>
				<Form>
					<AppStyled.AppDivCentered>
						<AppStyled.AppButton>Enviar</AppStyled.AppButton>
					</AppStyled.AppDivCentered>
				</Form>
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer01>
	)
}
