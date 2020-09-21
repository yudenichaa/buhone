import React, { useState } from "react";
import "./Contacts.scss";
import phoneImage from "./assets/phone-white.svg";
import messageImage from "./assets/message-white.svg";

export default function Contacts() {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const onUserNameChange = (event) => setUserName(event.target.value);
    const onUserLastNameChange = (event) => setUserLastName(event.target.value);
    const onUserMessageChange = (event) => setUserMessage(event.target.value);

    const onContactsFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="contacts">
            <div className="contacts__content">
                <div className="contacts__info">
                    <h2 className="contacts__header">Связь с нами</h2>
                    <p className="contacts__paragraph">
                        У вас остались вопросы? Напишите нам - мы ответим в
                        ближайшее время!
                    </p>
                    <div className="feedback-info">
                        <div className="feedback-info__item">
                            <img src={phoneImage} />
                            <span className="feedback-info__text">
                                +7 (111) 222-33-44
                            </span>
                        </div>
                        <div className="feedback-info__item">
                            <img src={messageImage} />
                            <span className="feedback-info__text">
                                +7 (111) 222-33-44
                            </span>
                        </div>
                    </div>
                </div>
                <form onSubmit={onContactsFormSubmit} className="contacts-form">
                    <div className="user-info">
                        <div className="user-info__column">
                            <label className="contacts-form__label">Имя</label>
                            <input
                                className="contacts-form__text-input"
                                type="text"
                                placeholder="Иван"
                                value={userName}
                                onChange={onUserNameChange}
                            />
                        </div>
                        <div className="user-info__column">
                            <label className="contacts-form__label">
                                Фамилия
                            </label>
                            <input
                                className="contacts-form__text-input"
                                type="text"
                                placeholder="Иванов"
                                value={userLastName}
                                onChange={onUserLastNameChange}
                            />
                        </div>
                    </div>
                    <div className="contacts-form__user-message">
                        <label className="contacts-form__label">
                            Сообщение
                        </label>
                        <textarea
                            className="contacts-form__message-input"
                            type="text"
                            placeholder="Ваше сообщение"
                            value={userMessage}
                            onChange={onUserMessageChange}
                        />
                    </div>
                    <button
                        className="contacts-form__submit-button"
                        type="submit"
                        onSubmit={onContactsFormSubmit}
                    >
                        Отправить сообщение
                    </button>
                </form>
            </div>
        </div>
    );
}
