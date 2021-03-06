import React, { useEffect, useState } from "react"



export function UserProfile () {
   const [data, setData] = useState()

   
   useEffect(()=>{
    fetch("http://localhost:5001/users")
    .then(response => response.json())
    .then(serverData => setData(serverData));
   },[])
    
    return (
        <div>
            <h2>{data?.users?.name}</h2>
            <h2>{data?.users?.id}</h2>

        </div>
    )
}