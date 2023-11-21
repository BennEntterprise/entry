
import posthog from 'posthog-js'
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { PostHogProvider } from "posthog-js/react";

// Verify the posthog key is set, (not undefined)
// if it is undefined, then we kill the process
if (process.env.REACT_APP_PUBLIC_POSTHOG_KEY) {
    console.log("Posthog Key is Set");
} else {
    console.log("Posthog Key is Not Set");
    process.exit(1);
}

posthog.init(
    process.env.REACT_APP_PUBLIC_POSTHOG_KEY,
    {
        api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
    }
);

const root = createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <PostHogProvider client={posthog}>
            <App />
        </PostHogProvider>
    </React.StrictMode>
);

// TODO: Remove the Problematic .d.ts File. (Not sure which one)
