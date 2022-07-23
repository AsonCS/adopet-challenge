import styled from 'styled-components'

const H2 = styled.h2`
	color: var(--dark-gray);
	font-size: 1.5em;
	font-weight: 600;
	padding-bottom: 1em;
`

const UserImg = styled.img`
	border-radius: 5em;
	display: block;
	height: 5em;
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

	input[type='file'] {
		display: none;
	}
`

export default {
	H2,
	UserImg,
	UserSpan,
}
