import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Header() {
    return (
        <div style={{marginTop:'43px'}}>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} swipeable={true} autoFocus={true} showStatus={true} showThumbs={false} interval={2000} transitionTime={500} swipeScrollTolerance={5}>
        <div>
            <img src="./1.jpg" height="600px" alt="title1" />
        </div>
        <div>
            <img src="./2.jpg" height="600px" alt="title2" />
        </div>
        <div>
            <img src="./3.jpg" height="600px"  alt="title3" />
        </div>
    </Carousel>
    </div>
    )
}
