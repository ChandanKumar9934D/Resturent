import React, { createContext, useEffect, useState } from 'react'
const userContext=createContext({
  User:'',
  setUser:()=>{},
  userId:'',
  setUserId:()=>{}

})
function ContextProvider({children}) {
  const [User,setUser]=useState(null)
  const[userId,setUserId]=useState('')
  

  return (
    <userContext.Provider value={{User,setUser,userId,setUserId}}>
      {children}
      
    </userContext.Provider>
  )
}

export  {userContext,ContextProvider}
