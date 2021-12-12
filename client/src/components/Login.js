import React from 'react'


function Login() {
    return (
        <div class="container col s6">
            <div class="row">
                <div id="error" class="card-panel"/>
                <form action="" id="login-form" method="POST">

                    <label for="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    <label for="password">Password </label> 
                        <input type="password" name="password" id="password" required/>
                        <br/>
                    <input type="submit" class="btn" name="button" value="Login"/>
                </form>
            </div>
        </div>
    )
}

export default Login
