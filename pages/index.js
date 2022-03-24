import Head from 'next/head'
import Banner from '../components/Banner'
import HowItWork from '../components/HowItWork'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curlent</title>
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
