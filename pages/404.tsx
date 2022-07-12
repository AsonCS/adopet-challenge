import Head from 'next/head'
import React from 'react'

export default function _404() {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='og:title' content={'404 Error'} />
				<title>{'404 Error'}</title>
			</Head>
			<h1>404 Error</h1>
		</>
	)
}
