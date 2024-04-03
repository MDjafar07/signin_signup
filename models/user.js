const mongose=require("mongoose");
const userSchema=new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        smallcase:true,
        // validate:validator.isEmail,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:String
    },
    location:{
        type:String,
        default:"India",
    },
},
{timestamps:true,versionKey:false}
);





module.exports=mongose.model("User",userSchema)