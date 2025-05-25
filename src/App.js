import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const slides = [
        {
            image: "rcb.avif",
            caption: "ROYAL CHALLENGERS BANGLORE",
        },
        {
            image: "mi.webp",
            caption: "MUMBAI INDIANS",
        },
        {
            image: "srh-in-ipl-.webp",
            caption: "SUNRISES HYDERABAD",
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="App" style={{ width: "800px", margin: "auto", paddingTop: "50px" }}>
            <h2>Image Slideshow</h2>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img
                            src={slide.image}
                            alt={slide.caption}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                        <p style={{ textAlign: "center" }}>{slide.caption}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default App;