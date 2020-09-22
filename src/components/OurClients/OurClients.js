import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import "./OurClients.scss";
import data from "./data.json";

export default function OurClients() {
    const clientsPerPage = useMedia(
        ["(min-width: 1600px)", "(min-width: 1200px)", "(min-width: 768px)"],
        [4, 3, 2],
        1
    );

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
                    style={{
                        width: `${100 / clientsPerPage - 1}%`,
                    }}
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

function useMedia(queries, values, defaultValue) {
    const [mediaQueryLists] = useState(
        queries.map((q) => window.matchMedia(q))
    );

    const [_, forceUpdate] = useState();
    const updateNeeded = () => forceUpdate({});

    useEffect(() => {
        mediaQueryLists.forEach((mql) => mql.addListener(updateNeeded));
        return () =>
            mediaQueryLists.forEach((mql) => mql.removeListener(updateNeeded));
    }, []);

    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
}

// function useMedia(queries, values, defaultValue) {
//     const mediaQueryLists = queries.map((q) => window.matchMedia(q));

//     const getValue = () => {
//         const index = mediaQueryLists.findIndex((mql) => mql.matches);
//         return typeof values[index] !== "undefined"
//             ? values[index]
//             : defaultValue;
//     };

//     const [value, setValue] = useState(getValue);

//     useEffect(() => {
//         const handler = () => setValue(getValue);
//         mediaQueryLists.forEach((mql) => mql.addListener(handler));
//         return () =>
//             mediaQueryLists.forEach((mql) => mql.removeListener(handler));
//     }, []);

//     return value;
// }
