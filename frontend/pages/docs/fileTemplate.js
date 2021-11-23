import React from 'react';
import Head from 'next/head'
import {MDXRemote} from "next-mdx-remote";
import styles from '../../styles/Home.module.css'

function Trilha({info, content,children}) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Model | {info.title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="#">{info.title}</a>
                    </h1>    
                    <p className={styles.description}>
                        These are the listed DORC files at{' '}
                        <code className={styles.code}>arqs/docs</code>
                    </p>
                </main>
                <MDXRemote {...content}/>
                <footer className={styles.footer}>
                    {children}
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
        </>
    );
}

export default Trilha;