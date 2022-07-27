import { useState } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Family1 from './Karimbil/Family1'
import Family2 from './Family2/Family2'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {

  //body src='https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-family-tree-logo-template-vector-illustration-png-image_5224716.png'
    const [darkMode,setDarkMode] = useState(false)
    function toggleDarkMode(){
      setDarkMode(prevMode=>!prevMode)
    }
  return (
    <Router>
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/family1' element={<Family1/>}/>
            <Route path='/family2' element={<Family2/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default App
