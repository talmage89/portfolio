import * as React from "react";
import { Link } from "react-router-dom";
import { Button, WidthMonitor } from "../../ui";
import "./Navbar.scss";

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  function sendMail() {
    window.location.href = "mailto:talmage.bergeson@gmail.com";
  }

  return (
    <div className="Navbar">
      <WidthMonitor>
        <h2>Talmage Bergeson</h2>
        <span>
          <Link to="/">About</Link>
          <Link to="/projects">Work</Link>
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
