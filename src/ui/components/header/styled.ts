import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	gap: 4em;
	justify-content: space-between;
	padding: 3em 2em 0em 3em;
`

const Nav = styled.nav`
	align-items: center;
	display: flex;
	gap: 4em;
`

const NavIcon = styled.img`
	width: 24px;
`

export default {
	Header,
	Nav,
	NavIcon,
}
