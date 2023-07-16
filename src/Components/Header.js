import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import useAuth from '../Hooks/useAuth';

export default function Header() {
    const { user, logout } = useAuth();

    const logoutHandler = () => {
        logout();
    }

    return (
        <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/products">Make Up</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link href="/productTypes">Types</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <b>{ user.username } { ' ' }</b>
                        <Button variant="light" size='sm' onClick={ logoutHandler }>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /></svg>
                        </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}