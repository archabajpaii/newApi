const connectDB = require("./database/dbConnection");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const userRouter = require("./routes/userRoutes");
const empRouter = require("./routes/empRoutes");
const adminRouter=require("./routes/adminRoutes");


const express = require("express");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/newapi/users", userRouter);
app.use("/newapi/emp", empRouter);
app.use("/newapi/admin",adminRouter);



app.use(errorHandler);
app.listen(port, () => {
  console.log("server running on port", port);
});
