import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import GetAPost from './components/GetAPost'
import CreatePost from './components/CreatePost'
import AllPosts from './components/AllPosts'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element = {<MainPage/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/post/:id" element={<GetAPost/>}/>
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
