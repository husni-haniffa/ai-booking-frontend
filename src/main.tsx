import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import store from "./lib/store";
import { Provider } from "react-redux"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
