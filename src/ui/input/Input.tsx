import * as React from "react";
import "./Input.scss";

type InputProps = React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  textarea?: boolean;
};

export const Input = (props: InputProps) => {
  return props.textarea ? (
    <textarea className="pf-textarea" {...props} />
  ) : (
    <input className="pf-input" {...props} />
  );
};
