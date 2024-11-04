import * as React from "react";
import classnames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, WidthMonitor } from "../../ui";
import "./Navbar.scss";

export const Navbar = () => {
  const location = useLocation();
  const [skinny, setSkinny] = React.useState(location.pathname === "/demos");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getClassName = () =>
    classnames("Navbar", {
      "Navbar--small": skinny,
      "Navbar--menuOpen": menuOpen,
    });

  function sendMail() {
    window.location.href = "mailto:talmage.bergeson@gmail.com";
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: "/", text: "About", onClick: () => setSkinny(false) },
    { to: "/work", text: "Work", onClick: () => setSkinny(false) },
    { to: "/demos", text: "Demos", onClick: () => setSkinny(true) },
  ];

  return (
    <div className={getClassName()}>
      <WidthMonitor className={skinny ? "animateWidth" : undefined}>
        <h2>Talmage Bergeson</h2>
        {windowWidth <= 816 ? (
          <div className="Navbar__menu">
            <button className="Navbar__menuButton" onClick={toggleMenu}>
              <span className="Navbar__menuButton__icon">
                {menuOpen ? <X /> : <Menu />}
              </span>
            </button>
            {menuOpen && (
              <div
                className="Navbar__menu__dropdown"
                ref={(node) => {
                  // Add click outside listener
                  const handleClickOutside = (e: MouseEvent) => {
                    // Don't close if clicking a link or button
                    if (
                      e.target instanceof Element &&
                      (e.target.closest("a") || e.target.closest("button"))
                    ) {
                      return;
                    }
                    if (node && !node.contains(e.target as Node)) {
                      setMenuOpen(false);
                    }
                  };
                  if (node) {
                    document.addEventListener("mousedown", handleClickOutside);
                  }
                  return () => {
                    document.removeEventListener(
                      "mousedown",
                      handleClickOutside
                    );
                  };
                }}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      link.onClick();
                      setMenuOpen(false);
                    }}
                  >
                    {link.text}
                  </NavLink>
                ))}
                <Button
                  raised
                  color="white"
                  inverse
                  onClick={() => sendMail()}
                  style={{ padding: "10px 40px", borderRadius: "20px" }}
                >
                  Contact
                </Button>
              </div>
            )}
          </div>
        ) : (
          <span>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={link.onClick}>
                {link.text}
              </NavLink>
            ))}
            <Button
              raised
              color="white"
              onClick={() => sendMail()}
              style={{ padding: "10px 40px", borderRadius: "20px" }}
            >
              Contact
            </Button>
          </span>
        )}
      </WidthMonitor>
    </div>
  );
};
