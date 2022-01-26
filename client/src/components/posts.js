import React, { useEffect, useState } from "react"

export function UserPosts () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/posts")
        .then(async (response) => {
            setPosts(await response.json())
        })
    }, [])

    function onSubmit(){
        let messageText = document.querySelector("#messageInput").value;
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messageText })
        };
        fetch("http://localhost:5001/user-post", requestOptions)
        .then(async (response)=> {
            setPosts(await response.json())
        })
        .catch((e) => {console.error(e)})
    }

    return (
        <><form>
            <label>Message</label>
            <input id="messageInput" type="text"></input>
            <button type="button" onClick={onSubmit} onSubmit={onSubmit}>Submit</button>

        </form>
        <br />
        <div>
            {posts.map((p) => {
                return (
                    <div key={p.id}>
                        {p.messageText}
                    </div>
                )
            })}
        </div></>
    )
}
