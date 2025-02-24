const mongoose = require("mongoose");

// create schema - type declare

const userSchema = mongoose.Schema(
    {
        name:{type:String, require:true},
        email:{type:String, require:true,unique:true},
        password:{type:String, require:true},
    },
    {timeStamp:true}
);
module.exports = mongoose.model("ngoData",userSchema);