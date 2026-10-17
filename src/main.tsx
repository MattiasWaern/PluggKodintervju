import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import ProjectStatus from './test.tsx'
import Sort from './test2.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Sort/>
  </StrictMode>,
)
