import styled from 'styled-components'

import { forma01, forma02, forma03, draw02 } from '../images'

const AppContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
	width: 100vw;
`

const AppMain = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-top: 8em;
`

const Forma01 = styled.div`
	background-image: url(${forma01});
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100vw;
`

const Forma02 = styled.div`
	background-image: url(${forma02});
	background-position: right;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100vw;
`

const Forma03 = styled.div`
	background-image: url(${forma03});
	background-position: left;
	background-position-y: 420px;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100vw;
`

const Forma04 = styled.div`
	background-image: url(${draw02});
	background-position: right;
	background-position-y: top;
	background-repeat: no-repeat;
	min-height: 100vh;
	width: 100vw;
`

const Logo = styled.img`
	height: 3em;
`

const AppAnchor = styled.a`
	background-color: #fc7071;
	border-radius: 0.5em;
	color: #ffffff;
	margin: 1em auto 0;
	min-width: 50vw;
	padding: 1em;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}
`

const AppButton = styled.button`
	background-color: #fc7071;
	border-radius: 0.5em;
	color: #ffffff;
	margin: 1em auto 0;
	min-width: 50vw;
	padding: 1em;
`

const AppFormLabel = styled.label`
	color: #737380;
	display: block;

	img {
		float: right;
		margin-right: 1.5em;
		margin-top: -3em;
		padding: 0.5em;
		position: relative;
	}
`

const AppFormInput = styled.input`
	background-color: #f6f6f6;
	border: none;
	border-radius: 6px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
	color: #737380;
	display: block;
	height: 3em;
	margin: auto;
	margin-bottom: 1em;
	text-align: center;
	width: 90vw;

	::placeholder {
		color: #bcbcbc;
	}

	:focus {
		outline-color: #737380;
	}
`

export default {
	AppContent,
	AppMain,
	Forma01,
	Forma02,
	Forma03,
	Forma04,
	Logo,
	AppAnchor,
	AppButton,
	AppFormLabel,
	AppFormInput,
}
