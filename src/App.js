import React, { useEffect, useState } from 'react';

import Splash from './components/Splash'
import Home from './components/Home'
import styles from './App.module.css'

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setSplash(false), 2500);
  }, [])

  return (
    <div className={styles.app}>
      {splash && <Splash />}
      {!splash && <>
        <Home />
        <div className={styles.footer}>
          <h1>Talmage Bergeson</h1>
          <span>
            <p>Last updated Sept 2022</p>
            <p>Feel free to check out this site's GitHub repo <a>here</a>.</p>
          </span>
        </div>
      </>}
    </div>
  )
}
