import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head'
// import Link from 'next/link';
import styles from '../../styles/Home.module.css'

function Lista({posts}) {
    return (
      <div className={styles.container}>
      <Head>
        <title>Model Trilhas Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Listed DORC Files!</a>
        </h1>

        <p className={styles.description}>
          These are the listed DORC files at{' '}
          <code className={styles.code}>arqs/docs</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post, id) => (
              <div key={id} className={styles.card}>
                <a href={`/docs/` + post.frontMatter.slug} >
                  <h3>{post.frontMatter.title}</h3>
                  <p>Learn about DORC!</p>
                </a>
              </div>
          ))}
    
          
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
        </footer>
      </div>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('arqs/docs'));
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('arqs/docs', filename), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
  
    return {
      props: {
        posts
      }
    }
  }

export default Lista;