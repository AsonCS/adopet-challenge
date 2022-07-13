import styled from 'styled-components'

import { forma01, forma02, icMessage } from '../../images'
import AppStyled from '../../styled'

const Container = styled(AppStyled.AppContainer01)`
	@media (min-width: 768px) {
		background-image: url(${forma01});
		background-position: left top;
		background-size: 70vw;
	}

	@media (min-width: 1440px) {
		background-image: url(${forma01}), url(${forma02});
		background-position: left top, right center;
		background-size: 40vw, 7vw;
	}
`

const H2Span = styled.span`
	display: inline;

	@media (min-width: 768px) {
		display: block;
	}

	@media (min-width: 1440px) {
		display: inline;
	}
`

const ContainerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (min-width: 768px) {
		padding: 0 5vw 3vh;
	}

	@media (min-width: 1440px) {
		padding: 0 10vw 7vh;
	}
`

const Figure = styled.figure`
	background-color: var(--alpha-gray);
	display: block;
	display: flex;
	margin-top: 1em;
	width: 100vw;

	@media (min-width: 768px) {
		width: 44vw;
	}

	@media (min-width: 1440px) {
		width: 25vw;
	}
`

const Img = styled.img`
	padding: 1.5em;
`

const Figcaption = styled.figcaption`
	color: var(--dark-gray);
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
	color: var(--blue);
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
	cursor: pointer;
	font-size: 0.7em;
	font-weight: 400;
	margin-bottom: 2em;
	margin-top: 0.5em;
	padding-left: 2.5em;
	display: block;
`

export default {
	Container,
	H2Span,
	ContainerList,
	Figure,
	Img,
	Figcaption,
	LabelInfos,
	Span,
	SpanDescription,
	SpanLocation,
	SpanContact,
}
