import * as React from "react";
import "./Footer.scss";

type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <div className="Footer flex-space-between">
      <h2>Talmage Bergeson</h2>
      <span>
        <p>
          Source code for this site may be viewed{" "}
          <a
            href="https://github.com/talmage89/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <p>Designed and developed by Talmage Bergeson</p>
      </span>
    </div>
  );
};
