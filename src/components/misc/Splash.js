import React from 'react';
import styles from './Splash.module.css';

export default function Splash(props) {
    const { shouldAnimate } = props;
    return (
        <>
            <div className={shouldAnimate ? `${styles.element} ${styles.elementAnimation}` : styles.element}>
                <p className={shouldAnimate ? `${styles.text} ${styles.textAnimation}` : styles.text}>
                    Talmage Bergeson
                </p>
            </div>
        </>
    )
}
