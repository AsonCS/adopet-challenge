import React, { useState } from 'react'

import { passwordToggle } from '../../images'
import AppStyled from '../../styled'
import Styled from './styled'

export default function Form(props: { children: any }) {
	const [passwordVisible, setPasswordVisible] = useState(false)
	return (
		<Styled.Form action='#' onSubmit={(e) => e.preventDefault()}>
			<AppStyled.AppFormLabel>
				Email
				<AppStyled.AppFormInput
					type={'email'}
					name='email'
					placeholder='Insira seu email'
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Senha
				<AppStyled.AppFormInputPassword
					type={passwordVisible ? 'text' : 'password'}
					name='password'
					placeholder='Insira sua senha'
				/>
				<AppStyled.AppFormPasswordToggle
					src={passwordToggle}
					onClick={() => setPasswordVisible((old) => !old)}
				/>
			</AppStyled.AppFormLabel>
			{props.children}
		</Styled.Form>
	)
}
