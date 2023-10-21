// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
// import{Database}from './types/supabase'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,
)

