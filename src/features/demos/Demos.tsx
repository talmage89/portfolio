import * as React from "react";
import * as classnames from "classnames";
import { ReactFlowDemo, ReactThreeFiber } from "./components";
import "./Demos.scss";

const demos = [
  { title: "React Flow", component: <ReactFlowDemo /> },
  { title: "React Three Fiber", component: <ReactThreeFiber /> },
];

export const Demos = () => {
  const [active, setActive] = React.useState(0);

  const demolinkClassname = (index: number) =>
    classnames("Demos__sidebar__demolink", {
      "Demos__sidebar__demolink--active": index === active,
    });

  return (
    <>
      <div className="Demos">
        <div className="Demos__sidebar">
          <p>All demos</p>
          {demos.map((demo, i) => (
            <div
              key={i}
              className={demolinkClassname(i)}
              onClick={() => setActive(i)}
            >
              <p>{demo.title}</p>
            </div>
          ))}
        </div>
        <div className="Demos__main">{demos[active].component}</div>
      </div>
    </>
  );
};
