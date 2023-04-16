import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import cors from 'cors'
//config env
dotenv.config()

//connecting to mongodb database
connectDB()

//rest object
const app = express()


//MIDDLEWARES
//we can send and recieve JSON data, earlier we used body parser
app.use(express.json())
//morgan middleware
app.use(morgan('dev'))
//cors middleware
app.use(cors())

//routes
app.use("/api/v1/auth",authRoute)

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to App</h1>")
})

//PORT
const PORT = process.env.PORT || 8080

//LISTENING
app.listen(PORT,()=>{
    console.log(`Server Running on PORT:${PORT}`)
})