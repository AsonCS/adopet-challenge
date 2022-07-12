import Head from 'next/head'
import React from 'react'

import Home from '../src/components/home'

export default function App() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/images/logo_01.png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='og:title' content='Adopet' />
				<title>Adopet</title>
				<meta
					name='description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://github.com/AsonCS/react-projeto-tchauzinho'
				/>
				<meta property='og:title' content='Adopet' />
				<meta
					property='og:description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>
				<meta
					property='og:image'
					content='https://github.com/AsonCS/react-projeto-tchauzinho/raw/master/public/favicon.ico'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://github.com/AsonCS/react-projeto-tchauzinho'
				/>
				<meta property='twitter:title' content='Adopet' />
				<meta
					property='twitter:description'
					content='Vem gerar seus NFTs aqui, pode colocar sua mensagem nele...'
				/>
				<meta
					property='twitter:image'
					content='https://github.com/AsonCS/react-projeto-tchauzinho/raw/master/public/favicon.ico'
				/>
			</Head>
			<Home />
		</>
	)
}
