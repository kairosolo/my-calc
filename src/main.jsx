import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GradeCalculator from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GradeCalculator/>
  </StrictMode>,
)

