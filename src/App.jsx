import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Family1 from './Karimbil/Family1'
import Family2 from './Family2/Family2'
import Person from './Person/Person'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './Loader/Loader'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [familyNames, setFamilyNames] = useState(null)
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchFamily()
    fetchAll()
  }, []);
  const fetchFamily = () => {
    console.log('Fetch Family')
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
  }
  const fetchAll= ()=>{
    fetch(`https://familytree2api.herokuapp.com/api/v1/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => setUsers(data.result))
      .catch((err) => {
        console.log(err.message);
      })
  }
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  console.log(familyNames)
  return (
    <Router>
      <div className="App">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={darkMode ? 'main-dark' : 'main'}>
          <Routes>
            <Route path='/' element={familyNames===null ?<Loader/> :<Home familyNames={familyNames} />} />
            <Route path='/karimbil' element={<Family1 users={users}/>} />
            <Route path='/thottathparambil' element={<Family2 users={users}/>} />
            <Route path={`/:familyname/person`} element={<Person/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
