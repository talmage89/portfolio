//packages
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

//components, styles
import ProjectCard from './ProjectCard';
import styles from './Home.module.css'

//data
import projects from '../data/projects';
import skills from '../data/skills'

//personal images, resume
import aboutPhoto from '../img/personal/IMG_0543.jpeg';
import avatarPhoto from '../img/personal/IMG_0001.jpg';
import resume from '../img/personal/Talmage_Bergeson_Resume.pdf'


export default function Home() {
    const intersectOptions = {
        threshold: 1,
        triggerOnce: true
    }
    const [ref1, inView1] = useInView(intersectOptions);
    const [ref2, inView2] = useInView({ ...intersectOptions, threshold: .5 });
    const [ref3, inView3] = useInView({ ...intersectOptions, threshold: 1 });

    const [skillsButtonStyle, setSkillButtonStyle] = useState(styles.skillsButton);
    useEffect(() => {
        if (inView2) setSkillButtonStyle(`${styles.skillsButton} ${styles.skillsButtonInView}`)
    }, [inView2])


    return (
        <div className={styles.home}>

            <div className={styles.navbar}>
                <div className={styles.navbarWidthContainer}>
                    <h1>Talmage Bergeson</h1>
                    <span className={styles.navButtons}>
                        <button className={styles.navButton} onClick={() => window.scroll({ top: 550, behavior: "smooth" })}>About me</button>
                        <button className={styles.navButton} onClick={() => window.scroll({ top: 1650, behavior: "smooth" })}>Projects</button>
                        <button className={styles.contactButtonInverse} onClick={() => window.scroll({ top: 4220, behavior: "smooth" })} style={{ margin: "0", textTransform: "capitalize" }}>Contact</button>
                    </span>
                </div>
            </div>

            <div className={styles.introAndAboutWidthContainer}>
                <div className={styles.intro}>
                    <span className={styles.introTitleContainer}>
                        <h1 className={styles.introTitle}>Hello!</h1>
                        <p className={styles.introWavingHandEmoji}>👋</p>
                    </span>
                    <h1 className={styles.introHeader}>I'm a developer and an artist</h1>
                    <h2 className={styles.introSubheader}>I find web projects, and <span className={styles.subheaderHighlight}>build them</span></h2>
                    <p className={styles.introDescription}>Web developer, problem solver, self-starter, music maker, photo taker</p>
                    <div className={styles.introButtons}>
                        <a className={styles.contactButton} href="https://www.linkedin.com/in/talmage-bergeson/" target="_blank" rel='noreferrer'>LinkedIn</a>
                        <a className={styles.contactButton} href="https://github.com/talmage89" target="_blank" rel='noreferrer'>Github</a>
                        <a className={styles.contactButton} href="https://www.instagram.com/_talmage/" target="_blank" rel='noreferrer'>Instagram</a>
                    </div>
                </div>

                <div className={styles.about}>
                    <div className={styles.aboutContent}>
                        <h2 className={styles.aboutTitle}>About me</h2>
                        <p>Student at Mountainland Applied Technical College studying web programming and development.</p>
                        <p>Budding programmer with an unsatiated desire to discover new concepts, languages, and technologies.</p>
                        <p>I am driven by growth and results - I enjoy tackling seemingly insurmountable problems and projects. I love to design and to teach myself new concepts.</p>
                        <a className={styles.aboutResumeLink} href={resume} download="Talmage_Bergeson_Resume">Download my resume</a>
                    </div>
                    <img src={aboutPhoto} alt="A stunning young man looking for a web development job. Contact him today using the 'contact' button on the top of the page." className={styles.aboutPhoto} />
                </div>
            </div>

            <div className={styles.skills}>
                <div className={styles.skillsWidthContainer}>
                    <h2 ref={ref1} className={inView1 ? `${styles.skillsHeader} ${styles.skillsHeaderInView}` : styles.skillsHeader} >Interests and Skills</h2>
                    <div ref={ref2} className={styles.skillsContainer}>
                        {skills.map((skill, index) => {
                            return (
                                <div className={skillsButtonStyle} key={index}>
                                    <img className={styles.skillsButtonImg} src={skill.img} alt={skill.name} height={skill.height || "25px"} />
                                    <p className={styles.skillsButtonText}>{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.projects}>
                <div className={styles.projectsWidthContainer}>
                    <h2 ref={ref3} className={inView3 ? `${styles.projectHeader} ${styles.projectHeaderInView}` : styles.projectHeader}>Projects</h2>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                completed={project.completed}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                github={project.github}
                                linkToSite={project.linkToSite}
                                img={project.img}
                                imgOnLeft={project.imgOnLeft}
                            />
                        )
                    })}
                    <span className={styles.centeringContainer}><a className={`${styles.contactButtonInverse} ${styles.projectSeeMoreButton}`} href="https://github.com/talmage89" target="_blank" rel='noreferrer'>See More on Github</a></span>
                </div>
            </div>

            <div className={styles.contact}>
                <div className={styles.contactWidthContainer}>
                    <h2 className={styles.contactHeader}>Contact</h2>
                    <p className={styles.contactSubheader}>If you have any questions or would like to collaborate with me, please reach out.</p>
                    <span className={styles.contactInfoCard}>
                        <div className={styles.infoCardPhoto} style={{ backgroundImage: `url(${avatarPhoto})` }} />
                        <span className={styles.infoCardTextContainer}>
                            <p className={styles.infoCardTextName}>Talmage Bergeson</p>
                            <p className={styles.infoCardTextEmail}>talmage.bergeson@gmail.com</p>
                        </span>
                    </span>
                    <span className={styles.contactButtons}>
                        <a className={styles.contactButton} href="https://www.linkedin.com/in/talmage-bergeson/" target="_blank" rel='noreferrer'><i class="fa-brands fa-linkedin-in"></i>LinkedIn</a>
                        <a className={styles.contactButton} href="https://github.com/talmage89" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i>Github</a>
                        <a className={styles.contactButton} href="https://www.instagram.com/_talmage/" target="_blank" rel='noreferrer'><i class="fa-brands fa-instagram"></i>Instagram</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
