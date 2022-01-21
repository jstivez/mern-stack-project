import React, { useEffect, useState } from "react"

export function UserProfile () {
   const [data, setData] = useState({name:""})
   
   useEffect(()=>{
    fetch("http://localhost:5001")
    .then(response => response.json())
    .then(serverData => setData(serverData));
   },[])
    




    return (
        <div>
            <h2>{data?.name}</h2>
            <h2>{data?.status}</h2>
        </div>
    )
}