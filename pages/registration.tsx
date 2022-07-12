import Head from 'next/head'
import React from 'react'

import AppRegistration from '../src/ui/components/registration'

export default function Registration() {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/images/logo_01.png' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='og:title' content='Adopet - Cadastro' />
				<title>Adopet - Cadastro</title>
				<meta
					name='description'
					content='Contribua com esta causa...'
				/>

				{/* <!-- Facebook --> */}
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://adopet-by-asoncs.web.app/'
				/>
				<meta property='og:title' content='Adopet - Cadastro' />
				<meta
					property='og:description'
					content='Contribua com esta causa...'
				/>
				<meta
					property='og:image'
					content='https://adopet-by-asoncs.web.app/images/logo_02.png'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://adopet-by-asoncs.web.app/'
				/>
				<meta property='twitter:title' content='Adopet - Cadastro' />
				<meta
					property='twitter:description'
					content='Contribua com esta causa...'
				/>
				<meta
					property='twitter:image'
					content='https://adopet-by-asoncs.web.app/images/logo_02.png'
				/>
			</Head>
			<AppRegistration />
		</>
	)
}
