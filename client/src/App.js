import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import Searched from './components/Searched'
import GetAPost from './components/GetAPost'
import CreatePost from './components/CreatePost'
import AllPosts from './components/AllPosts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function NoMatch() {
  return (
    <div>
      <h3>
        404: Oops didn't find what you were looking for
      </h3>
    </div>
  );
}

function App() {
  const [userData, setUserData] = useState("")
  const auth_token = localStorage.getItem("auth_token");
  const [PostData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState("")
  useEffect(() => { //Loading all the posts from the database as the page loads
    setLoading(true)
    fetch("/posts/allPosts")
      .then(response => response.json())
      .then(data => {
        setPostData(data);
        setLoading(false)
      })
  }, [])

  useEffect(() => { //Loading user info
    fetch("/private/", {
      method: "GET",
      headers: {
        "authorization": "Bearer " + auth_token
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data.username)
      })
  }, [userData])


  const handleSearch = () => { //handle search (these could be also in the navbar section but oh well)
    window.location.replace("/results/"+searchData);
  }
  const handleChange = (e) => {
    setSearchData(e.target.value)
  }
  const logout = () => { //logout button functionality 
    localStorage.removeItem("auth_token");
    window.location.href = "/";
  }

  
  return ( //the whole structure of the app as it stands, all the active routes and their components
    <Router>
      <div className="App">
        <NavBar
          handleSearch={handleSearch}
          logout={logout}
          handleChange={handleChange}
          searchData={searchData}
        />
        <Routes>
          <Route path="/" element={<MainPage username={userData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<GetAPost loggedUser={userData} />} />
          <Route path="/posts" element={<AllPosts PostData={PostData} loading={loading} />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/results/:search" element={<Searched/>}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  ); 
}

export default App;
