import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassCompent from './Classcompoent';
import Second from './Secondclass';
import App from './App';
import Myfuction from './Functioncompent';
import Secondclass from './Scondfunction';
import Map from './Mapcomp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* this is function commpents */}
    {/* <Myfuction /> */}
    {/* <Second /> */}

    {/* this class commpents here  */}
    {/* <ClassCompent /> */}
    {/* <Secondclass /> */}
    {/* <Map /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
