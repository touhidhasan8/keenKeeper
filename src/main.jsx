import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/Router/Router.jsx'
import ContextProvider from './Components/Context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>
    <ToastContainer></ToastContainer>
      <RouterProvider router={router}/>
   </ContextProvider>
      
   
  </StrictMode>,
)
