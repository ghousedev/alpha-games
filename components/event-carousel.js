import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCard from "./event-card";

// Breakpoints for the carousel
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
// Carousel for displaying events on the front page
export default function EventCarousel({content}) {
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
        renderButtonGroupOutside={false}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px">
            {content.map((data) => (
            <div>
            <EventCard event={data}/>
            </div>
            ))}
        </Carousel>
      </div>
    )
}
