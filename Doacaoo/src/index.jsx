import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sobrenos from'./componentes/Sobrenos'
import Home from'./componentes/Home'
import Galeria from'./componentes/Galeria'


import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom' 

const rotas = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Sobrenos',
    element: <Sobrenos/>
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
  path: '/Galeria',
    element: <Galeria />
  }
]

const router = createBrowserRouter(rotas)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)