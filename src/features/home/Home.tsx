import * as React from "react";
import Splash from "~/src/components/misc/Splash";
import { ContactCard } from "../contact/";
import { BackgroundContainer, Button, WidthMonitor } from "~/src/ui";
import { skills, img543, resume } from "~/src/assets";
import colors from "~/src/scss/style.module.scss";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home flex-column">
      <BackgroundContainer angle={300} percentage={50} color={colors.green10}>
        <div className="Home__intro flex-column-center">
          <WidthMonitor>
            <span className="align-center">
              <h1>Hello!</h1>
              <p className="Home__intro__emojiHand">👋</p>
            </span>
            <h1>I'm a developer and an artist</h1>
            <h3>
              I find web design problems and{" "}
              <span className="highlight-underlay">solve them</span>
            </h3>
            <span className="align-center">
              <Button>LinkedIn</Button>
              <Button>Github</Button>
            </span>
          </WidthMonitor>
        </div>
        <div className="Home__about flex-column-center">
          <WidthMonitor className="flex-space-between">
            <div>
              <h3 className="aboutTitle">About me</h3>
              <p>
                Student at Mountainland Applied Technical College studying web
                programming and development.
              </p>
              <p>
                Budding programmer with an unsatiated desire to discover new
                concepts, languages, and technologies.
              </p>
              <p>
                I am driven by growth and results - I enjoy tackling seemingly
                insurmountable problems and projects. I love to design and to
                teach myself new concepts.
              </p>
              <a
                href={resume}
                className="highlight-underlay"
                download="Talmage_Bergeson_resume"
              >
                Download my resume
              </a>
            </div>
            <img
              src={img543}
              alt="A stunning youth looking for a web development job. Contact him today using the 'contact' button on the top of the page."
            />
          </WidthMonitor>
        </div>
      </BackgroundContainer>
      <div className="Home__skills flex-column-center">
        <WidthMonitor>
          <h3
            // ref={ref1}
            className={
              true ? `$"skillsHeader" $"skillsHeaderInView"` : "skillsHeader"
            }
          >
            Interests and Skills
          </h3>
          <div>
            {skills.map((skill, index) => (
              <div className="Home__skills__skill align-center" key={index}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  height={skill.height || "25px"}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </WidthMonitor>
      </div>
      <ContactCard />
    </div>
  );
};
