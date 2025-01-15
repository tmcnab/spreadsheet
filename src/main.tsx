import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Application from './Application.tsx'

createRoot(document.body).render(
	<StrictMode>
		<Application />
	</StrictMode>
)
