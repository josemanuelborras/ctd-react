import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PorfolioApp } from './PorfolioApp'
import { VariablesApp } from './VariablesApp'
import ClassComponent from './ClassComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PorfolioApp />
    <ClassComponent />
      <VariablesApp />
  </StrictMode>,
)
