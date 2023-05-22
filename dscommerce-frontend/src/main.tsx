import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Ferramenta para avisar de possíveis problemas na aplicação
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
