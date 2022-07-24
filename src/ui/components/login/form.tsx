import React, { useRef, useState } from 'react'

import { passwordToggle, passwordToggleOpen } from '../../images'
import { EMAIL_ADDRESS_REGEX } from '../../../utils'
import AppStyled from '../../styled'
import Styled from './styled'

interface Props {
	children: any
	onSubmit: (email: string, password: string) => void
}

export default function Form(props: Props) {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const emailRef = useRef<HTMLInputElement>()
	const passwordRef = useRef<HTMLInputElement>()

	const passwordToggleComponent = (
		isHidden: boolean,
		listener: () => void
	) => {
		if (isHidden) {
			return (
				<AppStyled.AppFormPasswordToggle
					src={passwordToggleOpen}
					onClick={listener}
				/>
			)
		} else {
			return (
				<AppStyled.AppFormPasswordToggle
					src={passwordToggle}
					onClick={listener}
				/>
			)
		}
	}

	return (
		<Styled.Form
			action='#'
			id='loginForm'
			onSubmit={(e) => {
				e.preventDefault()
				props.onSubmit(
					emailRef.current.value,
					passwordRef.current.value
				)
			}}
		>
			<AppStyled.AppFormLabel>
				Email
				<AppStyled.AppFormInput
					ref={emailRef}
					type={'email'}
					pattern={EMAIL_ADDRESS_REGEX}
					name='email'
					placeholder='Insira seu email'
					required
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Senha
				<AppStyled.AppDivFormInputPassword>
					<AppStyled.AppFormInputPassword
						ref={passwordRef}
						type={passwordVisible ? 'text' : 'password'}
						name='password'
						minLength={8}
						maxLength={20}
						placeholder='Insira sua senha'
						required
					/>
					{passwordToggleComponent(passwordVisible, () => {
						setPasswordVisible((old) => !old)
					})}
				</AppStyled.AppDivFormInputPassword>
			</AppStyled.AppFormLabel>
			{props.children}
		</Styled.Form>
	)
}
