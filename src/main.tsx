import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

// Components
import { HomeContainer } from './container/routes/HomeContainer'
import { Login } from './components/Dashboard/Login'
import { DashboardContainer } from './container/routes/DashboardContainer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
  },
  {
    path: "/login",
    element: <Login email='' password=''/>
  },
  {
    path: "/dashboard",
    element: <DashboardContainer/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
