import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '../context/CartProvider';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
