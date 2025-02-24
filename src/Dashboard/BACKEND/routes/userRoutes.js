const express = require("express");
const User = require("../models/user");
const router = express.Router();

// create user

router.post("/",async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const user = new User({name,email,password});
        await user.save();
        res.status(201).json(user); 
    } catch(error){
        res.status(400).json({error:error.message});
    }
});

//read users
router.get("/",async(req,res)=>{
    const users = await User.find();
    res.json(users);
});

// update
router.put("/:id",async(req,res)=>{
    try {
        const user = new User.findByIdAndUpdate(req.params.id , req.body,{new:true});
        await user.save();  
    } catch(error){
        res.status(400).json({error:error.message});
    }
});

// delete
router.delete("/:id",async(req,res)=>{
    try {
        const user = new User.findByIdAndDelete(req.params.id);
        res.json({message:"user deleted"})  
    } catch(error){
        res.status(400).json({error:error.message});
    }
});

module.exports = router;