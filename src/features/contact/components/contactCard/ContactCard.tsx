import { BackgroundContainer, WidthMonitor, Button } from "~/src/ui";
import { img2029 } from "~/src/assets";
import colors from "~/src/scss/style.module.scss";
import "./ContactCard.scss";
import { useState } from "react";

type ContactCardProps = {
  title?: boolean;
  background?: boolean;
};

export const ContactCard = (props: ContactCardProps = { title: true }) => {
  props = { title: true, background: true, ...props };
  const [showTooltip, setShowTooltip] = useState(false);

  function openPage(url: string) {
    window.open(url, "_blank");
  }

  function copyEmail() {
    navigator.clipboard.writeText("talmage.bergeson@gmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  return (
    <BackgroundContainer
      angle={120}
      percentage={props.background ? 75 : 100}
      color={colors.green10}
    >
      <div className="ContactCard justify-center">
        <WidthMonitor width="fit-content" className="flex-column-center">
          {props.title && (
            <div className="flex-column">
              <h3>Contact</h3>
              <p>
                If you have any questions or would like to collaborate with me,
                please reach out.
              </p>
            </div>
          )}
          <span className="ContactCard__image">
            <img src={img2029} />
            <span className="flex-column-center">
              <h4>Talmage Bergeson</h4>
              <p
                className="highlight-underlay"
                onClick={copyEmail}
                style={{ cursor: "pointer", position: "relative" }}
              >
                talmage.bergeson@gmail.com
                {showTooltip && (
                  <span className="ContactCard__tooltip">
                    Copied to clipboard!
                  </span>
                )}
              </p>
            </span>
          </span>
          <span className="ContactCard__buttons">
            <Button
              inverse
              raised
              onClick={() =>
                openPage("https://www.linkedin.com/in/talmage-bergeson/")
              }
            >
              LinkedIn
            </Button>
            <Button
              inverse
              raised
              onClick={() => openPage("https://github.com/talmage89")}
            >
              Github
            </Button>
          </span>
        </WidthMonitor>
      </div>
    </BackgroundContainer>
  );
};
