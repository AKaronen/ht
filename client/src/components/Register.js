import React from 'react'
import {useState} from 'react'

function Register() {
    const [userData, setuserData] = useState({});
    
    const submit = (e) =>{
        e.preventDefault();
        fetch("/register", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                window.location.href = "/login"
            } else {
                if (data.message) {
                    document.getElementById("error").innerHTML = data.message;
                } else {
                    document.getElementById("error").innerHTML = "Very strange error!";
                }
            }
        })
    }
    const change = (e) =>{
        setuserData({...userData, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Register</h1>
            <div className="container col s6">
                <div className="row">
                    <div id="error" className="card-panel indigo white-text"/>
                    <form onSubmit={submit} id="register-form" onChange={change}>

                        <label for="email">Email</label>
                            <input type="email" name="email" id="email" required/>
                        <label for="password">Password </label> 
                            <input type="password" name="password" id="password" required/>
                            <br/>
                        <input type="submit" className="btn" name="button" value="Register"/>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register