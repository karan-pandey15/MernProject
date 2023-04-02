const express = require("express")
const app = express();
const PORT = 5000;
const mongoDb = require("./db")
mongoDb();

const path = require("path")
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000/',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

require("./db")
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Origin,http://localhost:5000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With , Content-Type, Accept"
//     );
//     next();
// })

// app.use("/api" ,require("./Routes/CreateUser") )
app.use(express.json());
app.use(require("./Routes/CreateUser"));
app.use(require("./Routes/Displaydata"));
app.use(require("./Routes/OrderData"));
// app.use(require("./Routes/OrderData"));

app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*", function(req,res){
     res.sendFile(path.join(__dirname,"../client/build/index.html"))
});

app.get("/",(req,res)=>{
    res.end("Hello form the backend______");
})

app.listen(PORT,()=>{
    console.log("listening to port ",PORT)
});