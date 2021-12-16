import React from 'react'
import { useState, useEffect } from 'react'


function CreatePost() {
    const [postData, setpostData] = useState({ user: "", item: "", comments: [] });
    const auth_token = localStorage.getItem("auth_token")
    useEffect(() => {
        fetch("/private/", {
            method: "GET",
            headers: {
                "authorization": "Bearer " + auth_token
            },
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setpostData({ user: data.username })
            })
    }, [])


    const submit = (e) => {
        e.preventDefault();
        fetch("/private/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authorization": "Bearer " + auth_token
            },
            body: JSON.stringify(postData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = "/posts/"
            })
    }
    const change = (e) => {
        setpostData({ ...postData, [e.target.name]: e.target.value })
        console.log(postData);
    }
    return (
        <div>
            <h1>Create a Post</h1>
            <div className="container col s6">
                <div className="row">
                    <form onSubmit={submit} id="post-form" onChange={change}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" required />
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" name="item" required></textarea>
                            <label for="textarea1">Write your Post here</label>
                        </div>
                        <input type="submit" className="btn" name="button" value="Submit" />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CreatePost