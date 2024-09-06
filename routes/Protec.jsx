import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protec({children}) {

const user = false

if(!user){
    console.log("gvhbhbhbhbhbhb");
    
   
return <Navigate to ="/login"/>

}

return children

}
