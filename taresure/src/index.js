import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// Custom global error handler
window.addEventListener('error', function(e) {
  // Prevent default browser handling
  e.preventDefault();
  // console.error('Global error caught:', e.error);
});