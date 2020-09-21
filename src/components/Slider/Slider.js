import React, { useState } from "react";
import "./Slider.scss";
import backButtonImage from "./assets/back-button.svg";
import nextButtonImage from "./assets/next-button.svg";

export default function Slider({
    paginationItemsCount,
    onActiveItemChanged,
    color = "#ffffff",
}) {
    const [activePaginationItem, setActivePaginationItem] = useState(0);

    const onNextButtonClicked = () => {
        const nextActivePaginationItem =
            activePaginationItem == paginationItemsCount - 1
                ? 0
                : activePaginationItem + 1;

        setActivePaginationItem(nextActivePaginationItem);
        onActiveItemChanged(nextActivePaginationItem);
    };

    const onBackButtonClicked = () => {
        const nextActivePaginationItem =
            activePaginationItem == 0
                ? paginationItemsCount - 1
                : activePaginationItem - 1;
        setActivePaginationItem(nextActivePaginationItem);
        onActiveItemChanged(nextActivePaginationItem);
    };

    const onPaginationItemClicked = (index) => {
        setActivePaginationItem(index);
        onActiveItemChanged(index);
    };

    const paginationItems = new Array(paginationItemsCount)
        .fill()
        .map((_, index) => (
            <div
                key={index}
                className="slider__pagination-item"
                style={{
                    backgroundColor: color,
                    opacity: activePaginationItem == index ? 1 : 0.4,
                }}
                onClick={() => onPaginationItemClicked(index)}
            />
        ));

    return (
        <div className="slider">
            <div className="slider__pagination">{paginationItems}</div>
            <div className="slider__buttons">
                <button className="slider-button" onClick={onBackButtonClicked}>
                    <div
                        style={{
                            backgroundColor: color,
                        }}
                        className="slider-button__background"
                    />
                    <img
                        className="slider__button-image"
                        src={backButtonImage}
                    />
                </button>
                <button className="slider-button" onClick={onNextButtonClicked}>
                    <div
                        style={{
                            backgroundColor: color,
                        }}
                        className="slider-button__background"
                    />
                    <img
                        className="slider__button-image"
                        src={nextButtonImage}
                    />
                </button>
            </div>
        </div>
    );
}
