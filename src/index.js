import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/'
import House from './pages/House/'
import Apropos from './pages/Apropos/'

import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
