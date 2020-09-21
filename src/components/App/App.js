import React from "react";
import "./App.scss";
import TopLine from "../TopLine";
import FirstScreen from "../FirstScreen";
import OurServices from "../OurServices";
import AboutUs from "../AboutUs";
import OurClients from "../OurClients";
import Reviews from "../Reviews";
import Contacts from "../Contacts";
import Footer from "../Footer";

export default function App() {
    return (
        <div className="App">
            <TopLine />
            <FirstScreen />
            <OurServices />
            <AboutUs />
            <OurClients />
            <Reviews />
            <Contacts />
            <Footer />
        </div>
    );
}
