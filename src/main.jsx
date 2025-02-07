import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuoteDisplay from "./components/QuoteDisplay";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteDisplay />
  </StrictMode>,
)
