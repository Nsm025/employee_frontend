import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
 } from './NavBarElements';
const NavBar  = () => {
  return (
    <>
     <Nav>
        <NavLink to="/home">
        <img style={{ maxWidth: '100%', maxHeight: '100%'}} src={require('../../images/logo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/App" activeStyle>
                Manager
            </NavLink>
            <NavLink to="/App1" activeStyle>
               Employee
            </NavLink>
        </NavMenu>
     </Nav>
    </>
  )
}

export default NavBar;
