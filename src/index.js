import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Contexts
import ColorsProvider from "./context/Colors";

ReactDOM.render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

