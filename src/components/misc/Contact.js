// Packages
import React from 'react';

// Styles
import styles from './Contact.module.css'

// Images
import avatarPhoto from '../../img/personal/IMG_0001.jpg';

export default function Contact() {
    return (
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
                    <a className={styles.contactButton} href="https://www.linkedin.com/in/talmage-bergeson/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
                    <a className={styles.contactButton} href="https://github.com/talmage89" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i>Github</a>
                    <a className={styles.contactButton} href="https://www.instagram.com/_talmage/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i>Instagram</a>
                </span>
            </div>
        </div>
    )
}


