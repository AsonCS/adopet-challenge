import styled from 'styled-components'

import AppStyled from '../../styled'

const Container = styled(AppStyled.AppContainer)`
	background: #3772ff;
	color: #ffffff;
`

const H1 = styled.h1`
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 2em;
	font-style: normal;
	font-weight: 500;
	margin-top: 1em;
`

const DivDraw = styled.div`
	height: 295px;
	margin: auto;
	margin-top: 1.5em;
	width: 70%;
`

export default {
	Container,
	H1,
	DivDraw,
}
