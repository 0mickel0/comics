import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </React.StrictMode>,
  document.getElementById('root')
);
