import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Devif from './pages/Devif'
import MyNav from './components/MyNav'
import Victima from './pages/Victima'
import MyFooter from './components/MyFooter'

function App() {


  return (
    <div className="App">
       <HashRouter>
       <MyNav />
          <Routes>        
            <Route path='/' element={<Home />} />
            <Route path='/devif' element={<Devif />} />
            <Route path='/victima' element={<Victima/>} />
          </Routes>
      <MyFooter/>
      </HashRouter>
    </div>
  )
}

export default App
