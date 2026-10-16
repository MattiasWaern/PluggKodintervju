import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import ProjectStatus from './test.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ProjectStatus/>
  </StrictMode>,
)
