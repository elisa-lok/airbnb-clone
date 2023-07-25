import ReactDOM from 'react-dom/client';
import React from 'react';
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import App from './app'
import "normalize.css"
import 'antd/dist/reset.css';
//import "antd/dist/antd.less"
import "./assets/css/index.less"
import store from './store'
import theme from './assets/theme'
import './assets/css/variables.less';

// Path: src/index.js
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App/>
      </HashRouter>
    </ThemeProvider>
  </Provider>
  );
