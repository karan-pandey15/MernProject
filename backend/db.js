const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://addtocardmernprj:pandey-15@cluster0.clye224.mongodb.net/addtocardmernprj?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
const mongoDB =  async () =>
{   await  mongoose.connect(mongoUri, {useNewUrlParser: true}, (err,res)=>{
         if(err) console.log("connection failed")
         else{
            console.log("connection successFull.....");
            const fetch_data =  mongoose.connection.db.collection("food_items");

            fetch_data.find({}).toArray(function( err,data){
                const foodCategory =  mongoose.connection.db.collection("food_category")

                foodCategory.find({}).toArray(function(err,catData){
                    if(err){
                        console.log(err)
                    }
                    else{
                        global_food_items = data;
                        global_FoodCategory = catData;
                        // console.log(global_food_items)
                    }
                })
            })
         }
    })    
}
module.exports = mongoDB;