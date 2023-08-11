import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { BackgroundContainer, Button, WidthMonitor } from "~/src/ui";
import { projects } from "~/src/assets/data";
import colors from "~/src/scss/style.module.scss";
import { ProjectCard } from "./components/";
import "./Projects.scss";

type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  const navigate = useNavigate();

  return (
    <BackgroundContainer angle={300} percentage={75} color={colors.green10}>
      <BackgroundContainer angle={120} percentage={85} color={colors.green10}>
        <div className="Projects flex-column-center">
          <WidthMonitor className="flex-column">
            <span className="align-center">
              <ArrowLeftIcon onClick={() => navigate(-1)} />
              <h2>Projects</h2>
            </span>
            <div>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  linkToSite={project.linkToSite}
                  img={project.img}
                  imgOnLeft={project.imgOnLeft}
                />
              ))}
            </div>
            <Button raised inverse color="primary">
              SEE MORE ON GITHUB
            </Button>
          </WidthMonitor>
        </div>
      </BackgroundContainer>
    </BackgroundContainer>
  );
};

// <a
//   className="contactButtonInverseprojectSeeMoreButton"
//   href="https://github.com/talmage89"
//   target="_blank"
//   rel="noreferrer"
// >
//   See More on Github
// </a>;
