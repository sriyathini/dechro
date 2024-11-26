import './Menubar.css';
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

function Menubar(){
    return (
        <div>
            <Navbar expand="md">
                <Navbar.Brand href="/" className='ms-5'>
                <img
                src="/img/logo.svg"
                className="d-inline-block align-center"
                alt="logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-5 ms-auto">
                    <NavDropdown title="Our Approach" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">ERP & CRM Software Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Website Development(Static & Dynamic)
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title="Meet Dechro" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Team
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="#home">Write To Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Menubar;