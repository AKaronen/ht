import React from 'react'
import {useState, useEffect} from 'react'


function CreatePost() {
    const [postData, setpostData] = useState({user: "", items: []});
    const auth_token = localStorage.getItem("auth_token")
    useEffect(() => {
        fetch("/private/", {
            method: "GET",
            headers:{
                "authorization": "Bearer " + auth_token
            },
            mode:"cors"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setpostData({user: data})
        })
    }, [])


    const submit = (e) =>{
        e.preventDefault();
        fetch("/private/post", {
            method:"POST",
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
        })
    }
    const change = (e) =>{
        setpostData({...postData, [e.target.name]: e.target.value})
        console.log(postData);
    }
    return (
        <div>
            <h1>Create a Post</h1>
            <div className="container col s6">
                <div className="row">
                    <form onSubmit={submit} id="post-form" onChange={change}>
                        <label htmlFor="Text">Text</label>
                            <input type="Text" name="items" id="Text" required/>
                        <input type="submit" className="btn" name="button" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CreatePost