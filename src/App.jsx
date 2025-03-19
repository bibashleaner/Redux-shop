import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from './Components/Header'
import { PageNotFound } from './Components/PageNotFound'
import { Products } from './Components/Products'
import { ProductDetails } from './Components/ProductDetails'

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element ={<Products/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element = {<PageNotFound />} />
        </Routes>
    </Router>
  )
}

export default App
