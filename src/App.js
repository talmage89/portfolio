//packages
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

//components
import Splash from './components/Splash'
import Home from './components/Home'
import styles from './App.module.css'

export default function App() {
  const [splash, setSplash] = useState(true);
  const [animateSplash, setAnimateSplash] = useState(false);

  const {ref, inView} = useInView({
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
      {splash && <div ref={ref}><Splash shouldAnimate={animateSplash}/></div>}
      {!splash && <>
        <Home />
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
