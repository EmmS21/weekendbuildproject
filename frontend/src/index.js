import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles:
import './Assets/CSS/index.css';
import './Assets/CSS/navbar.css';
import './Assets/CSS/hero.css';
import './Assets/CSS/footer.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);