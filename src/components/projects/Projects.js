// Packages
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import ProjectCard from './ProjectCard';

// Styles
import styles from './Projects.module.css';

// Data
import projects from '../../data/projects';


export default function Projects() {
    const intersectOptions = {
        threshold: 1,
        triggerOnce: false
    }
    const [ref, inView] = useInView({ ...intersectOptions, threshold: 1 });
    const [ref2, inView2] = useInView({ ...intersectOptions, threshold: 1 });

    return (
        <>
            <div className={styles.projects}>
                <div className={styles.projectsWidthContainer}>
                    <h2 ref={ref} className={inView ? `${styles.projectHeader} ${styles.projectHeaderInView}` : styles.projectHeader}>Projects</h2>
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
            <div className={styles.demos}>
                <div className={styles.demosWidthContainer}>
                    <h2 ref={ref2} className={inView2 ? `${styles.projectHeader} ${styles.projectHeaderInView}` : styles.projectHeader}>Demos</h2>
                    
                    {/* FILL WITH JAVASCRIPT DEMOS */}
                    {/* UPDATE CSS ::BEFORE HEIGHT */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
