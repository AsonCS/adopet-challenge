import { createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/app'
import React from 'react'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: sans-serif;
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
	  text-decoration: none;
  }
  a:hover {
	  text-decoration: underline;
  }
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
