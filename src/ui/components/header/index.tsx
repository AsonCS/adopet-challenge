import Router from 'next/router'
import React, { useEffect, useRef } from 'react'

import { casa, logo03, messages as imgMessages } from '../../images'
import { setSessionUser } from '../../../api/repository/local'
import { landPage, messages, profile } from '../../paths'
import useSessionUser from '../../hooks/useSessionUser'
import Styled from './styled'

export default function AppHeader() {
	const user = useSessionUser()

	const userAvatarRef = useRef<HTMLAnchorElement>()

	useEffect(() => {
		if (Router.asPath === profile && userAvatarRef.current) {
			userAvatarRef.current.innerHTML += 'Sair'
		}
	}, [user])

	const userIcon = () => {
		if (!user) {
			return <></>
		} else {
			return (
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault()
						if (Router.asPath !== profile) {
							Router.push(profile)
						} else {
							if (confirm('Quer sair?')) {
								setSessionUser(null)
								Router.push(landPage)
							}
						}
					}}
					ref={userAvatarRef}
				>
					<Styled.UserImg src={user.avatar} alt='Icone do usuário' />
				</a>
			)
		}
	}

	return (
		<Styled.Header>
			<Styled.Logo src={logo03} alt='Logo' />
			<Styled.Nav>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault()
						if (Router.asPath !== landPage) {
							Router.push(landPage)
						}
					}}
				>
					<Styled.NavIcon src={casa} alt='Icone de home' />
				</a>
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault()
						if (Router.asPath !== messages) {
							Router.push(messages)
						}
					}}
				>
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
