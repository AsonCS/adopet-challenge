import styled from 'styled-components'

const H2 = styled.h2`
	color: var(--dark-gray);
	font-size: 1.5em;
	font-weight: 600;
	padding-bottom: 1em;
`

const UserImg = styled.img`
	display: block;
	margin: 0.5em auto;
	width: 5em;
`

const UserSpan = styled.span`
	color: var(--coral);
	display: block;
	font-size: 0.8em;
	font-weight: 400;
	margin-bottom: 0.5em;
	margin-top: 0.5em;
`

export default {
	H2,
	UserImg,
	UserSpan,
}
