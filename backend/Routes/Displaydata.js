const express = require("express");
const router = express.Router();

router.post("/fooddata", (req,res)=>{
    try{
        res.send([global_food_items,global_FoodCategory])
        console.log(global_food_items)
    }catch(err){
        res.send("server error.......");
        console.log("AXIOS ERROR:", err);
    }
})

module.exports = router;