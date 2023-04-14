import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import {useState} from "react"
import CartRSide from './CartRSide';
import ProtectedRoutes from './ProtectedRoutes';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

const NavSection = () => {
    const [show, setShow] =useState(false)
    const handleClose = () => {
      setShow(false)
    }
    const token = localStorage.getItem("token")
    return (
      <div>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">JAAG-Commerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/purchases">Compras</Nav.Link>
                    <Nav.Link 
                      onClick={()=> setShow(true) }>Carrito</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <CartRSide show={show} handleClose={handleClose}/>
      </div>
      
    );
};

export default NavSection;
  