import Router from 'next/router'
import React from 'react'

import { setSessionUser, setUser } from '../../../api/repository/local'
import useRedirectUser from '../../hooks/useRedirectUser'
import AppStyled from '../../styled'
import AppFooter from '../footer'
import AppHeader from '../header'
import Form from './form'

export default function Home() {
	const user = useRedirectUser()

	const getForm = () => {
		if (user) {
			return (
				<Form
					user={user}
					onSubmit={(user) => {
						setUser(user)
							.then((isSuccessful) => {
								if (isSuccessful) {
									return setSessionUser(user)
								}
								return Promise.resolve(false)
							})
							.then((isSuccessful) => {
								if (isSuccessful) {
									alert('Informações alteradas com sucesso.')
									Router.reload()
								} else {
									alert('Erro ao atualizar informaçoes.')
								}
							})
					}}
				>
					<AppStyled.AppDivCentered>
						<AppStyled.AppButton>Salvar</AppStyled.AppButton>
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
					Esse é o perfil que aparece para responsáveis ou ONGs que
					recebem sua mensagem.
				</AppStyled.AppH2BlueMargin>
				{getForm()}
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer01>
	)
}
