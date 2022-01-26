import React, { useEffect, useState } from "react"

export function CreatePosts() {
    const [data, setData] = useState()

    //    useEffect(()=>{
    //     fetch("http://localhost:5001/posts")
    //     .then(response => response.json())
    //     .then(serverData => setData(serverData));
    //    },[])

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(data)
    }
    return (
        <><div>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type= "text"></input>
                <label>
                    What are you thinking about?
                </label>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
            <div>
                <h2>{data && data[1]?.id}</h2>
                <h2>{data && data[1]?.name}</h2>
                <h2>{data && data[1]?.message}</h2>
            </div></>
    )
}