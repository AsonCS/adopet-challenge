import React, { useEffect } from 'react'
import Router from 'next/router'

import UserNotSignedInException from '../../../api/exception/UserNotSignedInException'
import WrongPasswordException from '../../../api/exception/WrongPasswordException'
import {
	getUser,
	getSessionUser,
	setSessionUser,
} from '../../../api/repository/local'
import { home } from '../../paths'
import { logo02 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'
import Form from './form'

export default function Registration() {
	useEffect(() => {
		getSessionUser().then((user) => {
			if (user) {
				Router.replace(home)
			}
		})
	}, [])

	return (
		<AppStyled.AppContainer040103>
			<AppHeader userAvatar={null} />
			<AppStyled.AppMain>
				<AppStyled.Logo src={logo02} alt='Adopet logo' />
				<Styled.H2>Já tem conta? Faça seu login:</Styled.H2>
				<Form
					onSubmit={(email: string, password: string) => {
						getUser(email, password)
							.then(() => setSessionUser(email, password))
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
