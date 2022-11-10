// Packages
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Styles
import styles from './Posts.module.css'

import posts from '../../data/blog/allposts'


export default function Posts() {
    const intersectOptions = {
        threshold: 1,
        triggerOnce: false
    }
    const [ref, inView] = useInView({ ...intersectOptions, threshold: 1 });
    const [ref2, inView2] = useInView({ ...intersectOptions, threshold: 0.5 });

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        setBlogPosts(posts);
    }, [])

    return (
        <div className={styles.postsContainer}>
            <h1 ref={ref} className={inView ? `${styles.postsHeading} ${styles.postsHeadingInView}` : styles.postsHeading}>Recent posts</h1>
            {blogPosts.length && blogPosts.map(post =>
                <div key={post._id} ref={ref2} className={inView2 ? `${styles.post} ${styles.postInView}` : styles.post}>
                    <p className={styles.postDate}>{post.updated_date}</p>
                    <Link to={`/blog/${post._id}/${encodeURIComponent(post.title.toLowerCase())}`} className={styles.postTitle}><h2 className={styles.postTitle}>{post.title}</h2></Link>
                    <p className={styles.postSubtitle}>
                        {
                            // filter out non-text array content elements, reduce into string, take first characters of string
                            post.content.filter(str => !(str.match(/HEADER:(.*)/m) || str.match(/CODE:(.*)/m) || str.match(/IMAGEURL:(.*)/m)))
                            .reduce((prev, curr) => prev + curr)
                            .slice(0, 300) + "..."
                        }
                    </p>
                    <span className={styles.postTags}>
                        {post.tags.map((tag, index) => <p key={index} className={styles.postTag}>{tag}</p>)}
                    </span>
                </div>
            )}
        </div>


    )
}
