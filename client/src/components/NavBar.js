import React from 'react'

function NavBar() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper indigo">
                <a href="/" class="brand-logo">Code</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="login "class="waves-effect waves-teal btn-flat white-text">Login</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
