import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css"
export default function Carousal() {
  return (
    <>
      <Carousel fade>
        {/* <Carousel.Item id="carousel" style={{objectFit: "contain !important"}} >
          <img
            className="d-block w-100"
            src="https://tse2.mm.bing.net/th?id=OIP.FAP2IMFULboRlFlZTPrEVQHaE8&pid=Api&P=0"
            alt="First slide"
          />
           */}

           <Carousel.Item id="carousel" style={{objectFit: "contain !important"}} >
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyJTIwJTIwaGQlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          
          {/*<Carousel.Caption>
             <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success " className="text-white bg-success" >Search</Button>
            </Form> 
          </Carousel.Caption>
          */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}
