// Packages
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import Splash from './components/misc/Splash'
import { Outlet, useNavigate } from 'react-router-dom';

// Styles
import styles from './App.module.css'

// Files
import lastUpdatedTextFile from './lastUpdated.txt';

export default function App() {
  // splash animation triggered when element is in view
  const [splash, setSplash] = useState(true);
  const [animateSplash, setAnimateSplash] = useState(false);
  const { ref, inView } = useInView({
    threshold: .8,
  })
  useEffect(() => {
    if (inView) {
      setAnimateSplash(true);
      setTimeout(() => setSplash(false), 2500);
    }
  }, [inView])

  // routing
  const navigate = useNavigate();

  // read date of last git commit to show when source code is updated
  const [updatedDate, setUpdatedDate] = useState();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ]
  fetch(lastUpdatedTextFile)
    .then(r => r.text())
    .then(text => {
      const fullDate = new Date(text);
      setUpdatedDate(`${months[fullDate.getMonth()]} ${fullDate.getFullYear()}`);
    });
  
  function lastUpdatedDate() {

  }

  // render
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
              <button className={styles.contactButtonInverse} onClick={() => navigate('/contact')} style={{ margin: "0", textTransform: "capitalize" }}>Contact</button>
            </span>
          </div>
        </div>

        <div className={styles.outletContainer}>
          <Outlet></Outlet>
        </div>

        <div className={styles.footer}>
          <h1>Talmage Bergeson</h1>
          <span>
            {lastUpdatedDate()}
            <p>Source code for this site may be viewed <a href='https://github.com/talmage89/portfolio' target="_blank" rel='noreferrer'>here</a></p>
            <p>Designed and developed by Talmage Bergeson</p>
          </span>
        </div>
      </>}
    </div>
  )
}
