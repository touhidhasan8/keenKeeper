import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/Router/Router.jsx'
import ContextProvider from './Components/Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>

      <RouterProvider router={router}/>
   </ContextProvider>
      
   
  </StrictMode>,
)
