import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./pages/user/User";
import routes from "./routes";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.rootPagePath()} element={<App />} />
        <Route path={routes.userPagePath()} element={<User />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


