import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../src/routes/index"
import store from "./lib/store";
import { Provider } from "react-redux"
import { ClerkProvider } from '@clerk/clerk-react'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
    </ClerkProvider>
  </StrictMode>
);
