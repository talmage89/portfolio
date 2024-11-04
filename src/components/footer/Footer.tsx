import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <h2>Talmage Bergeson</h2>
      <span className="Footer__text">
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
