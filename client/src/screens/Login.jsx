import React from 'react'
import Footer from '../Components/Footer'
import Navbars from '../Components/Navbar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {json,  useNavigate } from 'react-router-dom';


export default  function Login() {
     const navigate = useNavigate();
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');

     async function onSub(e){
      e.preventDefault();
      const res = await fetch("/loginuser",{
        method:"POST",
        headers: {

          "Content-Type": "application/json",
        },
        body: JSON.stringify({
             email,
             password
        })
      })

      const data =  await res.json();

      if(res.status===400 || !data){
        window.alert("Invalid creedentaials")
      }
      else{
        
        window.alert("login successfull");
        localStorage.setItem("authToken",json.authToken);

        console.log(localStorage.getItem("authToken"));
        localStorage.setItem("userEmail",email)
        navigate("/");
      }
     }


     const emailset =(e) =>{
         setEmail(e.target.value)
     }

     const passwordset =(e) =>{
      setPassword(e.target.value)
  }
  

  return (
    <>
       <Navbars />
    <div className='container' >
    <Form className='bg-success my-5 p-4 rounded-4 ' >
      <Form.Group   className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={emailset}  type="email" value={email} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={passwordset} value={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSub} >
        Submit
      </Button>
    </Form>
    
    </div>
       <Footer /> 
    </>
  )
}
