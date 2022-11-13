import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

// TODO: Remove the Problematic .d.ts File. (Not sure which one)
