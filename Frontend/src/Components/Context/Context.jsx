import React, { createContext, useEffect, useState } from 'react'
const userContext=createContext({
  User:'',
  setUser:()=>{},
  userId:'',
  setUserId:()=>{},
  setUserType:()=>{},
  userType:''
  

})
function ContextProvider({children}) {
  const [User,setUser]=useState(null)
  const[userId,setUserId]=useState('')
  const[userType,setUserType]=useState()
  

  return (
    <userContext.Provider value={{User,setUser,userId,setUserId,userType,setUserType}}>
      {children}
      
    </userContext.Provider>
  )
}

export  {userContext,ContextProvider}
