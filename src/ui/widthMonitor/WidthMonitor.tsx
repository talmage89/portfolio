import * as React from "react";
import classnames from "classnames";
import "./WidthMonitor.scss";

type WidthMonitorProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
};

export const WidthMonitor = (props: WidthMonitorProps) => {
  const CONTENT_MAX_WIDTH = 1000;

  const getClassName = () =>
    classnames("pf-widthMonitor", {
      [`${props.className}`]: props.className,
    });

  return (
    <div
      className={getClassName()}
      style={{
        maxWidth: props.width ? props.width : CONTENT_MAX_WIDTH + 200,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
