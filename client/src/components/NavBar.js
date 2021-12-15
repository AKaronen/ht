import React from 'react'

function NavBar() {
    const logout = (e) =>{
        e.preventDefault()
        localStorage.removeItem("auth_token");
        window.location.href = "/";
    }
    if (!localStorage.getItem("auth_token")) {
        return (
            <div>
                <nav>

                    <div className="nav-wrapper indigo">
                        <a href="/" className="brand-logo">Code</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/" className="waves-effect waves-teal btn-flat white-text" id="logout" style={{visibility: "hidden"}}>Logout</a></li>
                            <li><a href="posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                            <li><a href="login" className="waves-effect waves-teal btn-flat white-text">Login</a></li>
                            <li><a href="register" className="waves-effect waves-teal btn-flat white-text">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav>

                    <div className="nav-wrapper indigo">
                        <a href="/" className="brand-logo">Code</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="createPost" className="waves-effect waves-teal btn-flat white-text">Create a Post</a></li>
                            <li><a href="posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                            <li><button className="waves-effect waves-teal btn-flat white-text" id="logout" style={{visibility: "visible"}} onClick={logout}>Logout</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
