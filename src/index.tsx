
import posthog from 'posthog-js'
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { PostHogProvider } from "posthog-js/react";

const posthogKeys = {
    REACT_APP_PUBLIC_POSTHOG_HOST:"https://app.posthog.com",
    REACT_APP_PUBLIC_POSTHOG_KEY:"phc_pyjf9J0Nv952OmlftyI1cHwQTYRfZuDg4mi6P5My5kS",
    POSTHOT_PROJECT_ID:"43028"
}

// Verify the posthog key is set, (not undefined)
// if it is undefined, then we kill the process
if (posthogKeys.REACT_APP_PUBLIC_POSTHOG_KEY) {
    console.log("Posthog Key is Set");
} else {
    console.log("Posthog Key is Not Set");
    // Close the react app
    posthogKeys.REACT_APP_PUBLIC_POSTHOG_KEY='unset'
}

posthog.init(
    posthogKeys.REACT_APP_PUBLIC_POSTHOG_KEY,
    {
        api_host: posthogKeys.REACT_APP_PUBLIC_POSTHOG_HOST,
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
