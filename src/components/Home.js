//packages
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

//components, styles
import ProjectCard from './ProjectCard';
import styles from './Home.module.css'

//data
import projects from '../data/projects';
import skills from '../data/skills'

//images
import aboutPhoto from '../img/personal/IMG_0543.jpeg';
import avatarPhoto from '../img/personal/IMG_0001.jpg';


export default function Home() {
    const intersectOptions = {
        threshold: 1,
        triggerOnce: true
    }
    const [ref1, inView1] = useInView(intersectOptions);
    const [ref2, inView2] = useInView({ ...intersectOptions, threshold: 1 });
    const [ref3, inView3] = useInView({ ...intersectOptions, threshold: 1 });

    const [skillsButtonStyle, setSkillButtonStyle] = useState(styles.skillsButton);
    useEffect(() => {
        if (inView2) setSkillButtonStyle(`${styles.skillsButton} ${styles.skillsButtonInView}`)
    }, [inView2])


    return (
        <div className={styles.home}>

            <div className={styles.navbar}>
                <h1>Talmage Bergeson</h1>
                <span className={styles.navButtons}>
                    <button className={styles.navButton}>About me</button>
                    <button className={styles.navButton}>Projects</button>
                    <button className={`${styles.navButton} ${styles.contactButton}`} style={{ margin: "0" }}>Contact</button>
                </span>
            </div>

            <div className={styles.intro}>
                <span className={styles.introTitleContainer}>
                    <h1 className={styles.introTitle}>Hello!</h1>
                    <p className={styles.introWavingHandEmoji}>👋</p>
                </span>
                <h1 className={styles.introHeader}>I'm a developer and artist</h1>
                <h2 className={styles.introSubheader}>I envision projects, and <span className={styles.subheaderHighlight}>build them</span></h2>
                <p className={styles.introDescription}>Web developer, problem solver, music maker, photo taker</p>
                <div className={styles.introButtons}>
                    <button className={styles.contactButton}>LinkedIn</button>
                    <button className={styles.contactButton}>Github</button>
                    <button className={styles.contactButton}>Instagram</button>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.aboutTitle}>About me</h2>
                    <p>Student at Mountainland Applied Technical College studying web programming and development.</p>
                    <p>Budding programmer with an unsatiated desire to learn new concepts, languages, and technologies.</p>
                    <p>I am driven by team environments where we tackle challenging issues. I love creating and building.</p>
                    <button className={styles.aboutResumeLink} href="#">Download my resume</button>
                </div>
                <img src={aboutPhoto} alt="A stunning young man looking for a web development job. Contact this human today using the 'contact' button on the top of the page." className={styles.aboutPhoto} />
            </div>
            <div className={styles.skills}>
                <h2 ref={ref1} className={inView1 ? `${styles.skillsHeader} ${styles.skillsHeaderInView}` : styles.skillsHeader} >Interests and Skills</h2>
                <div ref={ref2} className={styles.skillsContainer}>
                    {skills.map((skill, index) => {
                        return (
                            <div className={skillsButtonStyle} key={index}>
                                <img className={styles.skillsButtonImg} src={skill.img} alt={skill.name} height="25"/>
                                <p className={styles.skillsButtonText}>{skill.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.projects}>
                <h2 ref={ref3} className={inView3 ? `${styles.projectHeader} ${styles.projectHeaderInView}` : styles.projectHeader}>Projects</h2>
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            completed={project.completed}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                            linkToSite={project.linkToSite}
                            img={project.img}
                            imgOnLeft={project.imgOnLeft}
                        />
                    )
                })}
                <span className={styles.centeringContainer}><button className={styles.seeMoreButton}>See More on Github</button></span>
            </div>

            <div className={styles.contact}>
                <h2 className={styles.contactHeader}>Contact</h2>
                <p className={styles.contactSubheader}>If you have any questions about my work or would like to collaborate, please reach out.</p>
                <span className={styles.contactInfoCard}>
                    <div className={styles.infoCardPhoto} style={{ backgroundImage: `url(${avatarPhoto})` }} />
                    <span className={styles.infoCardTextContainer}>
                        <p className={styles.infoCardTextName}>Talmage Bergeson</p>
                        <p className={styles.infoCardTextEmail}>talmage.bergeson@gmail.com</p>
                    </span>
                </span>
                <span className={styles.contactButtons}>
                    <button className={styles.contactButton}><i class="fa-brands fa-linkedin-in"></i>LinkedIn</button>
                    <button className={styles.contactButton}><i class="fa-brands fa-github"></i>Github</button>
                    <button className={styles.contactButton}><i class="fa-brands fa-instagram"></i>Instagram</button>
                </span>
            </div>
        </div>
    )
}
