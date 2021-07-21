import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviousCard from "./previous-card";
import Link from 'next/link'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1250, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};
export default function PreviousEventCarousel({content}) {
    return (
      <div className="py-6">
        <Carousel swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px">
            {content.map((data) => (
            <div>
            <PreviousCard event={data}/>
            </div>
            ))}
        </Carousel>
        <button className="ml-4 mt-4 text-yellow-300 font-semibold hover:text-yellow-600">
        <Link href="/all-previous">View all</Link>
        </button>
      </div>
    )
}
