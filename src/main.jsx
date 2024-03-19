import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componant/home/Home';
import About from './Componant/about/About';
import Header from './Componant/header/Header';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/header',
        element:<Header></Header>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/header',
    element: <Header></Header>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
