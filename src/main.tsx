import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading size="lg" /></div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
