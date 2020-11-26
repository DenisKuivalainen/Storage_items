import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Main from './js/Main';

ReactDOM.render(
  <React.StrictMode>
    <div className="index">
      <Main />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
