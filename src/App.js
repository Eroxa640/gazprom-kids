import React from 'react'
import {Route, Routes} from "react-router-dom"
import Main from './components/Main/Main'
import NavLayouts from './Layouts/NavLayouts/NavLayouts'

function App() {
  return (
    <NavLayouts>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </NavLayouts>
  )
}

export default App