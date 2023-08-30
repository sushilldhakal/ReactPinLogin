import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./Home";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
