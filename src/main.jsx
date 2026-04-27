import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PorfolioApp } from './PorfolioApp'
import ClassComponent from './ClassComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PorfolioApp />
    <ClassComponent />
  </StrictMode>,
)
