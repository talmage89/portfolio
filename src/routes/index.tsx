import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home, Projects, Contact } from "~/src/features";
import { Footer, Navbar } from "../components";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return (
    <div className="flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flexGrow: "1" }}>{element}</div>
      <Footer />
    </div>
  );
};
