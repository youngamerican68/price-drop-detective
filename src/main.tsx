
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure to render once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});
