import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './Layout/AppLayout/AppLayout'
import Home from './Pages/Home'
import Loan from './Pages/Loan'

function App() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/myloans",
        element:<Loan />
      },
    ]
  }])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
