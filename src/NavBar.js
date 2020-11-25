import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


function NavBar() {

  return (
    <div>
      <Navbar expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/help">Help</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/about" >About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;