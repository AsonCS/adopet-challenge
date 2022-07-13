import { createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
	/* Reset CSS (Necolas Reset CSS <3) */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		font-family: 'Poppins', sans-serif;
		line-height: 1.6;
		font-size: 1em;
	}
	#__next {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
	img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	a {
		color: #0070f3;
		cursor: pointer;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:active {
		text-decoration: none;
	}
	button {
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		height: fit-content;
		margin: 0;
		padding: 0;
		width: fit-content;
	}
`

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
					href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
