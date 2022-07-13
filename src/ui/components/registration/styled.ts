import styled from 'styled-components'

const Container = styled.div`
	min-height: 100vh;
	text-align: center;
`

const H2 = styled.h2`
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
	margin-bottom: 1em;
`

const Label = styled.label`
	color: #737380;
	display: block;
`

const Input = styled.input`
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
`

const DivSpace = styled.div`
	height: 20vh;
`

export default {
	Container,
	H2,
	Form,
	Label,
	Input,
	DivSpace,
}
