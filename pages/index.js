import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero = dynamic(() => import('../components/hero'))
const Loading = dynamic(() => import('../components/loading'))
const CardCarousel = dynamic(() => import('../components/card-carousel'), {
  suspense: true,
})
const EventCarousel = dynamic(() => import('../components/event-carousel'), {
  suspense: true,
})
const PreviousCarousel = dynamic(() => import('../components/previous-carousel'), {
  suspense: true,
})
const Divider = dynamic(() => import('../components/divider'))
const About = dynamic(() => import('../components/about'), {
  suspense: true,
})
const Contact = dynamic(() => import('../components/contact'), {
  suspense: true,
})

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
    <style jsx>{`
   #news {
      height: 30rem;
   }
   #events {
     height: 61rem;
   }
   @media (min-width: 970px) {
     #news {
       height: 32rem;
     }
     #events {
       height: 64rem;
     }
   }
   @media (min-width: 1300px) {
     #news {
       height: 34rem;
     }
     #events {
       height: 68rem;
     }
   }
   @media (min-width: 1900px) {
     #news {
       height: auto;
     }
     #events {
       height: auto;
     }
   }
`}</style>
      <Head>
        <title>Alpha Games</title>
        <meta name="description" content="Homepage of Alpha Games, a tabletop and card gaming store based near Bury St Edmunds."></meta>
        <link rel="icon" href="/alphaicon.svg" />
      </Head>
      <Hero />
      <section id="news" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="LATEST NEWS" />
        <Suspense fallback={<Loading />}>
        <CardCarousel content={posts} />
        </Suspense>
      </section>
      <section id="events" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="UPCOMING EVENTS" />
        <Suspense fallback={<Loading />}>
        <EventCarousel content={events} />
        </Suspense>
        <Divider text="PREVIOUS EVENTS" />
        <Suspense fallback={<Loading />}>
        <PreviousCarousel content={previousevents} />
        </Suspense>
      </section>
      <section id="about" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="ABOUT US" />
        <Suspense fallback={<Loading />}>
        <About />
        </Suspense>
      </section>
      <section id="contact" style={{ scrollMarginTop: 112, scrollSnapAlign: 'start' }}>
        <Divider text="CONTACT" /> 
        <Suspense fallback={<Loading />}>
        <Contact />
        </Suspense>
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
