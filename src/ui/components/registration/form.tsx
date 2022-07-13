import React, { useState } from 'react'

import { passwordToggle } from '../../images'
import AppStyled from '../../styled'
import Styled from './styled'

export default function Form(props: { children: any }) {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
	return (
		<Styled.Form action='#' onSubmit={(e) => e.preventDefault()}>
			<AppStyled.AppFormLabel>
				Email
				<AppStyled.AppFormInput
					type={'email'}
					name='email'
					placeholder='Escolha seu melhor email'
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Nome
				<AppStyled.AppFormInput
					type={'text'}
					name='name'
					placeholder='Digite seu nome completo'
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Senha
				<AppStyled.AppFormInputPassword
					type={passwordVisible ? 'text' : 'password'}
					name='password'
					placeholder='Crie uma senha'
				/>
				<AppStyled.AppFormPasswordToggle
					src={passwordToggle}
					onClick={() => setPasswordVisible((old) => !old)}
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Confirma sua senha
				<AppStyled.AppFormInputPassword
					type={confirmPasswordVisible ? 'text' : 'password'}
					name='confirmPassword'
					placeholder='Repita a senha criada acima'
				/>
				<AppStyled.AppFormPasswordToggle
					src={passwordToggle}
					onClick={() => setConfirmPasswordVisible((old) => !old)}
				/>
			</AppStyled.AppFormLabel>
			{props.children}
		</Styled.Form>
	)
}
