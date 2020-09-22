import React, { useState } from "react";
import "./Slider.scss";
import backButtonImage from "./assets/back-button.svg";
import nextButtonImage from "./assets/next-button.svg";

export default function Slider({
    paginationItemsCount,
    onActiveItemChanged,
    color,
    colorOnHover,
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
            <div key={index} className="slider__pagination-item-container">
                <div
                    className="slider__pagination-item"
                    style={{
                        backgroundColor:
                            activePaginationItem == index
                                ? colorOnHover
                                : color,
                    }}
                    onMouseOver={(event) => {
                        event.target.style.opacity = "1";
                    }}
                    onClick={() => onPaginationItemClicked(index)}
                />
            </div>
        ));

    const [backButtonHover, setBackButtonHover] = useState(false);
    const [nextButtonHover, setNextButtonHover] = useState(false);

    return (
        <div className="slider">
            <div className="slider__pagination">{paginationItems}</div>
            <div className="slider__buttons">
                <button
                    className="slider-button"
                    onClick={onBackButtonClicked}
                    onMouseEnter={() => setBackButtonHover(true)}
                    onMouseLeave={() => setBackButtonHover(false)}
                >
                    <div
                        style={{
                            backgroundColor: backButtonHover
                                ? colorOnHover
                                : color,
                        }}
                        className="slider-button__background"
                    />
                    <img
                        className="slider__button-image"
                        src={backButtonImage}
                    />
                </button>
                <button
                    className="slider-button"
                    onClick={onNextButtonClicked}
                    onMouseEnter={() => setNextButtonHover(true)}
                    onMouseLeave={() => setNextButtonHover(false)}
                >
                    <div
                        style={{
                            backgroundColor: nextButtonHover
                                ? colorOnHover
                                : color,
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
