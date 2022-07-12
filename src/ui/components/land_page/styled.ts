import styled from 'styled-components'

const Container = styled.div`
	background: #3772ff;
	color: #ffffff;
	min-height: 100vh;
	text-align: center;
`

const H1 = styled.h1`
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 2em;
	font-style: normal;
	font-weight: 500;
	margin-top: 1em;
`

const H2 = styled.h2`
	font-size: 1em;
	font-style: normal;
	font-weight: 400;
	margin: 1.5em auto;
	width: 60vw;
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
	H2,
	DivDraw,
}
