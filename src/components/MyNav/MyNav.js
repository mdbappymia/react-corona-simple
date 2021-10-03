import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MyNav.css";

const MyNav = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          Country
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-item" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/corona">
              Corona Update
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
