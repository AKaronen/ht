import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper indigo">
                <a href="/" className="brand-logo">Code</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="posts"className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                    <li><a href="login"className="waves-effect waves-teal btn-flat white-text">Login</a></li>
                    <li><a href="register"className="waves-effect waves-teal btn-flat white-text">Register</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
