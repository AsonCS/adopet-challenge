import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'

import { landPage } from '../src/ui/paths'

export default function _404() {
	useEffect(() => {
		Router.replace(landPage)
	})
	return (
		<>
			<Head>
				<link rel='icon' href='/images/logo_01.png' />
				<meta name='og:title' content={'404 Error'} />
				<title>{'404 Error'}</title>
			</Head>
			<h1>404 Error</h1>
		</>
	)
}
