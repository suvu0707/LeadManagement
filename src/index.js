import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'mdbreact/dist/css/mdb.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import MyStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={MyStore}>
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
