import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Menu } from './Menu.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu text="one" />
    <Menu text="two" />
  </StrictMode>,
)
