
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import { BrowserRouter as Main , Routes, Route } from "react-router-dom";
import Signup from './screens/Signup';
import Login from './screens/Login';
import { CartProvider } from './Components/ContextReducer';
import Cart from './screens/Cart';

export default function App() {
  return (
    <>
       <CartProvider>
       <Main>
          <Routes>
              <Route exact path ="/" element={<Home />} />
              <Route exact path ="/cartPage" element={<Cart />} />    
              <Route exact path ="/signup" element={<Signup />} />

              <Route exact path ="/login" element={<Login />} />
          </Routes>
       </Main>
       </CartProvider>
    </>
  )
}

