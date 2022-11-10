// Packages
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

// Styles
import styles from './Post.module.css'

import posts from '../../data/blog/allposts'


export default function Post() {
    let { postId } = useParams();
    const [post, setPost] = useState({
        "_id": "",
        "title": "",
        "subtitle": "",
        "content": [],
        "updated_date": "",
        "tags": []
    });
    useEffect(() => {
        setPost(posts.find(post => post._id === postId));
    }, [postId])

    return (
        <div className={styles.post}>
            <span className={styles.postHeaderContainer}>
                <span>
                    <Link to='/blog' className={styles.backLink}><i className='fa-solid fa-arrow-left'></i></Link>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                </span>
                <p className={styles.postUpdatedDate}>{post.updated_date}</p>
            </span>
            <p className={styles.postSubtitle}>{post.subtitle}</p>
            {post.content.map((el, index) => {
                // Create img element for "IMAGEURL:" string prefix
                if (el.match(/IMAGEURL:(.*)/m)) return <img className={styles.contentImg} key={index} src={el.replace(/IMAGEURL:(.*)/m, '$1')} alt={`Index ${index}`}></img>;

                // Create code element for "CODE:" string prefix
                else if (el.match(/CODE:(.*)/m)) return <pre className={styles.contentCode} key={index}><code>{el.replace(/CODE:(.*)/m, '$1').trim()}</code></pre>

                // Create h2 element for "HEADING:" string prefix
                else if (el.match(/HEADER:(.*)/m)) return <h2 className={styles.contentHeader} key={index}>{el.replace(/HEADER:(.*)/m, '$1')}</h2>

                // Create p element with content text
                else {
                    let pArr = el.split(/(ITALIC{.*?})/gm);
                    return <p className={styles.contentParagraph} key={index}>{pArr.map((str, i) => {
                        if (str.match(/ITALIC{(.*)}/)) return <span key={i} className={styles.contentItalic}>{str.replace(/ITALIC{(.*)}/, '$1')}</span>;
                        else return <span key={i}>{str}</span>;
                    })}</p>;
                }
            })}
        </div>
    )
}
