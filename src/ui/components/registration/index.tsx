import Router from 'next/router'
import React from 'react'

import { setUser } from '../../../api/repository/local'
import User from '../../../api/model/User'
import { landPage } from '../../paths'
import { logo02 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'
import Form from './form'

export default function Registration() {
	return (
		<AppStyled.AppContainer040103>
			<AppHeader userAvatar={null} />
			<AppStyled.AppMain>
				<AppStyled.Logo src={logo02} alt='Adopet logo' />
				<Styled.H2>
					Ainda não tem cadastro?
					<span />
					Então, antes de buscar seu melhor amigo, precisamos de
					alguns dados:
				</Styled.H2>
				<Form
					onSubmit={(user: User) => {
						setUser(user).then(() => Router.replace(landPage))
					}}
				>
					<AppStyled.AppButton type='submit'>
						Cadastrar
					</AppStyled.AppButton>
				</Form>
			</AppStyled.AppMain>
			<AppFooter />
		</AppStyled.AppContainer040103>
	)
}
