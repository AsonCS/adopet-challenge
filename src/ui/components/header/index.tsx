import React from 'react'

import { casa, messages, userPlaceholder } from '../../images'
import { landPage, registration } from '../../paths'
import Styled from './styled'

export default function AppHeader(props: { userAvatar: string | null }) {
	const userIcon = () => {
		if (props.userAvatar === null) {
			return <></>
		} else {
			return <img src={userPlaceholder} alt='Icone do usuário' />
		}
	}
	return (
		<Styled.Header>
			<Styled.Nav>
				<a href={landPage}>
					<Styled.NavIcon src={casa} alt='Icone de home' />
				</a>
				<a href={registration}>
					<Styled.NavIcon src={messages} alt='Icone de mensagens' />
				</a>
			</Styled.Nav>
			{userIcon()}
		</Styled.Header>
	)
}
