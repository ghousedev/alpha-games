import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "./post-card";
import Link from 'next/link'

// Breakpoints for carousel
const responsive = {
  superLargeDesktop: {
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
// Carousel for displaying news posts on the front page
export default function CardCarousel({content}) {
    return (
      <div className="py-6">
        <Carousel swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px">
            {content.map((data) => (
            <div>
            <PostCard post={data}/>
            </div>
            ))}
        </Carousel>
        <button className="ml-4 mt-4 text-yellow-300 font-semibold hover:text-yellow-600">
        <Link href="/all-posts">View all</Link>
        </button>
      </div>
    )
}
