import React, { useEffect, useState } from "react"

export function Posts () {
   const [data, setData] = useState()
   
   useEffect(()=>{
    fetch("http://localhost:5001/posts")
    .then(response => response.json())
    .then(serverData => setData(serverData));
   },[])
    




    return (
        <><div>
            <h2>{data && data[0]?.id}</h2>
            <h2>{data && data[0]?.name}</h2>
            <h2>{data && data[0]?.message}</h2>
        </div>
        <div>
            <h2>{data && data[1]?.id}</h2>
            <h2>{data && data[1]?.name}</h2>
            <h2>{data && data[1]?.message}</h2>
        </div></>
    )
}