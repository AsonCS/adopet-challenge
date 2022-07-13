import styled from 'styled-components'

import AppStyled from '../../styled'

const H2 = styled(AppStyled.AppH2Blue)`
	span {
		display: block;
		margin-bottom: 1em;
	}
`

const Form = styled.form`
	margin-bottom: 100px;
`

export default {
	H2,
	Form,
}
