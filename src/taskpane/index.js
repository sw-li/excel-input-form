import App from "./App";
import { AppContainer } from "react-hot-loader";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDOM from "react-dom";

let isOfficeInitialized = false;

const title = "Contoso Task Pane Add-in";

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <Router>
      <App title={title} />
    </Router>
  );
});

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
