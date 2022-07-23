/* eslint-disable no-fallthrough */
import React, { useState } from 'react'

import { CITY_REGEX, PHONE_NUMBER_REGEX } from '../../../utils'
import User from '../../../api/model/User'
import AppStyled from '../../styled'
import Styled from './styled'

interface Props {
	children: any
	user: User
	onSubmit: (user: User) => void
}

export default function Form(props: Props) {
	const [address, setAddress] = useState<string>(props.user?.address || '')
	const [about, setAbout] = useState<string>(props.user?.about || '')
	const [avatar, setAvatar] = useState<string>(props.user?.avatar || '')
	const [name, setName] = useState<string>(props.user?.name || '')
	const [phone, setPhone] = useState<string>(props.user?.phone || '')

	return (
		<AppStyled.AppForm
			action='#'
			onSubmit={(e) => {
				e.preventDefault()

				if (!confirm('Tem certeza que deseja atualizar?')) {
					return
				}

				props.user.address = address
				props.user.about = about
				props.user.avatar = avatar
				props.user.name = name
				props.user.phone = phone

				props.onSubmit(props.user)
			}}
		>
			<AppStyled.AppDivCentered>
				<Styled.H2>Perfil</Styled.H2>
			</AppStyled.AppDivCentered>
			<AppStyled.AppFormLabelBlue>
				Foto
				<AppStyled.AppDivCentered>
					<Styled.UserImg alt='Foto do usuário' src={avatar} />
					<Styled.UserSpan>
						Clique na foto para editar
						<input
							accept={'.png, .jpg, .jpeg'}
							onChange={(e) => {
								const file = e.target.files[0]
								const reader = new FileReader()
								reader.onloadend = () => {
									setAvatar(reader.result.toString())
								}
								reader.readAsDataURL(file)
							}}
							type='file'
						/>
					</Styled.UserSpan>
				</AppStyled.AppDivCentered>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Nome
				<AppStyled.AppFormInputWhite
					name='name'
					maxLength={40}
					minLength={4}
					onChange={(e) => {
						setName(e.target.value)
					}}
					placeholder='Insira seu nome completo'
					required
					type={'text'}
					value={name}
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Telefone
				<AppStyled.AppFormInputWhite
					name='phone'
					onChange={(e) => {
						let phone = e.target.value.replaceAll(/\D/g, '')
						if (phone.length >= 11) {
							phone = `(${phone.substring(0, 2)}) ${
								phone[2]
							} ${phone.substring(3, 7)}-${phone.substring(
								7,
								11
							)}`
						}
						setPhone(phone)
					}}
					pattern={PHONE_NUMBER_REGEX}
					placeholder='Insira seu telefone e/ou whatsapp'
					required
					type={'text'}
					value={phone}
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Cidade
				<AppStyled.AppFormInputWhite
					name='address'
					onChange={(e) => {
						setAddress(e.target.value)
					}}
					pattern={CITY_REGEX}
					placeholder='Insira sua cidade (ex: São Paulo - SP)'
					required
					type={'text'}
					value={address}
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Sobre
				<AppStyled.AppFormTextArea
					maxLength={400}
					minLength={2}
					name='about'
					onChange={(e) => {
						setAbout(e.target.value)
					}}
					placeholder='Escreva sobre você.'
					required
					value={about}
				/>
			</AppStyled.AppFormLabelBlue>
			{props.children}
		</AppStyled.AppForm>
	)
}
