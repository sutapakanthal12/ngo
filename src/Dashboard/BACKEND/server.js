const express=require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./config/db");
const userRoutes = require("./routes/userRoutes");

connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);
const PORT =process.env.PORT || 8000

app.get("/getData",(req,res)=>{
    res.send("hello");
});

app.listen(PORT,()=>console.log("server is running port 8000"));