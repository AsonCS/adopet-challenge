import React from 'react'
import usePets from '../../hooks/usePets'

import useRedirectUser from '../../hooks/useRedirectUser'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import Form from './form'

export default function Messages() {
	const user = useRedirectUser()
	const pets = usePets()

	const getForm = () => {
		if (user) {
			return (
				<Form
					onSubmit={(id, name, message) => {
						const userName = `Nome: ${user.name}\n`
						const phone = `Telefone: ${user.phone}\n`
						const petName = `Nome do animal: ${name}\n`
						const petId = `Id do animal: ${id}\n`
						const userMessage = `Mensagem: ${message}`
						alert(
							`-\n${userName}${phone}${petName}${petId}${userMessage}`
						)
					}}
					pets={pets}
					user={user}
				>
					<AppStyled.AppDivCentered>
						<AppStyled.AppButton>Enviar</AppStyled.AppButton>
					</AppStyled.AppDivCentered>
				</Form>
			)
		} else {
			return <></>
		}
	}

	return (
		<AppStyled.AppContainer01>
			<AppHeader />
			<AppStyled.AppMain>
				<AppStyled.AppH2BlueMargin>
					Envie uma mensagem para a pessoa ou instituição que está
					cuidando do animal:
				</AppStyled.AppH2BlueMargin>
				{getForm()}
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer01>
	)
}
