import React from "react";
import "./Styles.css";

const Home = () => (
    <div className="content">
        <section className="sectionLeft">
            <img src="/assets/images/Cat1.jpg" alt="Pet care" className="sectionImage" />
            <div className="sectionText">
                <h1>Welcome to Paradigm Pet Professionals!</h1>
                <p>
                    Pets are nature's gift to humanity. It has been scientifically proven that opening our homes and hearts to a pet increases our longevity and improves our overall quality of life as well as the lives of our pets. At Pet Paradigm Professionals, our mission is to offer resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as well as group presentations designed for veterinary, pet shelter, and pet breeding professionals.
                </p>
                <p>
                    Looking for basic pet care advice for the most common types of pets? Need additional help determining which type of pet is right for you and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new companion.
                </p>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/Dog1.jpg" alt="Adoption" className="sectionImage" />
            <div className="sectionText">
                <h2>Looking for Your New Best Friend?</h2>
                <p>The following organizations can help you find and adopt the perfect companion:</p>
                <ul>
                    <li><a href="https://home-home.org/" target="_blank" rel="noopener noreferrer">General Adoption Resources</a></li>
                    <li><a href="https://www.aspca.org/" target="_blank" rel="noopener noreferrer">ASPCA</a></li>
                    <li><a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/" target="_blank" rel="noopener noreferrer">Fish Rescue</a></li>
                    <li><a href="https://savethesnakes.org/snakerescuecall/" target="_blank" rel="noopener noreferrer">Snake Rescue</a></li>
                    <li><a href="https://ftlob.rescuegroups.org/" target="_blank" rel="noopener noreferrer">Bird Rescue</a></li>
                </ul>
            </div>
        </section>
        <section className="sectionLeft">
            <img src="/assets/images/Bird1.jpg" alt="Adoption process" className="sectionImage" />
            <div className="sectionText">
                <h2>We Can Help You Navigate the Adoption Process</h2>
                <p>
                    We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. Please fill out our contact form to request a consultation. We will contact you within 48 hours to schedule a consultation. All fields are required.
                </p>
                <p>
                    <a href="/contact">Fill out our contact form</a> to get started.
                </p>
            </div>
        </section>
    </div>
);

export default Home;
