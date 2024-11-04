import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Footer } from "~/src/components";
import { BackgroundContainer, Button, WidthMonitor } from "~/src/ui";
import { projects } from "~/src/assets/data";
import colors from "~/src/scss/style.module.scss";
import { ProjectCard } from "./components/";
import "./Projects.scss";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackgroundContainer angle={300} percentage={60} color={colors.green10}>
        <BackgroundContainer angle={120} percentage={90} color={colors.green10}>
          <div className="Projects flex-column-center">
            <WidthMonitor>
              <span className="Projects__title">
                <ChevronLeft
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
                <h2>Work</h2>
              </span>
              <p>
                Check out some of the projects I've been working on recently.
              </p>
              <div className="flex-column">
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
      <Footer />
    </>
  );
};
