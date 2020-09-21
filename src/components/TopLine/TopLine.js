import React from "react";
import "./TopLine.scss";
import logoImage from "./assets/logo.svg";
import phoneImage from "./assets/phone.svg";
import clockImage from "./assets/clock.svg";
import messageImage from "./assets/message.svg";
import pointImage from "./assets/point.svg";

export default function TopLine() {
    return (
        <div className="top-line">
            <div className="top-line__content">
                <div className="top-line__logo">
                    <img
                        className="top-line__logo-image"
                        src={logoImage}
                        alt="logo image"
                    />
                    <span className="top-line__logo-label">BuhOne</span>
                </div>
                <div className="top-line__info-and-menu">
                    <div className="top-line__info">
                        <div className="top-line__info-item">
                            <img
                                className="top-line__info-item-image"
                                src={phoneImage}
                                alt="phone image"
                            />
                            <span className="top-line__info-item-text">
                                8 (111) 222-33-44
                            </span>
                        </div>
                        <div className="top-line__info-item">
                            <img
                                className="top-line__info-item-image"
                                src={clockImage}
                                alt="clock image"
                            />
                            <span className="top-line__info-item-text">
                                Пн-Пт 10:00-18:00
                            </span>
                        </div>
                        <div className="top-line__info-item">
                            <img
                                className="top-line__info-item-image"
                                src={messageImage}
                                alt="message image"
                            />
                            <span className="top-line__info-item-text">
                                order@buhone.ru
                            </span>
                        </div>
                        <div className="top-line__info-item">
                            <img
                                className="top-line__info-item-image"
                                src={pointImage}
                                alt="point image"
                            />
                            <span className="top-line__info-item-text">
                                Невский пр. 130
                            </span>
                        </div>
                    </div>
                    <div className="top-line__menu">
                        <a className="top-line__menu-item" href="#">
                            Главная
                        </a>
                        <a className="top-line__menu-item" href="#">
                            Услуги
                        </a>
                        <a className="top-line__menu-item" href="#">
                            Кейсы
                        </a>
                        <a className="top-line__menu-item" href="#">
                            О компании
                        </a>
                        <a className="top-line__menu-item" href="#">
                            Контакты
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
