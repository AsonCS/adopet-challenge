import styled, { createGlobalStyle } from 'styled-components'

import { forma01, forma02, forma03, draw02 } from '../images'

export const GlobalStyle = createGlobalStyle`
	/* Reset CSS (Necolas Reset CSS <3) */
	:root {
		--blue: #3772ff;
		--green: #36d6ad;
		--white: #ffffff;
		--coral: #fc7071;
		--creme: #fcf0e3;
		--dark-gray: #737380;
		--light-gray: #bcbcbc;
		--light-2-gray: #f6f6f6;
		--alpha-gray: #66666611;

		--font-main: 'Poppins', sans-serif;
		--font-secondary: 'IBM Plex Sans', sans-serif;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		font-family: var(--font-main);
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
		font-family: var(--font-main);
		height: fit-content;
		margin: 0;
		padding: 0;
		width: fit-content;
	}
`

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
	text-align: center;
`

const AppContainer01 = styled(AppContainer)`
	background-image: url(${forma01});
	background-repeat: no-repeat;

	@media (min-width: 768px) {
		background-image: url(${forma01}), url(${forma02});
		background-position: left top, right center;
		background-size: 70vw, 15vw;
	}

	@media (min-width: 1440px) {
		background-image: url(${forma01}), url(${forma02});
		background-position: left top, right center;
		background-size: 40vw, 7vw;
	}
`

const AppContainer0102 = styled(AppContainer)`
	background-image: url(${forma01}), url(${forma02});
	background-repeat: no-repeat;
	background-position: left top, right center;

	@media (min-width: 768px) {
		background-size: 70vw, 15vw;
	}

	@media (min-width: 1440px) {
		background-size: 40vw, 7vw;
	}
`

const AppContainer040103 = styled(AppContainer)`
	background-image: url(${draw02}), url(${forma01}), url(${forma03});
	background-repeat: no-repeat;
	background-position: right top, left top, left 420px;

	@media (min-width: 768px) {
		background-image: url(${draw02}), url(${forma01}), url(${forma02});
		background-position: right top, left top, right center;
		background-size: 25vw, 70vw, 13vw;
	}

	@media (min-width: 1440px) {
		background-image: url(${draw02}), url(${forma01}), url(${forma02});
		background-position: right top, left top, right center;
		background-size: 15vw, 35vw, 7vw;
	}
`

const AppMain = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 6em;

	@media (min-width: 768px) {
		margin-top: 12em;
	}

	@media (min-width: 1440px) {
		margin-top: 3em;
	}
`

const AppH2 = styled.h2`
	font-size: 1em;
	font-style: normal;
	font-weight: 400;
	margin: 1.5em auto;
	width: 60vw;

	@media (min-width: 768px) {
		width: 525px;
	}

	@media (min-width: 1440px) {
	}
`

const AppH2Blue = styled(AppH2)`
	color: var(--blue);

	@media (min-width: 768px) {
		width: 525px;
	}
`

const AppH2BlueMargin = styled(AppH2Blue)`
	margin: 0 auto;
	margin-bottom: 1em;

	@media (min-width: 768px) {
		margin-top: 0em;
	}

	@media (min-width: 1440px) {
		margin-top: 5em;
	}
`

const Logo = styled.img`
	height: 3em;
`

const AppAnchor = styled.a`
	background-color: var(--coral);
	border-radius: 0.5em;
	color: var(--white);
	margin: 1em auto 0;
	min-width: 50vw;
	padding: 1em;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		min-width: 165px;
	}

	@media (min-width: 1440px) {
		width: 175px;
	}
`

const AppButton = styled.button`
	background-color: var(--coral);
	border-radius: 0.5em;
	color: var(--white);
	margin: 1em auto 0;
	min-width: 50vw;
	padding: 1em;

	a {
		color: var(--white);
		text-decoration: none;
	}

	@media (min-width: 768px) {
		min-width: 165px;
	}

	@media (min-width: 1440px) {
		width: 175px;
	}
`

const AppDivCentered = styled.div`
	text-align: center;
`

const AppForm = styled.form`
	background-color: var(--alpha-gray);
	border-radius: 2em;
	margin: 0 1.5em 1.5em;
	padding: 2em 1em;
	text-align: start;

	@media (min-width: 768px) {
		margin: 0 auto 2em;
		width: 75vw;
	}

	@media (min-width: 1440px) {
		width: 50vw;
	}
`

const AppFormLabel = styled.label`
	color: var(--dark-gray);
	display: block;
	margin: auto;
	width: fit-content;
`

const AppFormLabelBlue = styled(AppFormLabel)`
	color: var(--blue);
	font-weight: 600;
`

const AppFormPasswordToggle = styled.img`
	float: right;
	margin-right: 1em;
	margin-top: -3em;
	padding: 0.5em;
	position: relative;
`

const AppFormInput = styled.input`
	background-color: var(--light-2-gray);
	border: none;
	border-radius: 6px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
	color: var(--dark-gray);
	display: block;
	font-family: var(--font-main);
	height: 3em;
	margin: 0.5em auto 1em;
	text-align: center;
	width: 90vw;

	::placeholder {
		color: var(--light-gray);
	}

	:focus {
		outline-color: var(--dark-gray);
	}

	@media (min-width: 768px) {
		width: 350px;
	}

	@media (min-width: 1440px) {
		width: 550px;
	}
`

const AppFormInputPassword = styled(AppFormInput)`
	@media (min-width: 1440px) {
		width: 350px;
	}
`

const AppFormInputWhite = styled(AppFormInput)`
	background-color: var(--white);
	padding: 1em;
	text-align: start;
	width: 100%;
`

const AppFormTextArea = styled.textarea`
	background-color: var(--white);
	border: none;
	border-radius: 6px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
	color: var(--dark-gray);
	display: block;
	font-family: var(--font-main);
	height: 30vh;
	margin: 0.5em auto 1em;
	padding: 1em;
	text-align: start;
	width: 100%;

	::placeholder {
		color: var(--light-gray);
	}

	:focus {
		outline-color: var(--dark-gray);
	}
`

export default {
	AppContainer,
	AppContainer01,
	AppContainer0102,
	AppContainer040103,
	AppMain,
	AppH2,
	AppH2Blue,
	AppH2BlueMargin,
	Logo,
	AppAnchor,
	AppButton,
	AppDivCentered,
	AppForm,
	AppFormLabel,
	AppFormLabelBlue,
	AppFormPasswordToggle,
	AppFormInput,
	AppFormInputPassword,
	AppFormInputWhite,
	AppFormTextArea,
}
