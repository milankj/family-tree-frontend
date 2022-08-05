import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Family1 from './Karimbil/Family1'
import Family2 from './Family2/Family2'
import Person from './Person/Person'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [familyNames, setFamilyNames] = useState([])
  useEffect(() => {
    fetch(`https://familytree2api.herokuapp.com/api/v1/family`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => setFamilyNames(data.result))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <Router>
      <div className="App">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={darkMode ? 'main-dark' : 'main'}>
          <Routes>
            <Route path='/' element={<Home familyNames={familyNames}/>} />
            <Route path='/karimbil' element={<Family1 />} />
            <Route path='/thottathparambil' element={<Family2 />} />
            <Route path='/person' element={<Person/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
