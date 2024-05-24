import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SignUp from "./components/SignUp";
import OTP from "./components/OTP";
import CallScreen from "./components/CallScreen";

const router = createBrowserRouter([
  {
    path: "/gen-chat-web/",
    element: <Home />,
  },
  {
    path: "/gen-chat-web/Main",
    element: <Main />,
  },
  {
    path: "/gen-chat-web/SignUp",
    element: <SignUp />,
  },
  {
    path: "/gen-chat-web/OTP",
    element: <OTP />,
  },
  {
    path: "/gen-chat-web/CallScreen",
    element: <CallScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Go react strictmode de no ko render cai nay 2 lan
  <React.StrictMode>
    {/* <HashRouter> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
