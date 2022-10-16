import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Info,
  Projects,
  ContactMe,
  Reviews,
  Skills,
  Status,
  SupportMe,
} from "./pages";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/supportme" element={<SupportMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/status" element={<Status />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
