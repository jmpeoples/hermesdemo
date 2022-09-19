import Head from 'next/head'
import { Hero } from '@/components/Hero'
import mixpanel from 'mixpanel-browser';

export default function Home() {
  mixpanel.init('acc2963ea857676b29b8a0a67802a22f', {debug: true}); 
  mixpanel.track('Sign Up', {
    'source': "Pat's affiliate site",
    'Opted out of email': true,
  });
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
