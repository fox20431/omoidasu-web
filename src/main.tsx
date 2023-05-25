import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from './Root.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/blog",
    element: <div>Hello blog.</div>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
