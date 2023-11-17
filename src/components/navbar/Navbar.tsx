import * as React from "react";
import * as classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Button, WidthMonitor } from "../../ui";
import "./Navbar.scss";

export const Navbar = () => {
  const location = useLocation();
  const [skinny, setSkinny] = React.useState(location.pathname === "/demos");

  const getClassName = () =>
    classnames("Navbar", {
      "Navbar--small": skinny,
    });

  function sendMail() {
    window.location.href = "mailto:talmage.bergeson@gmail.com";
  }

  return (
    <div className={getClassName()}>
      <WidthMonitor className={skinny ? "animateWidth" : undefined}>
        <h2>Talmage Bergeson</h2>
        <span>
          <Link to="/" onClick={() => setSkinny(false)}>About</Link>
          <Link to="/work" onClick={() => setSkinny(false)}>Work</Link>
          <Link to="/demos" onClick={() => setSkinny(true)}>Demos</Link>
          <Button
            raised
            color="white"
            // link="/contact"
            onClick={() => sendMail()}
            style={{ padding: "10px 40px", borderRadius: "20px" }}
          >
            Contact
          </Button>
        </span>
      </WidthMonitor>
    </div>
  );
};
