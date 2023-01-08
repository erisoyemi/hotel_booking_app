import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";


const app = express()
dotenv.config()

mongoose.set("strictQuery", false);

const connect = async ()=>{
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongodb")
    } catch (error) {
      throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongodb disconnected")
})
mongoose.connection.on("connected", () => {
  console.log("Mongodb connected");
});

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500
  const errMessage = err.message || "Something went wrong"
  return res.status(500).json({
    success:false,
    status:errStatus,
    message:errMessage,
    stack:err.stack,
  })
});

app.get("/", (req,res)=>{
    res.send("hello")
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend")
});