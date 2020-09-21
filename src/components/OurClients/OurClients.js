import React from "react";
import Carousel from "../Carousel";
import "./OurClients.scss";
import data from "./data.json";

export default function OurClients({ clientsPerPage = 4 }) {
    const clients = [];
    for (
        let page = 0;
        page < Math.ceil(data.clients.length / clientsPerPage);
        ++page
    ) {
        const clientsForPage = [];
        for (
            let clientNumber = 0;
            clientNumber < clientsPerPage;
            ++clientNumber
        ) {
            const clientIndex = page * clientsPerPage + clientNumber;
            if (clientIndex >= data.clients.length) break;
            clientsForPage.push(
                <img
                    key={clientIndex}
                    className="client-logo"
                    src={data.clients[clientIndex].imageURL}
                />
            );
        }
        clients.push(
            <Carousel.Item key={page}>
                <div className="clients__logos">{clientsForPage}</div>
            </Carousel.Item>
        );
    }

    return (
        <div className="clients">
            <div className="clients__content">
                <h2 className="h2">Наши клиенты</h2>
                <h3 className="h3">С нами работают</h3>
                <Carousel
                    sliderColor="rgba(0, 95, 163, 0.4)"
                    sliderHoverColor="rgba(0, 95, 163, 1)"
                >
                    {clients}
                </Carousel>
            </div>
        </div>
    );
}
