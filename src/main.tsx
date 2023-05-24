import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/index.tsx'
import { StoreProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
    <RouterProvider router={Router}></RouterProvider>
    </StoreProvider>
  </React.StrictMode>,
)
