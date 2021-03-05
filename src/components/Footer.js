import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar color="light" light expand='md'>
                <NavbarBrand><img className='logo' src='/assets/images/logo-draft.svg' alt='logo'/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>Test</NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )

}