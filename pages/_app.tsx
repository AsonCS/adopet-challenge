import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

import { GlobalStyle } from '../src/ui/styled'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
