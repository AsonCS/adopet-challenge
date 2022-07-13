import styled from 'styled-components'
import React from 'react'

import { casa, messages, userPlaceholder } from '../../images'

const Header = styled.header`
	display: flex;
	gap: 4em;
	justify-content: space-between;
	padding: 3em 2em 0em 3em;
`

const Nav = styled.nav`
	display: flex;
	gap: 4em;
`

const NavIcon = styled.img`
	width: 24px;
`

export default function AppHeader(props: {
	userAvatar: string | null
}) {
	const userIcon = () => {
		if (props.userAvatar === null) {
			return <></>
		} else {
			return <img src={userPlaceholder} alt='Icone do usuário' />
		}
	}
	return (
		<Header>
			<Nav>
				<NavIcon src={casa} alt='Icone de home' />
				<NavIcon src={messages} alt='Icone de mensagens' />
			</Nav>
			{userIcon()}
		</Header>
	)
}
