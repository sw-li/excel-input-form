import * as React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App(props) {
  return (
    <main>
      <h1>{props.title}</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
