// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { DataProvider } from "./DataContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
    <DataProvider>
        <BrowserRouter>
          <Toaster theme="dark" position="bottom-right" />
          <App />
        </BrowserRouter>
    </DataProvider>
);