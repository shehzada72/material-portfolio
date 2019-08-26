import React from "react";
import ReactDOM from "react-dom";
import AppRoute from './routes';
import { BrowserRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";


ReactDOM.render(
  <BrowserRouter>
      <AppRoute />
  </BrowserRouter>,
  document.getElementById("root")
);
