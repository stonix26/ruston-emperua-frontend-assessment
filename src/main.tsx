import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Exercise2 from './pages/Exercise2'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/exercise-2',
    element: <Exercise2 />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
