import React, { useState } from "react";
import Slider from "./Slider";
import "./Carousel.scss";

export default function Carousel({
    sliderColor = "rgba(255, 255, 255, 0.2)",
    sliderHoverColor = "rgba(255, 255, 255, 0.6)",
    children,
}) {
    const [slide, setSlide] = useState(0);

    const onActiveItemChanged = (index) => {
        setSlide(index);
    };
    return (
        <div className="carousel">
            <div
                className="carousel__content"
                style={{
                    transform: `translateX(-${slide * 100}%)`,
                }}
            >
                {children}
            </div>
            <Slider
                color={sliderColor}
                colorOnHover={sliderHoverColor}
                paginationItemsCount={React.Children.count(children)}
                onActiveItemChanged={onActiveItemChanged}
            />
        </div>
    );
}
