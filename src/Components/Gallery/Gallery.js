import React from 'react';
import TitleImage from '../TitleImage/TitleImage';
import './Gallery.css';
import GoldKitchen from '../../Images/golden_kitchen.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide1 from '../../Images/slide_1.jpg';
import Slide2 from '../../Images/slide_2.jpeg';
import Slide3 from '../../Images/slide_3.jpg';
import Slide4 from '../../Images/slide_4.jpg';

const Gallery = () => {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: true,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
    };

    return (
        <div className='gallery' id="gallery">
            <TitleImage title="GALLERY" image={GoldKitchen} imageAlt="Gold Kitchen" bgColor="yellow"/>
            <div className="carousel-container">
                <div className='carousel-slick'>
                    <Slider {...settings}>
                        <div>
                            <img src={Slide4} alt='' width="100%"/>
                        </div>
                        <div>
                            <img src={Slide1} alt='' width="100%"/>
                        </div>
                        <div>
                            <img src={Slide3} alt='' width="100%"/>
                        </div>
                        <div>
                            <img src={Slide2} alt='' width="100%"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Gallery;