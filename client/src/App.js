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
  const [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch("/posts/allPosts")
      .then(response => response.json())
      .then(data => {
        setPostData(data);
        setLoading(false)
      })
  }, [])

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
        setUserData(data.username)
      })
  }, [auth_token])


  const handleSearch = () => {
    window.location.replace("/results/"+searchData);
  }
  const logout = () => {
    localStorage.removeItem("auth_token");
    window.location.href = "/";
  }
  const [searchData, setSearchData] = useState("")

  const handleChange = (e) => {
    setSearchData(e.target.value)
  }
  console.log(searchResults);
  return (
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
