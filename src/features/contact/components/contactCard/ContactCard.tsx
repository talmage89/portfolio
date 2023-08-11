import * as React from "react";
import { BackgroundContainer, WidthMonitor, Button } from "~/src/ui";
import avatarPhoto from "~/src/assets/img/personal/IMG_0001.jpg";
import colors from "~/src/scss/style.module.scss";
import "./ContactCard.scss";

type ContactCardProps = {
  title?: boolean;
  background?: boolean;
};

export const ContactCard = (props: ContactCardProps = { title: true }) => {
  props = { title: true, background: true, ...props };

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
            <img src={avatarPhoto} />
            <span className="flex-column-center">
              <h4>Talmage Bergeson</h4>
              <p className="highlight-underlay">talmage.bergeson@gmail.com</p>
            </span>
          </span>
          <span className="ContactCard__buttons align-center">
            <Button inverse raised>
              LinkedIn
            </Button>
            <Button inverse raised>
              Github
            </Button>
            <Button inverse raised>
              Instagram
            </Button>
          </span>
        </WidthMonitor>
      </div>
    </BackgroundContainer>
  );
};
