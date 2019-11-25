import React from 'react';
import { render } from 'react-dom';
import App from './app.js';

const rootEl = document.querySelector('#root');

render(<App />, rootEl);