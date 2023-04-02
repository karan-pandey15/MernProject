// import React, { useEffect, useState } from "react";

import React from 'react'
import "../App.css"
import Navbars from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../Components/Card'
import Carousal from '../Components/Carousal'
const footItemdata = require("../cardData/addtocard2.json");


export default function Home() {

  function foodCard(cardData){
    return(
      // <Cards className="centerDiv"
      //    key={cardData.id}
      //     CategoryName ={cardData.CategoryName}
      //     name={cardData.name}
      //     img={cardData.img}
      //     description = {cardData.description}
      //     options={cardData.options[0]}

      //  />

      <Cards 
          foodItems ={cardData}
          options={cardData.options[0]}
      />


    )
 }

  return (
    <>
        <div><Navbars /></div>
        <Carousal />
        <div className='centerCart'>
           {footItemdata.map((foodCard))}
        </div> 
        <div className='container p-5 ' >
        </div>
        <Footer />
    </>
  )
}

