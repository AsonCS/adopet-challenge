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
	margin: 2.5em auto;
	width: 80vw;

	span {
		display: block;
		margin-bottom: 1em;
	}
`

const Form = styled.form`
	margin-bottom: 300px;
`

const ForgotLabel = styled.label`
	color: #fc7071;
	display: block;
	font-size: 0.8em;
	font-weight: 400;
	margin-bottom: 1.2em;
	text-decoration: underline;
`

export default {
	Container,
	H2,
	Form,
	ForgotLabel,
}
