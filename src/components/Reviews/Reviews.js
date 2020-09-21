import React from "react";
import Carousel from "../Carousel";
import "./Reviews.scss";
import data from "./data.json";

export default function Reviews() {
    return (
        <div className="rewiews">
            <div className="reviews__content">
                <h2 className="h2">Отзывы</h2>
                <h3 className="h3">Ваши благодарности</h3>
                <Carousel
                    sliderColor="rgba(0, 95, 163, 0.4)"
                    sliderHoverColor="rgba(0, 95, 163, 1)"
                >
                    {data.reviews.map((review, index) => (
                        <Carousel.Item key={index}>
                            <div className="review">
                                <p className="review__text">{review.text}</p>
                                <div className="review__customer-container">
                                    <img
                                        className="review__customer-image"
                                        src={review.imageURL}
                                    />
                                    <div className="review__customer-info">
                                        <h3 className="review__customer-name">
                                            {review.name}
                                        </h3>
                                        <p className="review__customer-company">
                                            {review.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
