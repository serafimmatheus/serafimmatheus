import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { Providers } from "./Context/index";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
