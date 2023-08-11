import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.blogWidthContainer}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
