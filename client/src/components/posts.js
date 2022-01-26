import React, { createElement, useEffect, useState } from "react"

export function UserPosts () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/posts")
        .then(async (response) => {
            setPosts(await response.json())
        })
    }, [])

    function onDelete(){
        let messageText = document.querySelector("#messageInput").value;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messageText })
        };
        fetch("http://localhost:5001/user-post", requestOptions)
        .then(async (response)=> {
            setPosts(await response.json())
        })
        .catch((e) => {console.error(e)})
    }

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

        {posts.map((p) => {
            return (
                p.id ,p.messageText
            )
        })}



        let node= document.createElement("div");
        node.classList.add('form')
        node.innerHTML = messageText;
        document.querySelector('#notes').appendChild(node)
        
    }

    return (
        <><form>
            <label>Message</label>
            <input id="messageInput" type="text"></input>
            <button type="button" onClick={onSubmit} onSubmit={onSubmit}>Submit</button>
            <button type="button" onClick={onDelete} onSubmit={onDelete}>Delete</button>
            <br/>
            <div id="notes">

            </div>

        </form></>
        
    )
}
