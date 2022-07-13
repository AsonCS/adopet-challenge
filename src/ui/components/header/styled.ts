import styled from 'styled-components'

const Header = styled.header`
	align-items: center;
	display: flex;
	gap: 4em;
	justify-content: space-between;
	padding: 2em 3em 0em 3em;

	@media (min-width: 768px) {
		padding: 3em 3em 0em 3em;
	}

	@media (min-width: 1440px) {
		padding: 3em 10em 0em 10em;
	}
`

const Logo = styled.img`
	display: none;

	@media (min-width: 768px) {
		display: block;
		height: 2em;
	}
`

const Nav = styled.nav`
	align-items: center;
	display: flex;
	flex-grow: 1;
	gap: 4em;
`

const NavIcon = styled.img`
	width: 24px;
`

const UserImg = styled.img`
	height: 2.5em;

	@media (min-width: 768px) {
		height: 3em;
	}

	@media (min-width: 1440px) {
		height: 4em;
	}
`

export default {
	Header,
	Logo,
	Nav,
	NavIcon,
	UserImg,
}
