import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//  Custom global error handler
window.addEventListener('error', function(e) {
  // Prevent default browser handling
  e.preventDefault();
  // console.error('Global error caught:', e.error);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
