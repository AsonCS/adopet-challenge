import styled from 'styled-components'

import AppStyled from '../../styled'

const Container = styled.div`
	background: var(--blue);
	color: var(--white);
`

const H1 = styled.h1`
	font-family: var(--font-secondary);
	font-size: 2em;
	font-style: normal;
	font-weight: 500;
	margin-top: 1em;
`

const SpanPortrait = styled.span`
	display: inline;

	@media (min-width: 768px) {
		display: none;
	}
`

const SpanLandscape = styled.span`
	display: none;

	@media (min-width: 768px) {
		display: block;
		margin: 0 auto;
		width: 488px;
	}
`

const Anchor = styled(AppStyled.AppAnchor)`
	@media (min-width: 768px) {
		min-width: 362px;
	}
`

const DivDraw = styled.div`
	height: 295px;
	margin: auto;
	margin-top: 1.5em;
	width: 70%;
`

const Draw = styled.img`
	margin: 0 auto;
`

export default {
	Container,
	H1,
	SpanPortrait,
	SpanLandscape,
	Anchor,
	DivDraw,
	Draw,
}
