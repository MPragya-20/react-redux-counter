import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import reducer from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

