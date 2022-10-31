// Packages
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import Splash from './components/misc/Splash'
import { Outlet, useNavigate } from 'react-router-dom';

// Styles
import styles from './App.module.css'


export default function App() {
  const [splash, setSplash] = useState(true);
  const [animateSplash, setAnimateSplash] = useState(false);
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: .8,
  })

  useEffect(() => {
    if (inView) {
      setAnimateSplash(true);
      setTimeout(() => setSplash(false), 2500);
    }
  }, [inView])

  return (
    <div className={styles.app}>
      {splash && <div ref={ref}><Splash shouldAnimate={animateSplash} /></div>}

      {!splash && <>

        <div className={styles.navbar}>
          <div className={styles.navbarWidthContainer}>
            <h1>Talmage Bergeson</h1>
            <span className={styles.navButtons}>
              <button className={styles.navButton} onClick={() => navigate('/')}>About</button>
              <button className={styles.navButton} onClick={() => navigate('/projects')}>Work</button>
              <button className={styles.navButton} onClick={() => navigate('/blog')}>Blog</button>
              <button className={styles.contactButtonInverse} onClick={() => window.scroll({ top: 4220, behavior: "smooth" })} style={{ margin: "0", textTransform: "capitalize" }}>Contact</button>
            </span>
          </div>
        </div>

        <div className={styles.outletContainer}>
          <Outlet></Outlet>
        </div>

        <div className={styles.footer}>
          <h1>Talmage Bergeson</h1>
          <span>
            <p>Updated Sept 2022</p>
            <p>Source code for this site may be viewed <a href='https://github.com/talmage89/portfolio' target="_blank" rel='noreferrer'>here</a></p>
            <p>Designed and developed by Talmage Bergeson</p>
          </span>
        </div>

      </>}

    </div>
  )
}
