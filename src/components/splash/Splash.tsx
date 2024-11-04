import classNames from "classnames";
import "./Splash.scss";

type SplashProps = {
  text: string;
  triggerAnimation: boolean;
};

export const Splash = (props: SplashProps) => {
  return (
    <div
      className={classNames("Splash flex-center", {
        "Splash--close": props.triggerAnimation,
      })}
    >
      <div className="Splash__text">
        <h2>{props.text}</h2>
      </div>
    </div>
  );
};
