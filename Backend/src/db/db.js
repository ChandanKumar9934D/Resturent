const mongoose=require('mongoose')
mongoose.connect(`${process.env.DBCONNECT}`)
.then(()=>{
    console.log('db is connected');
    
}).catch((error)=>{
    console.log(error.message);
    
})