import {useState,useEffect} from "react"
import {Navbar, Container, Nav} from 'react-bootstrap'

import {navLinks} from '../data/index'
import {NavLink, useNavigate} from "react-router-dom"


const Navbars = () => {
  let navigate = useNavigate();

  return (
   <div>
     <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='fs-3 fw-bold text-white'>Elvira</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) =>
                    (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}
                    </NavLink>

                  </div>
                );
              })}
            </Nav>

            {/* <div className='text-center'>
              <button className='btn rounded-10' style={{ backgroundColor: '#ededed', color: '#144458' }} onClick={() => navigate("/Login")}>Login Admin</button>
            </div> */}
            {/* className="btn btn-lg rounded-1 me-2"
            style={{ backgroundColor: '#144458', color: '#ffff' }} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

   </div>
  );
};

export default Navbars;