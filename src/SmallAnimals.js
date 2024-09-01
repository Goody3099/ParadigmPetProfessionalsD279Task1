import React from "react";
import "./Styles.css";

const SmallAnimals = () => (
    <div className="content">
        <section className="sectionLeft">
            <img src="/assets/images/SmallAnimals1.jpg" alt="Small Animal 1" className="sectionImage" />
            <div className="sectionText">
                <h1>Small Animals Care Guide</h1>
                <p>
                    Sometimes we want a pet in our life but think it’s impossible because we are not home enough to take care of it, or we don’t have enough room. Consider adopting a small animal such as a hermit crab, mouse, gerbil, hamster, guinea pig, or even a chinchilla! Depending on which type of animal you adopt, you can provide a comfortable environment using anything from small to large cages or glass aquariums. You will also need to provide amenities for your new pet, such as bedding or substrate, toys, an exercise wheel, a water dish or drip bottle, a food dish, and grooming equipment. You also need to consider if your new pet will need a friend or if it will be happy living alone. Our “Pexperts” are here to help you decide which pet is right for you and how to provide them with a happy home. Schedule a consultation with us today!
                </p>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/SmallAnimals2.jpg" alt="Small Animal 2" className="sectionImage" />
            <div className="sectionText">
                <h2>Resources for Small Animals</h2>
                <p>Here are some resources to get you started:</p>
                <ul>
                    <li><a href="https://www.animalhumanesociety.org/adoption/guinea-pig-care" target="_blank" rel="noopener noreferrer">Guinea Pig Care</a></li>
                    <li><a href="https://www.bluecross.org.uk/pet-advice/caring-your-mouse" target="_blank" rel="noopener noreferrer">Mouse Care</a></li>
                    <li><a href="https://pethermitcrabs.org/cage-habitat/" target="_blank" rel="noopener noreferrer">Hermit Crab Care</a></li>
                    <li><a href="https://chinchillacare.org/cage-habitat/" target="_blank" rel="noopener noreferrer">Chinchilla Care</a></li>
                    <li><a href="https://petgerbils.org/cage-habitat/" target="_blank" rel="noopener noreferrer">Gerbil Care</a></li>
                    <li><a href="https://www.pdsa.org.uk/taking-care-of-your-pet/looking-after-your-pet/small-pets/the-ideal-home-for-your-hamster" target="_blank" rel="noopener noreferrer">Hamster Care</a></li>
                </ul>
            </div>
        </section>
    </div>
);

export default SmallAnimals;
