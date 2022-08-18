import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/AuthRoute.js"
import usersRoute from "./routes/UsersRoute.js"
import papersRoute from "./routes/PapersRoute.js"
import requestsRoute from "./routes/RequestsRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors";


const app = express()

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ratemyresearch");
        console.log("connected to db")
    } catch (error) {
        throw error
    }
}

//middlewares
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }))

app.use(cookieParser())
app.use(express.json());

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/papers", papersRoute)
app.use("/requests", requestsRoute)

app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMsg = err.message || "Something went wrong."
    return res.send({
        success: false,
        status: errStatus,
        message: errMsg
      });
})

app.listen(3001, () => {
    connectDB()
    console.log(("connected to server"));
})