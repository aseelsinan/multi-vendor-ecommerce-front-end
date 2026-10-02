import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import { CartProvider } from './services/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>

  <StrictMode>
    <App />
  </StrictMode>,
  </CartProvider>
)
