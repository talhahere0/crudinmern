import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './TopNavbar.css'
const TopNavbar = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    
    <Container>
    <Navbar.Brand ><Link className="HomeLink" to="/">MERN CRUD APPLICATION</Link></Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link > <Link className="HomeLink1" to="/EditDelete">All Users</Link></Nav.Link>
    {/* <Nav.Link > <Link className="HomeLink2" to="/Update">Edit User</Link></Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
      
 
</>
    )
}

export default TopNavbar
