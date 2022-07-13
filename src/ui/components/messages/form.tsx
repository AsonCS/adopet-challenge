import React from 'react'

import AppStyled from '../../styled'

export default function Form(props: { children: any }) {
	return (
		<AppStyled.AppForm action='#' onSubmit={(e) => e.preventDefault()}>
			<AppStyled.AppFormLabelBlue>
				Nome
				<AppStyled.AppFormInputWhite
					type={'text'}
					name='name'
					placeholder='Insira seu nome completo'
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Telefone
				<AppStyled.AppFormInputWhite
					type={'text'}
					name='phone'
					placeholder='Insira seu telefone e/ou whatsapp'
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Nome do animal
				<AppStyled.AppFormInputWhite
					type={'text'}
					name='petName'
					placeholder='Por qual animal você se interessou?'
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Mensagem
				<AppStyled.AppFormTextArea
					name='message'
					placeholder='Escreva sua mensagem.'
				/>
			</AppStyled.AppFormLabelBlue>
			{props.children}
		</AppStyled.AppForm>
	)
}
