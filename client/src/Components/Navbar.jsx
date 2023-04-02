import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from "react-bootstrap/Badge"
import "../App.css"
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import "../App.css"

export default function Navbars() {
  let data = useCart();
  const [cartView,setCartView] = useState(false);

  return (
    <>
        <Navbar  className='bgColor' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bolder fs-1 fst-italic' >MERN-Prj</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link to="/" className='text-white' >Home</Nav.Link>
             */}
            <Link className='linkStyle'  to="/"> Home</Link>

            {
              (localStorage.getItem("authtoken")) ? 
              <Link className='linkStyle' to="/aboudCard" >MyOrders</Link> 
              : ""
            }

          </Nav>

          {/* <div className='d-flex justify-content-center' >
           */}
          <Link className='linkStyle bg-white text-success p-2 rounded fs-5 ' to="/signup" >SignUp</Link>
          
          <Link className='linkStyle bg-white text-primary p-2 rounded fs-5 ' to="/login">
           login
          </Link>

          {/* <Link className='linkStyle bg-white text-danger p-2 rounded fs-5 ' to="/cartPage" >
           myCart
          </Link> */}
          

           <div  className='linkStyle bg-white text-danger  p-2 rounded fs-5  cp ' to="/aboudCard"  onClick={()=>{setCartView(true)}} >
                MyCart
                <Badge pill bg="danger"  >{data.length}</Badge>
           </div>

           
           {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
          {/* </div> */}
          {/* {cartView? <Modal onClose={()=>setCartView(false)} ><Cart /> </Modal> : null} */}

          {/* <Link className='linkStyle btn btn-primary text-outline-success' to="/aboudCard">myCart</Link>
             */}          
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}
