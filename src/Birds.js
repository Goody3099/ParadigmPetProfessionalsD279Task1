import React from "react";
import "./Styles.css";

const Birds = () => (
    <div className="content">
        <section className="sectionLeft">
            <img src="/assets/images/Bird1.jpg" alt="Bird 1" className="sectionImage" />
            <div className="sectionText">
                <h1>Bird Care Guide</h1>
                <p>
                    Birds are very intriguing creatures as they can range from birds as small as a Cuban bee hummingbird (about two inches long and a little over 1/20 of an ounce) to as large as an ostrich. While most birds fly, there are some that don't. Birds are amazing and each breed is unique in its own way, particularly when it comes to their relational needs and well-being. Unfortunately, birds can experience sadness and depression just like humans. A number of root causes may be responsible for your bird's depression such as an illness (either physical or mental), losing its companion, or increasingly becoming bored. Some signs to help identify if your bird is experiencing depression may include the following:
                </p>
                <ul>
                    <li>Reduced appetite</li>
                    <li>Becoming increasingly irritable</li>
                    <li>Aggressive behavior</li>
                    <li>Songs have a different, more solemn tone</li>
                </ul>
                <p>
                    Be sure to tell your veterinarian if you see signs of any of these symptoms. Just like many illnesses, identifying and treating the symptoms earlier may drastically increase the lifespan of your birdie.
                </p>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/Bird2.jpg" alt="Bird 2" className="sectionImage" />
            <div className="sectionText">
                <h2>Understanding Bird Behavior</h2>
                <p>
                    Birds have complex behaviors and social needs. It is important to understand their specific breed characteristics and provide appropriate stimulation to keep them happy and healthy. Enriching their environment with toys, perches, and social interaction is crucial for their well-being. Regular vet check-ups and proper nutrition also play significant roles in maintaining their health.
                </p>
            </div>
        </section>
        <section className="sectionLeft">
            <img src="/assets/images/Bird3.jpg" alt="Bird 3" className="sectionImage" />
            <div className="sectionText">
                <h2>Feeding and Nutrition</h2>
                <p>
                    Birds have diverse dietary needs based on their species. A balanced diet typically includes a mix of seeds, fruits, vegetables, and specialized pellets. Be sure to provide fresh water daily and avoid feeding foods that are harmful to birds, such as chocolate or caffeine. Consult with an avian vet to determine the best diet for your specific bird.
                </p>
            </div>
        </section>
        <section className="sectionRight">
            <img src="/assets/images/Bird4.jpg" alt="Bird 4" className="sectionImage" />
            <div className="sectionText">
                <h2>Health and Wellness</h2>
                <p>
                    Regular health check-ups are essential for birds, as they are prone to various diseases. Look for signs of illness such as changes in droppings, feather plucking, or changes in behavior. Prompt veterinary attention can address many health issues early and improve the quality of life for your feathered friend.
                </p>
            </div>
        </section>
    </div>
);

export default Birds;
