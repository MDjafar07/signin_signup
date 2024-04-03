const express=require("express");
const router=express.Router();
const noteRouter=require("./noteRoutes.js");
const userRouter = require("./userRoutes.js");


router.use('/user',userRouter);
// router.use("/signin",noteRouter);
router.use('/note',noteRouter)

module.exports=router;
