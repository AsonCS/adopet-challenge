import React, { useRef, useState } from 'react'

import { EMAIL_ADDRESS } from '../../../utils'
import { passwordToggle } from '../../images'
import User from '../../../api/model/User'
import AppStyled from '../../styled'
import Styled from './styled'

interface Props {
	children: any
	onSubmit: (user: User) => void
}

export default function Form(props: Props) {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
	const emailRef = useRef<HTMLInputElement>()
	const nameRef = useRef<HTMLInputElement>()
	const passwordRef = useRef<HTMLInputElement>()
	const confirmPasswordRef = useRef<HTMLInputElement>()

	let hasError = false

	const verifyPassword = (): boolean => {
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			hasError = true
			confirmPasswordRef.current.setCustomValidity(
				'As senhas devem ser iguais.'
			)
			return false
		} else {
			hasError = false
			confirmPasswordRef.current.setCustomValidity('')
			return true
		}
	}

	return (
		<Styled.Form
			action='#'
			onSubmit={(e) => {
				e.preventDefault()
				const user = new User(
					emailRef.current.value,
					nameRef.current.value,
					passwordRef.current.value
				)
				// console.log(user)
				if (verifyPassword()) {
					props.onSubmit(user)
				}
			}}
		>
			<AppStyled.AppFormLabel>
				Email
				<AppStyled.AppFormInput
					ref={emailRef}
					type={'email'}
					name='email'
					pattern={EMAIL_ADDRESS}
					placeholder='Escolha seu melhor email'
					required
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Nome
				<AppStyled.AppFormInput
					ref={nameRef}
					type={'text'}
					name='name'
					minLength={4}
					maxLength={40}
					placeholder='Digite seu nome completo'
					required
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Senha
				<AppStyled.AppFormInputPassword
					ref={passwordRef}
					onChange={() => {
						if (hasError) {
							verifyPassword()
						}
					}}
					type={passwordVisible ? 'text' : 'password'}
					name='password'
					minLength={8}
					maxLength={20}
					placeholder='Crie uma senha'
					required
				/>
				<AppStyled.AppFormPasswordToggle
					src={passwordToggle}
					onClick={() => setPasswordVisible((old) => !old)}
				/>
			</AppStyled.AppFormLabel>
			<AppStyled.AppFormLabel>
				Confirma sua senha
				<AppStyled.AppFormInputPassword
					ref={confirmPasswordRef}
					onChange={() => {
						if (hasError) {
							verifyPassword()
						}
					}}
					type={confirmPasswordVisible ? 'text' : 'password'}
					name='confirmPassword'
					minLength={8}
					maxLength={20}
					placeholder='Repita a senha criada acima'
					required
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
