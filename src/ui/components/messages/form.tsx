import React, { useEffect, useRef } from 'react'
import Router from 'next/router'

import { PHONE_NUMBER_REGEX } from '../../../utils'
import Pets from '../../../api/model/Pets'
import User from '../../../api/model/User'
import AppStyled from '../../styled'

interface Props {
	children: any
	pets: Pets
	onSubmit: (id: string, name: string, message: string) => void
	user: User
}

export default function Form(props: Props) {
	const petRef = useRef<HTMLSelectElement>()
	const messageRef = useRef<HTMLTextAreaElement>()

	useEffect(() => {
		const petId = Router.query.petId
		if (petId) {
			petRef.current.value = petId.toString()
			messageRef.current.focus()
		}
	}, [props.pets])

	return (
		<AppStyled.AppForm
			action='#'
			onSubmit={(e) => {
				e.preventDefault()
				if (!petRef.current.value) {
					alert('Selecione um pet.')
					return
				}
				const id = petRef.current.value
				const pet = props.pets.list.find(
					(pet) => id === pet.id.toString()
				)
				props.onSubmit(id, pet.name, messageRef.current.value)
			}}
		>
			<AppStyled.AppFormLabelBlue>
				Nome
				<AppStyled.AppFormInputWhite
					name='name'
					readOnly={true}
					required
					type={'text'}
					value={props.user.name}
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Telefone
				<AppStyled.AppFormInputWhite
					name='phone'
					pattern={PHONE_NUMBER_REGEX}
					readOnly={true}
					required
					type={'text'}
					value={props.user.phone}
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Nome do animal
				<AppStyled.AppFormInputSelectWhite
					name='petName'
					ref={petRef}
					required
				>
					<option value={''}>
						Por qual animal você se interessou?
					</option>
					{props.pets.list.map((pet) => {
						return (
							<option key={pet.id} value={pet.id}>
								{pet.name}
							</option>
						)
					})}
				</AppStyled.AppFormInputSelectWhite>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Mensagem
				<AppStyled.AppFormTextArea
					maxLength={400}
					minLength={2}
					name='message'
					placeholder='Escreva sua mensagem.'
					required
					ref={messageRef}
				/>
			</AppStyled.AppFormLabelBlue>
			{props.children}
		</AppStyled.AppForm>
	)
}
