// Packages
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

// Components
import Contact from '../misc/Contact';

// Styles
import styles from './Home.module.css'

// Files
import skills from '../../data/skills'
import aboutPhoto from '../../img/personal/IMG_0543.jpeg';
import resume from '../../img/personal/Talmage_Bergeson_Resume.pdf'


export default function Home() {
    const intersectOptions = {
        threshold: 1,
        triggerOnce: true
    }
    const [ref1, inView1] = useInView(intersectOptions);
    const [ref2, inView2] = useInView({ ...intersectOptions, threshold: .8 });

    const [skillsButtonStyle, setSkillButtonStyle] = useState(styles.skillsButton);
    useEffect(() => {
        if (inView2) setSkillButtonStyle(`${styles.skillsButton} ${styles.skillsButtonInView}`)
    }, [inView2])


    return (
        <div className={styles.home}>

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

            <Contact />
        </div>
    )
}
