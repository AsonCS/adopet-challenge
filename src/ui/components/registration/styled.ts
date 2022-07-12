import styled from 'styled-components'

const Container = styled.div`
	min-height: 100vh;
	text-align: center;
`

const H2 = styled.h2`
	color: #3772ff;
	font-size: 1em;
	font-style: normal;
	font-weight: 400;
	margin: 1.5em auto;
	width: 80vw;

	span {
		display: block;
		margin-bottom: 1em;
	}
`

const Form = styled.form`
	margin-bottom: 100px;
`

export default {
	Container,
	H2,
	Form,
}
