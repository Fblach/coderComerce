import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../ccLogo.png';

function NavBar() {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Image src={logo} width="30" height="30" className="align-top" alt="" roundedCircle></Image>
            <Navbar.Brand href="#home">Coffee Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ground</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Grain</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nespresso Capsules</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Dolca Capsules</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="light">Search</Button>
            </Form>
        </Navbar>
    )}

export default NavBar;