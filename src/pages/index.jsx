import Head from 'next/head'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
    <Head>
        <title>Hermes</title>
        <meta
          name="description"
          content="Notifications."
        />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
      </main>
    </>
  )
}
