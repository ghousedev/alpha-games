import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb"
import Header from '../components/header'
import CardCarousel from '../components/card-carousel'
import EventCarousel from '../components/event-carousel'
import PreviousCarousel from '../components/previous-carousel'
import Divider from '../components/divider'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'

// Parse date and time string into time since unix epoch in ms
function epoch(date) {
  return Date.parse(date)
}

export default function Home({ ...props }) {
  // Destructure props for use
  let events = [...props.events]
  let previousevents = [...props.previousevents]
  let posts = [...props.posts]

  // Sort events into soonest first
  events = events.sort((a, b) =>
    parseInt(epoch(a.end_time)) - parseInt(epoch(b.end_time))
  )

  // Sort previous events 
  previousevents = previousevents.sort((a, b) =>
    parseInt(epoch(b.end_time)) - parseInt(epoch(a.end_time))
  )

  // Sort posts into soonest first
  posts = posts.sort((a, b) =>
    parseInt(epoch(b.posted_on)) - parseInt(epoch(a.posted_on))
  )

  // Limit to cards in carousels to 20
  events = events.slice(0, 21)
  // previousEvents = previousEvents.slice(0, 21)
  posts = posts.slice(0, 21)

  // Set scroll margin by header height
  // TODO

  return (
    <div style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Alpha Games</title>
        <meta name="description" content="Homepage of Alpha Games, a tabletop and card gaming store based near Bury St Edmunds."></meta>
        <link rel="icon" href="/alphaicon.svg" />
      </Head>
      <Hero />
      <section id="news" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="LATEST NEWS" />
        <CardCarousel content={posts} />
      </section>
      <section id="events" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="UPCOMING EVENTS" />
        <EventCarousel content={events} />
        <Divider text="PREVIOUS EVENTS" />
        <PreviousCarousel content={previousevents} />
      </section>
      <section id="about" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="ABOUT US" />
        <About />
      </section>
      <section id="contact" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="CONTACT" />
        <Contact />
      </section>
    </div>
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
  const previousevents = await db
    .collection("previousevents")
    .find({})
    .toArray()
  return {
    props: {
      posts: posts,
      events: events,
      previousevents: previousevents
    },
  };
}
