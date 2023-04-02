const express = require("express")
const router =  express.Router();
const Order = require("../models/Orders");

router.post("/orderData",async (req,res)=>{
    let data = req.body.order_data
    await data.splice(0,0,{order_date: req.body.order_date})

    //email 

    let eld = await Order.findOne({'email': req.body.email})
    console.log(eld)

    if(eld === null){
        try{
            await Order.create({
                email: req.body.email,
                order_data : [data]
            }).then( ()=>{
                res.json({
                    success:true
                })
            })
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},
                {
                    $push: {order_data:data}
                }).then( ()=>{
                    res.json({success:true})
                })
        }catch(err){
            console.log(err);
            res.send("server error" ,err.message)
        }
    }
})
 

module.exports = router