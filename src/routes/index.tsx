import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home, Projects, Demos } from "~/src/features";
import { Navbar } from "../components";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work",
    element: <Projects />,
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  {
    path: "/demos",
    element: <Demos />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      {element}
    </div>
  );
};
