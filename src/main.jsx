import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights/>
    <Analytics/>
    <RouterProvider router={router} />
    </StrictMode>,
)
