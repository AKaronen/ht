

function NavBar({handleSearch, logout, handleChange, searchData}) {

    if (!localStorage.getItem("auth_token")) {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a href="/" className="brand-logo">Code Forum</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="search">
                                <div className='search-wrapper'>
                                    <input type="text" id="search" placeholder='Search' onChange={handleChange} onKeyPress={(e) => e.key === 'Enter' && handleSearch}/>
                                </div>
                            </li>
                            <li><a href="/" className="waves-effect waves-teal btn-flat white-text" id="logout" style={{ visibility: "hidden" }}>Logout</a></li>
                            <li><a href="/posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                            <li><a href="/login" className="waves-effect waves-teal btn-flat white-text">Login</a></li>
                            <li><a href="/register" className="waves-effect waves-teal btn-flat white-text">Register</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav indigo" id="slide-out">
                <li className="search">
                                <div className='search-wrapper'>
                                    <input type="text" id="search" placeholder='Search' onChange={handleChange} onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchData)}/>
                                </div>
                            </li>
                    <li><a href="/" className="waves-effect waves-teal btn-flat white-text" id="logout" style={{ visibility: "hidden" }}>Logout</a></li>
                    <li><a href="/posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                    <li><a href="/login" className="waves-effect waves-teal btn-flat white-text">Login</a></li>
                    <li><a href="/register" className="waves-effect waves-teal btn-flat white-text">Register</a></li>
                </ul>

            </div>
        )
    } else {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a href="/" className="brand-logo">Code Forum</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="search">
                                <div className='search-wrapper'>
                                    <input type="text" id="search" placeholder='Search' onChange={handleChange} onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchData)}/>
                                </div>
                            </li>
                            <li><a href="/createPost" className="waves-effect waves-teal btn-floating white-text"><i className="material-icons">create</i></a></li>
                            <li><a href="/posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                            <li><button className="waves-effect waves-teal btn-flat white-text" id="logout" style={{ visibility: "visible" }} onClick={logout}>Logout</button></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav indigo" id="slide-out">
                <li className="search">
                                <div className='search-wrapper'>
                                    <input type="text" id="search" placeholder='Search' onChange={handleChange} onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchData)}/>
                                </div>
                            </li>
                    <li><a href="/createPost" className="waves-effect waves-teal btn-flat white-text">Create a Post</a></li>
                    <li><a href="/posts" className="waves-effect waves-teal btn-flat white-text">Posts</a></li>
                    <li><a href="/" className="waves-effect waves-teal btn-flat white-text" id="logout" style={{ visibility: "visible" }}>Logout</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
