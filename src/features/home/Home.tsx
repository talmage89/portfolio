import * as React from "react";
import { ContactCard } from "../contact/";
import { Footer } from "~/src/components";
import { BackgroundContainer, Button, WidthMonitor } from "~/src/ui";
import { skills, img2028, resume, emojiWaveHand } from "~/src/assets";
import colors from "~/src/scss/style.module.scss";
import "./Home.scss";

const introActions = [
  "build your website",
  "design your project",
  "fix your code",
  "create your mobile app",
  "learn something new",
];

export const Home = () => {
  // const [closeSplash, setCloseSplash] = React.useState(true);
  // const [splash, setSplash] = React.useState<{
  //   open: boolean;
  //   animate: boolean;
  // }>({ open: true, animate: false });
  const [introActionIndex, setIntroActionIndex] = React.useState(0);

  // React.useEffect(() => {
  //   setTimeout(() => setSplash((p) => ({ ...p, animate: true })), 1500);
  //   setTimeout(() => setSplash((p) => ({ ...p, open: false })), 2500);
  // }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIntroActionIndex((prev) => (prev + 1) % introActions.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  function openPage(url: string) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="Home flex-column">
        <BackgroundContainer angle={300} percentage={50} color={colors.green10}>
          <div className="Home__intro flex-column-center">
            <WidthMonitor>
              <span className="align-center">
                <h1>Hello!</h1>
                <img
                  className="Home__intro__emojiHand"
                  src={emojiWaveHand}
                  alt=""
                />
              </span>
              <h1>I'm a frontend developer</h1>
              <h3 className="Home__intro__actionText">
                Work with me to{" "}
                <span className="highlight-underlay" key={introActionIndex}>
                  {introActions[introActionIndex]}
                </span>
              </h3>
              <span className="align-center">
                <Button
                  onClick={() =>
                    openPage("https://www.linkedin.com/in/talmage-bergeson/")
                  }
                >
                  LinkedIn
                </Button>
                <Button
                  onClick={() => openPage("https://github.com/talmage89")}
                >
                  Github
                </Button>
              </span>
            </WidthMonitor>
          </div>
          <div className="Home__about flex-column-center">
            <WidthMonitor className="flex-space-between">
              <div>
                <h3 className="aboutTitle">About me</h3>
                <p>
                  I'm a frontend developer at Start Studio, a software
                  development team based in Utah. I work with React, Angular,
                  and Flutter to build modern web applications.
                </p>
                <p>
                  I'm constantly researching new topics and teaching myself some
                  random skill to accomplish my goals. I'm currently learning
                  about computer networking and studying for the CompTIA
                  Network+ certification.
                </p>
                <p>
                  I also consistently work on personal projects, which you can
                  find on my Github. I build websites for others, work on games,
                  and learn new coding languages.
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
                src={img2028}
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
                <div
                  className="Home__skills__skill align-center"
                  key={index}
                  onClick={() => openPage(skill.link)}
                >
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
      <Footer />
    </>
  );
};
