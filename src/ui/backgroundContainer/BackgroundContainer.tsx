import * as React from "react";
import * as cxs from "cxs";
import "./BackgroundContainer.scss";

type BackgroundContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  angle?: number;
  percentage?: number;
  color?: string;
};

export const BackgroundContainer = (props: BackgroundContainerProps) => {
  const cleanedProps = {
    ...props,
    angle: undefined,
    percentage: undefined,
    color: undefined,
  };

  const bg = {
    angle: props.angle || 0,
    percentage: props.percentage || 0,
    color: props.color || "#ffffff00",
  };

  const className = cxs({
    ":before": {
      background: `linear-gradient(${bg.angle}deg, transparent ${bg.percentage}%, ${bg.color} 0)`,
    },
  });

  return (
    <div
      className={`pf-backgroundContainer ${className}`}
      {...cleanedProps}
    >
      {props.children}
    </div>
  );
};
