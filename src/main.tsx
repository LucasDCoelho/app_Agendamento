import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

// Components
import { HomeContainer } from './container/routes/HomeContainer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
