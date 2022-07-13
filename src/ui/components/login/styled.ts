import styled from 'styled-components'

import AppStyled from '../../styled'

const H2 = styled(AppStyled.AppH2Blue)`
	margin: 2.5em auto;
`

const Form = styled.form`
	margin-bottom: 300px;
`

const ForgotLabel = styled.label`
	color: var(--coral);
	display: block;
	font-size: 0.8em;
	font-weight: 400;
	margin-bottom: 1.2em;
	text-decoration: underline;
`

export default {
	H2,
	Form,
	ForgotLabel,
}
