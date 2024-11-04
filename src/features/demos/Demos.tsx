import classnames from "classnames";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import { ReactFlowDemo, ReactThreeFiber } from "./components";
import "./Demos.scss";

const demos = [
  { title: "React Flow", component: <ReactFlowDemo /> },
  { title: "React Three Fiber", component: <ReactThreeFiber /> },
];

export const Demos = () => {
  const [active, setActive] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const demolinkClassname = (index: number) =>
    classnames("Demos__sidebar__demolink", {
      "Demos__sidebar__demolink--active": index === active,
    });

  return (
    <>
      <div className="Demos">
        <div className="Demos__sidebar">
          <span className="Demos__sidebar__title">
            <ChevronLeft
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <p>Demos</p>
          </span>
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
        <div className="Demos__main">
          {windowWidth < 720 && (
            <div className="Demos__main__warning">
              <TriangleAlert />
              Demos are best viewed on a larger screen (720px or wider)
            </div>
          )}
          {demos[active].component}
        </div>
      </div>
    </>
  );
};
