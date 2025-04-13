import React, { createContext, useEffect, useState } from 'react'
const userContext=createContext({
  User:'',
  setUser:()=>{}
})
function ContextProvider({children}) {
  const [User,setUser]=useState(null)

  return (
    <userContext.Provider value={{User,setUser}}>
      {children}
      
    </userContext.Provider>
  )
}

export  {userContext,ContextProvider}
