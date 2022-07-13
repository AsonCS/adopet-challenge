import React from 'react'

import { casa, logo03, messages as imgMessages } from '../../images'
import { landPage, messages, profile } from '../../paths'
import Styled from './styled'

export default function AppHeader(props: { userAvatar: string }) {
	const userIcon = () => {
		if (!props.userAvatar) {
			return <></>
		} else {
			return (
				<a href={profile}>
					<Styled.UserImg
						src={props.userAvatar}
						alt='Icone do usuário'
					/>
				</a>
			)
		}
	}
	return (
		<Styled.Header>
			<Styled.Logo src={logo03} alt='Logo' />
			<Styled.Nav>
				<a href={landPage}>
					<Styled.NavIcon src={casa} alt='Icone de home' />
				</a>
				<a href={messages}>
					<Styled.NavIcon
						src={imgMessages}
						alt='Icone de mensagens'
					/>
				</a>
			</Styled.Nav>
			{userIcon()}
		</Styled.Header>
	)
}
