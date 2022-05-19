import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Acceleration from '../components/acceleration'
import Customers from '../components/customer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Klenty</title>
        <meta name="description" content="Klenty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Navbar />
          <Hero />
          <Acceleration />
          <Customers />
      </main>
    </div>
  )
}
