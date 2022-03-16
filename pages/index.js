import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import HowItWork from '../components/HowItWork'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neobank</title>
        <meta name="description" content="Neobank for deposit crypto and get loan for SMEs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-1 place-items-center'>
        <Banner />
        <HowItWork />
      </main>
    </div>
  )
}
