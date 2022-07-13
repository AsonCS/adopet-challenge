import React from 'react'

import { logo02 } from '../../images'
import AppStyled from '../../styled'
import AppHeader from '../header'
import AppFooter from '../footer'
import Styled from './styled'

export default function Home() {
	return (
		<Styled.Container>
			<AppStyled.Forma01>
				<AppStyled.Forma03>
					<AppStyled.AppContent>
						<AppHeader userAvatar={null} />
						<AppStyled.AppMain>
							<AppStyled.Logo src={logo02} alt='Adopet logo' />
							<Styled.H2>
								Ainda não tem cadastro?
								<span />
								Então, antes de buscar seu melhor amigo,
								precisamos de alguns dados:
							</Styled.H2>
							<Styled.Form
								action='#'
								onSubmit={(e) => e.preventDefault()}
							>
								<Styled.Label>
									Email
									<Styled.Input
										type={'email'}
										name='email'
										placeholder='Escolha seu melhor email'
									/>
								</Styled.Label>
								<Styled.Label>
									Nome
									<Styled.Input
										type={'text'}
										name='name'
										placeholder='Digite seu nome completo'
									/>
								</Styled.Label>
								<Styled.Label>
									Senha
									<Styled.Input
										type={'password'}
										name='password'
										placeholder='Crie uma senha'
									/>
								</Styled.Label>
								<Styled.Label>
									Confirma sua senha
									<Styled.Input
										type={'password'}
										name='confirmPassword'
										placeholder='Repita a senha criada acima'
									/>
								</Styled.Label>
							</Styled.Form>
							<AppStyled.AppButton>Cadastrar</AppStyled.AppButton>
							<Styled.DivSpace />
						</AppStyled.AppMain>
						<AppFooter />
					</AppStyled.AppContent>
				</AppStyled.Forma03>
			</AppStyled.Forma01>
		</Styled.Container>
	)
}
