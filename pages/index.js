import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb"
import Header from '../components/header'
import CardCarousel from '../components/card-carousel'
import EventCarousel from '../components/event-carousel'
import Divider from '../components/divider'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home({...props}) {
  // Destructure props for use
  const events = [...props.events]
  const posts = [...props.posts]

  return (
    <main className="w-full bg-gray-800">
    <Header/>
      <Head>
        <title>Alpha Games</title>
        <link rel="icon" href="/alphaicon.svg" />
      </Head>
      <Hero/>
      <section id="news">
      <Divider text="NEWS"/>
      <CardCarousel content={posts}/>
      </section>
      <section id="events">
      <Divider text="UPCOMING EVENTS"/>
      <EventCarousel content={events}/>
      <Divider text="PREVIOUS EVENTS"/>
      <CardCarousel content={posts}/>
      </section>
      <section id="about">
      <Divider text="ABOUT US"/>
      <About/>
      </section>
      <section id="contact">
      <Divider text="CONTACT"/>
      <Contact/>
      </section>
      <Footer/>
    </main>
          )
}

// Get data needed to fill components from mongodb instance
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const posts = await db
      .collection("posts")
      .find({})
      .toArray();
  const events = await db
      .collection("events")
      .find({})
      .toArray()
  return {
      props: {
          posts: posts,
          events: events
      },
  };
}
