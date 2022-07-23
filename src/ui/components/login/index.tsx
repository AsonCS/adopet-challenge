import Router from 'next/router'
import React from 'react'

import UserNotSignedInException from '../../../api/exception/UserNotSignedInException'
import WrongPasswordException from '../../../api/exception/WrongPasswordException'
import { getUser, setSessionUser } from '../../../api/repository/local'
import useRedirectUser from '../../hooks/useRedirectUser'
import { logo02 } from '../../images'
import AppStyled from '../../styled'
import { home } from '../../paths'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'
import Form from './form'

export default function Registration() {
	useRedirectUser(true, home)

	return (
		<AppStyled.AppContainer040103>
			<AppHeader />
			<AppStyled.AppMain>
				<AppStyled.Logo src={logo02} alt='Adopet logo' />
				<Styled.H2>Já tem conta? Faça seu login:</Styled.H2>
				<Form
					onSubmit={(email: string, password: string) => {
						getUser(email, password)
							.then((user) => setSessionUser(user))
							.then((isSuccessful) => {
								if (isSuccessful) {
									Router.push(home)
								}
							})
							.catch((error) => {
								if (error instanceof UserNotSignedInException) {
									alert('Usuário não cadastrado.')
								} else if (
									error instanceof WrongPasswordException
								) {
									alert('Senha incorreta.')
								} else {
									alert('Ocorreu algum erro.')
								}
							})
					}}
				>
					<Styled.ForgotLabel>
						Esqueci minha senha.
					</Styled.ForgotLabel>
					<AppStyled.AppButton type='submit'>
						Entrar
					</AppStyled.AppButton>
				</Form>
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer040103>
	)
}
