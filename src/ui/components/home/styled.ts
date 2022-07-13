import styled from 'styled-components'

import { icMessage } from '../../images'
import AppStyled from '../../styled'

const H2 = styled(AppStyled.AppH2Blue)`
	margin: 0 auto;
	margin-bottom: 1em;
`

const Figure = styled.figure`
	background-color: #33333311;
	display: block;
	display: flex;
	margin-top: 1em;
	width: 100vw;
`

const Img = styled.img`
	padding: 1.5em;
`

const Figcaption = styled.figcaption`
	color: #737380;
	display: flex;
	flex-direction: column;
	font-size: 0.9em;
	font-weight: 400;
	justify-content: space-between;
	text-align: start;
`

const LabelInfos = styled.label`
	flex-grow: 1;
`

const Span = styled.span`
	color: #3772ff;
	display: block;
	font-weight: 600;
	margin-bottom: 0.5em;
	margin-top: 1em;
`

const SpanDescription = styled.span`
	display: block;
	margin-bottom: -0.3em;
`

const SpanLocation = styled.span`
	display: block;
	font-size: 0.8em;
`

const SpanContact = styled.span`
	background-image: url(${icMessage});
	background-repeat: no-repeat;
	font-size: 0.7em;
	font-weight: 400;
	margin-bottom: 2em;
	margin-top: 0.5em;
	padding-left: 2.5em;
	display: block;
`

export default {
	H2,
	Figure,
	Img,
	Figcaption,
	LabelInfos,
	Span,
	SpanDescription,
	SpanLocation,
	SpanContact,
}
