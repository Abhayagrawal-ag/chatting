import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import EnterCode from './Components/EnterCode'
import EnterName from './Components/EnterName'
import Chat from './Components/Chat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entercode" element={<EnterCode />} />
        <Route path="/entername" element={<EnterName />} />
        <Route path="/chat" element={<Chat />} />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
