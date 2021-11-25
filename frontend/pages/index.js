import Head from 'next/head'
import '../styles/globals.css';
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Model Trilhas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">The Model!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>arqs/docs</code>
        </p>

        <div className={styles.grid}>
          <a href="/docs/listing" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about DORC.</p>
          </a>

          <a href="#" className={styles.card} onClick={() => {
            alert("Oops! Sorry, we're not that ready yet.")
          }}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="#" className={styles.card} onClick={() => {
            alert("Oops! Sorry, we're not that ready yet.")
          }}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a  href="#" className={styles.card} onClick={() => {
            alert("Oops! Sorry, we're not that ready yet.")
          }}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
  )
}
