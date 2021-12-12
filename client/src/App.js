import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/Main'
import Login from './components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element = {<MainPage/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
