import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbars from '../Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [credenditals,setCredenitals] = useState({
        name:"",
        email:"",
        password:"",
        location:""
    })

    
    const handleSubmit = async (e)=>{

        e.preventDefault() // syntetic event 
        // const {name,email,password,location} = credenditals
        const response = await fetch("http://localhost:3000/createuser",{
            method:"POST",
            headers:{
                'Content-Type' :'application/json'
            },
            body:JSON.stringify({name:credenditals.name,email:credenditals.email,password:credenditals.password,location:credenditals.location})
        })
        const data = await response.json()
        console.log(data);

        if(!data){
            window.alert("Please full fill all the field")
        }
        else{
            window.alert("Register successFull")
        }
    }

    const datasub = (event)=>{
        // const {name,value} = e.target;
        setCredenitals({...credenditals,[event.target.name]:event.target.value})
    }


  return (
    <>
    <Navbars />
       <div className='container my-5'>
    <Form className='bg-success rounded p-5' onSubmit={handleSubmit} >
    <Form.Group className="mb-3" >
        <Form.Label className='text-white fw-bolder fs-4' >Enter Your Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter Your Name" name='name'  onChange={datasub}  value={credenditals.name} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label className='text-white fw-bolder fs-4' >Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" name='email' onChange={datasub}  value={credenditals.email}  />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label className='text-white fw-bolder fs-4' >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={datasub}  value={credenditals.password}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='text-white fw-bolder fs-4' >Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Location" name='location' onChange={datasub} value={credenditals.location}   />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Link to="/login" className=' mx-4 btn btn-outline-danger text-white ' > Already a user.</Link>
    </Form>
       </div>
       <div className='container p-5' ></div>
    <Footer />
    </>
  )
}
