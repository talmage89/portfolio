import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from './ProjectCard.module.css'

export default function ProjectCard(props) {
    // react-intersection-observer
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    // this is a bit of a messy components but it's really just modular styling and react-intersection-observer.
    // all elements with "ref" and conditional classnames have an additional classname if the element is in view.
    // elementText container has inline styling to come in from the left or right depending on which side the img is on.
    return (
        <div className={styles.element} ref={ref}>
            {props.imgOnLeft && <img className={inView ? `${styles.elementImg} ${styles.elementImgInView}` : styles.elementImg} src={props.img} alt="project" />}
            <div className={inView ? `${styles.elementText} ${styles.elementTextInView}` : styles.elementText} style={props.imgOnLeft ? { transform: "translateX(50px)" } : { transform: "translateX(-50px)" }}>
                <p className={styles.textCompleted}>{props.completed}</p>
                <h3 className={styles.textTitle}>{props.title}</h3>
                <p className={styles.textDescription}>{props.description}</p>
                <span className={styles.textTags}>
                    {props.tags.map((tag, index) => <p key={index} className={styles.textTag}>{tag}</p>)}
                </span>
                <span className={styles.textProjectLinks}>
                    {props.github && <a className={styles.textGithub} href={props.github} target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a>}
                    {props.linkToSite && <a className={styles.textLinkToSite} href={props.linkToSite} target="_blank" rel='noreferrer'><i className="fa-solid fa-link"></i></a>}
                </span>
            </div>
            {!props.imgOnLeft && <img className={inView ? `${styles.elementImg} ${styles.elementImgInView}` : styles.elementImg} src={props.img} alt="project" />}
        </div>
    )
}


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