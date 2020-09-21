import React from "react";
import "./AboutUs.scss";
import data from "./data.json";

export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us__content">
                <h2 className="h2">О нас</h2>
                <div className="about-us__info">
                    <div className="about-us__company-info">
                        <h3 className="h3">
                            Компания
                            <br />
                            <span className="about-us__company-name">
                                ИвановПром
                            </span>
                        </h3>
                        <p className="about-us__company-description">
                            Lorem Ipsum - это текст-"рыба", часто используемый в
                            печати и вэб-дизайне. Lorem Ipsum является
                            стандартной "рыбой" для текстов на латинице с начала
                            XVI века. В то время некий безымянный печатник
                            создал большую коллекцию размеров и форм шрифтов,
                            используя Lorem Ipsum для распечатки образцов. Lorem
                            Ipsum не только успешно пережил без заметных
                            изменений пять веков, но и перешагнул в электронный
                            дизайн.
                        </p>
                    </div>
                    <div className="about-us__company-achievements">
                        {data.achievements.map((achievement, index) => (
                            <div key={index} className="about-us__achievement">
                                <h2 className="about-us__achievement-header">
                                    {achievement.header}
                                </h2>
                                <p className="about-us__achievement-text">
                                    {achievement.text}
                                </p>
                                <a
                                    className="about-us__achievement-link"
                                    href={achievement.link.URL}
                                >
                                    {achievement.link.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
