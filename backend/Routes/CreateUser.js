const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Secret_key = "ADFDFDAFERER343ERER34FER3RFER334343R3EF";


app.use(express.json())


router.post("/createuser", async (req,res)=>{

    const { name, email,  password, location} = req.body;

    if(!name || !email || !password || !location){
        return res.status(422).json({
           error: "please full-fill all the field",
        })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
          return res.status(422).json({ error: "user already exist" });
        }
        const user = new User({ name, email,  password, location });
    
        const userRegister = await user.save();
        if (userRegister) {
          return res.status(201).json({ message: "user Registered successFully" });
        } else {
          return res.status(421).json({ error: "some error occurs" });
        }
      } catch (err) {
        console.log(err);
      }
    });



router.post("/loginuser", async (req,res)=>{
    try{
        const {email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                 error: "please fill the  password and email .....",
               });
             }

        const userData =  await User.findOne({ email: email });

        if(userData){
            const isMatch = await bcrypt.compare(password,userData.password);

            if(!isMatch){
                res.status(400).json({error:"Invalid credientials"})
            }   
            else{
                const data = {
                    user:{
                        id:userData.id
                    }
                }
                const authToken = jwt.sign(data,Secret_key)   
                const karan = res.cookie("authToken",authToken) 
                

                res.status(200).json({message:"user Signin suuccessFully...",authToken:authToken})
                ;
                console.log(req.body);
                console.log(authToken)
            }   
        }else{
     return res.status(400).json({error:"user invalid credientals..."})   
        }
        // if(userData.password != password) {
        //     console.log("invalid details")
        // }
        
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;
