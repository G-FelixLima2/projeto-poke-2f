import { Nav, Navbar, NavLink } from "react-bootstrap";

const Menu = () => {

    return (
        <div>
            <Navbar bg="light" expand='lg'>
                <Nav className="me-auto">
                    <Nav.Link href={"/"}>Pokemons</Nav.Link >
                    <Nav.Link href={"#"}>ViaCep</Nav.Link>
                </Nav>
            </Navbar>
        </div >
    )

}

export default Menu;