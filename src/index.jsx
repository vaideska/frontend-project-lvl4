// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test.jsx';

ReactDOM.render(
  <Test />,
  document.getElementById('chat'),
);
