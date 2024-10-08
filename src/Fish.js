import React from "react";
import "./Styles.css";

const Fish = () => (
    <div className="content">
        <section className="sectionLeft">
            <img src="/assets/images/Fish1.jpg" alt="Fish 1" className="sectionImage" />
            <div className="sectionText">
                <h1>Fish Care Guide</h1>
                <p>
                    Fish represent a broad class of aquatic animals that can live in fresh or saltwater, depending on the species. Bringing fish into your home can be an exciting hobby, especially if you intend to breed them, and the presence of a fish tank in your home can induce feelings of peace and tranquility.
                </p>
                <p>
                    Whether you are bringing your fish home for the first time or maintaining your aquarium, it is important to test your water once per week to ensure it is free from toxins that can harm your fish.
                </p>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/Fish2.jpg" alt="Fish 2" className="sectionImage" />
            <div className="sectionText">
                <h2>Freshwater Fish</h2>
                <p>
                    There are several freshwater fish to choose from when setting up your aquarium, but it is best to consult with a “Pexpert” to ensure your fish will get along! No matter the species, ensure your fish are suited for a freshwater environment by investing in a water testing kit. Follow these general water chemistry guidelines to ensure your fish will adapt well to your aquarium and avoid ingesting toxins that can harm or kill your fish:
                </p>
                <ul>
                    <li>pH Level: 6.8–7.6 (7.0 is considered neutral)</li>
                    <li>Ammonia: any level above zero is harmful to fish</li>
                    <li>Nitrates: 5 to 10 ppm</li>
                    <li>Nitrites: less than 0.5 ppm</li>
                </ul>
            </div>
        </section>
        <section className="sectionLeft">
            <img src="/assets/images/Fish3.jpg" alt="Fish 3" className="sectionImage" />
            <div className="sectionText">
                <h2>Saltwater Fish</h2>
                <p>
                    Saltwater fish also offer several options when it comes to choosing among species for your aquarium. As with freshwater fish, consult with a “Pexpert” to ensure your fish will get along and are suited for a saltwater environment. Following these general guidelines to avoid dangerous water conditions and ensure the appropriate salinity level for your fishies:
                </p>
                <ul>
                    <li>Salinity: 1.020–1.028 sg</li>
                    <li>pH Level: 7.6–8.4 (7.0 is considered neutral)</li>
                    <li>Ammonia: any level above 0.1 ppm requires attention</li>
                    <li>Nitrates: 10 to 40 ppm</li>
                    <li>Nitrites: less than 0.2 ppm</li>
                </ul>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/Fish4.jpg" alt="Fish 4" className="sectionImage" />
            <div className="sectionText">
                <h2>Additional Resources</h2>
                <p>
                    For more information on making your tap water safe for your fish, please visit:
                </p>
                <ul>
                    <li><a href="http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish" target="_blank" rel="noopener noreferrer">How to Make Tap Water Safe for Fish</a></li>
                    <li><a href="http://fishbase.org/home.htm" target="_blank" rel="noopener noreferrer">FishBase</a></li>
                </ul>
            </div>
        </section>
    </div>
);

export default Fish;
