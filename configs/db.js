const mongoose=require("mongoose");
require("dotenv").config()

const connectDB=async()=>
{
    try{
         const connectDatabase=await mongoose.connect(process.env.URL_Mongos_Local);
    
         console.log("MongoDB is Connected");
}catch(error)
    {
        console.log("Error",error);
    }
}

module.exports=connectDB;