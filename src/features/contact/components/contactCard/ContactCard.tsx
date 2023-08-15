import * as React from "react";
import { BackgroundContainer, WidthMonitor, Button } from "~/src/ui";
import { img2029 } from "~/src/assets";
import colors from "~/src/scss/style.module.scss";
import "./ContactCard.scss";

type ContactCardProps = {
  title?: boolean;
  background?: boolean;
};

export const ContactCard = (props: ContactCardProps = { title: true }) => {
  props = { title: true, background: true, ...props };

  function openPage(url: string) {
    window.open(url, "_blank");
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
          <span className="ContactCard__image flex-center">
            <img src={img2029} />
            <span className="flex-column-center">
              <h4>Talmage Bergeson</h4>
              <p className="highlight-underlay">talmage.bergeson@gmail.com</p>
            </span>
          </span>
          <span className="ContactCard__buttons align-center">
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
