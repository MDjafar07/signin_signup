const express = require("express");
const app = express();
const cors=require("cors")
// const noteRouter=require("./routes/noteRoutes.js");
// const userRouter = require("./routes/userRoutes");
const indexRouters = require("./routes/index.js");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./configs/db.js");
// const userRouter = require("./routes/userRoutes.js");

app.use(express.json());
app.use(cors())
const port = process.env.PORT || 8001;
//connect MongoDB
connectDB();

app.use(indexRouters);
// app.use('/note',noteRouter);
// app.use('/users',userRouter)

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, () => {
  console.log(`server is connected ${process.env.PORT}`);
});
