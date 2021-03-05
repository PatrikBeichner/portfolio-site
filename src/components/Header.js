import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
                <Navbar light  expand="sm">
                    <div className="container">
                        <NavbarBrand className="mr-2" href="/"><img className="flag" src="/assets/images/flag.png"  alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar >
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa-fa-home fa-lg" /> home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa-fa-list fa-lg" /> about us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tours">
                                        <i className="fa-fa-info fa-lg" /> tours
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/rentals">
                                        <i className="fa-fa-address-card fa-lg" /> rentals
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        // <React.Fragment>
        //     <Navbar color="light" light expand='md'>
        //     <NavbarBrand><img className='logo' src='/assets/images/logo-draft.svg' alt='logo'/></NavbarBrand>
        //         <NavbarToggler onClick={toggle} />
        //         <Collapse isOpen={isOpen} navbar>
        //             <Nav className='me-auto' navbar>
        //                 <NavItem>Test</NavItem>
        //             </Nav>
        //         </Collapse>
        //     </Navbar>
        // </React.Fragment>
    )

}

export default Header;