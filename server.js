import express from "express"
 import routes from "./Routersex/students.js"
import { connectDB } from "./connection/connection.js"

let app=express()
app.use(express.json())
app.use("/students",routes)
connectDB().then(()=>{
app.listen(3001,()=>console.log("server started at  3001"))}
).catch(err =>{
    console.log("erroe" ,err)

})

