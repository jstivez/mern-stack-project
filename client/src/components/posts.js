import React from "react"


import { KnownTypeNamesRule } from "graphql";

function onSubmit(){
    let messageText = document.querySelector("#messageInput").value;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageText })
    };
    fetch("http://localhost:5001/user-post", requestOptions)
    .then(()=> {console.log("works")})
    .catch((e) => {console.log(e)})
}

export function UserPosts () {

    return (
        <form>
            <label>Message</label>
            <input id="messageInput" type="text"></input>
            <button type="button" onClick={onSubmit}>Submit</button>

        </form>
    )
}
