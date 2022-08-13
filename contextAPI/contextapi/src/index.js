import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorProvider } from "./context/TitleColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2 - CRIANDO PROVIDER */}
    <CounterContextProvider>
      <TitleColorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleColorProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
