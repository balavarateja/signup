import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Reset from './components/Reset'
import Emaillink from './components/Emaillink'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/signin/reset" element={<Reset />} />
          <Route path="/signin/forgotpassword" element={<Emaillink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
