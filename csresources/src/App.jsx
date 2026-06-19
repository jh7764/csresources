import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Resources from './pages/Resources.jsx'
import Develops from './pages/Develops.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="App" id="outer-container">
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <Routes>
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Develops" element={<Develops />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;