import React from "react";
import "./OurServices.scss";
import data from "./data.json";

export default function OurServices() {
    return (
        <div className="our-services">
            <div className="our-services__content">
                <h2 className="h2">Наши услуги</h2>
                <h3 className="h3">Мы специализируемся</h3>
                <div className="our-services__cards">
                    {data.services.map((service, index) => (
                        <div key={index} className="our-services__card">
                            <img
                                className="our-services__card-image"
                                src={service.imageURL}
                                alt="service image"
                            />
                            <span className="our-services__card-text">
                                {service.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
