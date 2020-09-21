import React from "react";
import Carousel from "../Carousel";
import "./FirstScreen.scss";
import data from "./data.json";

export default function FirstScreen() {
    return (
        <div className="first-screen">
            <div className="first-screen__content">
                <Carousel>
                    {data.slides.map((slide, index) => (
                        <Carousel.Item key={index}>
                            <h2 className="first-screen__header">
                                {slide.title}
                            </h2>
                            <button className="first-screen__action_button">
                                Наша презентация
                            </button>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
