import React from "react";
import './Footer.css';

const Footer = () => (
    <footer>
        <div className="footerContent">
            <div className="footerContactConatiner">
                <div>
                    <img src="/assets/images/ParadigmPetProfessionals.png" alt="Paradigm Pet Professionals" className="footerLogo"></img>
                </div>
                <div className="footerContactInfo">
                    <strong>Contact Information</strong>
                    <p>Contact info 1</p>
                    <p>Contact info 2</p>
                    <p>Contact info 3</p>
                    <p>Contact info 4</p>
                </div>
            </div>
            <div className="footerSocialMedia">
                <a href="https://www.facebook.com/"><img src="/assets/images/facebook.png" alt="Facebook" /></a>
                <a href="https://twitter.com/"><img src="/assets/images/twitter.png" alt="Twitter" /></a>
                <a href="https://www.instagram.com/"><img src="/assets/images/instagram.png" alt="Instagram" /></a>
                <a href="https://www.youtube.com/"><img src="/assets/images/youtube.png" alt="YouTube" /></a>
                <a href="https://www.linkedin.com/"><img src="/assets/images/linkedIn.png" alt="LinkedIn" /></a>
            </div>
        </div>
        <div className="footerBottom">
            <p>Official website of the Paradigm Pet Professionals. All information is provided as-is and subject to change.</p>
        </div>
    </footer>
);

export default Footer;