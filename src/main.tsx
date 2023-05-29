import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Router } from './Routes/index.tsx'
import { StoreProvider } from './context/index.tsx'
import { Toaster } from 'react-hot-toast';
import App from './App.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster/>
    <StoreProvider>
    <RouterProvider router={Router}></RouterProvider>
    </StoreProvider>
  </React.StrictMode>,
)
