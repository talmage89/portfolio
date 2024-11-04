import classnames from "classnames";
import "./ProjectCard.scss";
import { Github, Link } from "lucide-react";

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
    return classnames("ProjectCard", {
      "flex-row-reverse": !props.imgOnLeft,
    });
  };

  return (
    <div className={projectCardClassnames()}>
      <img src={props.img} alt="project" />
      <div className="flex-column">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span className="ProjectCard__tags">
          {props.tags.map((tag: any, index: number) => (
            <p key={index} className="highlight-underlay">
              {tag}
            </p>
          ))}
        </span>
        <span className="ProjectCard__links">
          {props.github && (
            <a
              className={"textGithub"}
              href={props.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          )}
          {props.linkToSite && (
            <a
              className={"textLinkToSite"}
              href={props.linkToSite}
              target="_blank"
              rel="noreferrer"
            >
              <Link />
            </a>
          )}
        </span>
      </div>
    </div>
  );
};
