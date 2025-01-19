import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./index.css"
import store from "./redux/store.ts"
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} children={ <App />}>
    </Provider>
  </React.StrictMode>
);

 