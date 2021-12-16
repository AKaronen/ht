import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import GetAPost from './components/GetAPost'
import CreatePost from './components/CreatePost'
import AllPosts from './components/AllPosts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'

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
        setUserData(data.username)
    })}, [auth_token])
  
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element = {<MainPage username={userData}/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/post/:id" element={<GetAPost loggedUser={userData}/>}/>
          <Route path="/posts" element={<AllPosts/>}/>
          <Route path="/createPost" element={<CreatePost/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
