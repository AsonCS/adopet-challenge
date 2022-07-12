import styled from 'styled-components'

import { forma01, forma02, forma03 } from '../images'

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
	margin-top: 4em;
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
	background-position-y: 350px;
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

export default {
	AppContent,
	AppMain,
	Forma01,
	Forma02,
	Forma03,
	Logo,
	AppAnchor,
	AppButton
}
