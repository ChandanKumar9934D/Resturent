const express=require("express")
require('dotenv').config()
const app=express()
require('./db/db')
const userRoute=require("./routers/userRouter")
const cors=require('cors')
const PORT=3000
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use('/api',userRoute)




app.listen(process.env.PORT||3000,()=>{
    console.log('server is start');
    
})
