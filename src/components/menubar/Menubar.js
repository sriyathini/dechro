import React from 'react';
import './Menubar.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Images/logo.png";

function Menubar() {
    return (
        <div className='Navbar'>
            <Navbar expand="md">
                <Navbar.Brand href="/" className='ms-5'>
                <img src={logo}  alt="Dechro Logo" className="navbar-logo" style={{ height: '50px', width: 'auto' }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-5 ms-auto">
                        <NavDropdown title="Our Approach" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Erp">ERP & CRM Software Development</NavDropdown.Item>
                            <NavDropdown.Item href="/Website">
                                Website Development (Static & Dynamic)
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Meet Dechro" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="/Team">Team</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/ContactForm">Write To Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Menubar;
