import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// Use reportWebVitals(console.log) for measuring performance in your app.
reportWebVitals();
