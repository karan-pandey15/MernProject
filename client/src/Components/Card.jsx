import React ,{useEffect, useRef, useState}  from "react";
import Card from "react-bootstrap/Card";
import "../App.css"
import { useCart, useDispatchCart } from "./ContextReducer";


// import React, { useEffect, useState } from "react";
// const footItemdata = require("../cardData/addtocard2.json");
// const foodCategory = require("../cardData/addtocard_data.json");

// const catFoodData = require("../cardData/addtocard_data.json");

export default function Cards(props) {

  // try to fetch data through backend 

  // const [foodCat, setFoodCat] = useState([]);

  // const cardData = async ()=>{
  //    const res = await fetch("http://localhost:5000/fooddata",{
  //     method:"POST",
  //     headers:{
  //         'Content-Type' :'application/json'
  //     }
  // });
  //    const data = await res.json();
  //    setCardDatas(data)
  // }

  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty,setQty] = useState(1)
  const [size,setSize] = useState("")

  let finalPrice = qty * parseInt(options[size]);
  

  const handleAddTocart = async ()=>{


      await dispatch({type:"ADD" , id:props.foodItems.id, name: props.foodItems.name , img: props.foodItems.img ,  price: finalPrice, qty:qty,size:size })
      console.log(data)
  }

  // const handleCheckOut = ()=>{

  // }

  
  useEffect( ()=>{
    setSize(priceRef.current.value);
  },[])

  
 
  return (
    <>
      <Card  className=" d-inline-flex  justify-content-center m-3
       centerDiv "  style={{ width: "18rem" }}  
      >
        <Card.Img className="imgStyle "
          variant="top"
          src={props.foodItems.img}
        />
        <Card.Body>
          <Card.Title>{props.foodItems.name
          }</Card.Title>
          <Card.Text>{props.foodItems.description}</Card.Text>

          <div className="container w-100">
            <select className="m-2 h-100  bg-primary rounded p-1"
            onChange={(e)=> setQty(e.target.value)}
            > 
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-primary p-1 rounded" ref={priceRef}
             onChange={(e)=> setSize(e.target.value)}
            >
              {/* <option value="half">{props.options.half}</option>
              <option value="full">{props.options.full}</option>
               */}

               {
                priceOptions.map( (data)=>{
                  return <option key={data} value={data} >
                    {data}
                  </option>
                })
               }
            </select>

            <div className="d-inline h-100 fs-5 fw-bolder">₹{finalPrice}/-</div>
             
             <br /> <hr />

            <button className="btn btn-primary fw-bolder justify-center ms-2" onClick={handleAddTocart} >AddToCart</button>
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
}
