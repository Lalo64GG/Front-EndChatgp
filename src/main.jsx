import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Components/Organims/Login'
import { Home } from './Components/Organims/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    index: true
  },
  {
    path: '/home',
    element: <Home/>,
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)
