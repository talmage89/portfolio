import * as React from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import "./Button.scss";

type ButtonColor = "primary" | "secondary" | "white";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
  raised?: boolean;
  inverse?: boolean;
  link?: string;
};

const defaultClassName = "pf-button";

export const Button = (props: ButtonProps) => {
  const navigate = useNavigate();

  const className = () =>
    classnames(defaultClassName, {
      [`${defaultClassName}--raised`]: props.raised,
      [`${defaultClassName}--inverse`]: props.inverse,
      [`${defaultClassName}--${props.color}`]: props.color,
      [`${props.className}`]: props.className,
    });

  const cleanedProps = {
    ...props,
    color: undefined,
    raised: undefined,
    inverse: undefined,
    link: undefined,
  };

  return (
    <button
      className={className()}
      onClick={(e) => {
        props.onClick?.(e);
        props.link && navigate(props.link);
      }}
      {...cleanedProps}
    />
  );
};
