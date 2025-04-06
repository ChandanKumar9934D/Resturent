const User=require("../db/models/User.model")
const register=async(req,res)=>{
    if(req.body.userName=='' || req.body.password=='' || req.body.email=='' ){
        res.status(400).json({
            response:'enter data fully'
        })
    }
    else{
    console.log(req.body);
    const userCreate=new User({
        
    })

    res.status(201).json({
        response:'data send seccessfullu'
    })}
 
    
}
module.exports=register