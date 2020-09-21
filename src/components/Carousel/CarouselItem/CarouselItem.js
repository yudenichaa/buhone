import React from "react";
import "./CarouselItem.scss";

export default function CarouselItem({ children }) {
    return <div className="carousel__item">{children}</div>;
}
