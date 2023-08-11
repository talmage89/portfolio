import * as React from "react";
import * as classnames from "classnames";
import "./ProjectCard.scss";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  linkToSite?: string;
  img: string;
  imgOnLeft: boolean;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const projectCardClassnames = () => {
    return classnames("ProjectCard flex-space-between", {
      "flex-row-reverse": !props.imgOnLeft,
    });
  };

  return (
    <div className={projectCardClassnames()}>
      <img src={props.img} alt="project" />
      <div className="flex-column">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span className="ProjectCard__tags flex">
          {props.tags.map((tag: any, index: number) => (
            <p key={index} className="highlight-underlay">
              {tag}
            </p>
          ))}
        </span>
        <span className="ProjectCard__links flex">
          {props.github && (
            <a
              className={"textGithub"}
              href={props.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {props.linkToSite && (
            <a
              className={"textLinkToSite"}
              href={props.linkToSite}
              target="_blank"
              rel="noreferrer"
            ></a>
          )}
        </span>
      </div>
    </div>
  );
};

// props = {
//     completed: string;
//     title: string;
//     description: string;
//     tags: string[];
//     github: link<string> | undefined;
//     linkToSite: link<string> | undefined;
//     img: link<string>;
//     imgOnLeft: bool
// }
