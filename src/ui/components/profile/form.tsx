import React from 'react'

import AppStyled from '../../styled'
import { user } from '../../images'
import Styled from './styled'

export default function Form(props: { children: any }) {
	return (
		<AppStyled.AppForm action='#' onSubmit={(e) => e.preventDefault()}>
			<AppStyled.AppDivCentered>
				<Styled.H2>Perfil</Styled.H2>
			</AppStyled.AppDivCentered>
			<AppStyled.AppFormLabelBlue>
				Foto
				<AppStyled.AppDivCentered>
					<Styled.UserImg src={user} alt='Foto do usuário' />
					<Styled.UserSpan>
						Clique na foto para editar
					</Styled.UserSpan>
				</AppStyled.AppDivCentered>
			</AppStyled.AppFormLabelBlue>
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
				Cidade
				<AppStyled.AppFormInputWhite
					type={'text'}
					name='address'
					placeholder='Insira sua cidade'
				/>
			</AppStyled.AppFormLabelBlue>
			<AppStyled.AppFormLabelBlue>
				Sobre
				<AppStyled.AppFormTextArea
					name='about'
					placeholder='Escreva sobre você.'
				/>
			</AppStyled.AppFormLabelBlue>
			{props.children}
		</AppStyled.AppForm>
	)
}
