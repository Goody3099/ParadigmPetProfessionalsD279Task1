import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <header>
        <div className="headerLogo">
            <Link to="/">
                <img src="/assets/images/PetLogo.png" alt="Paradigm Pet Professionals Blue/Yellow Dog Logo" className="headerImageLogo" />
            </Link>
        </div>
        <nav className="headerNav">
            <ul className="headerNavLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Cats">Cats</Link></li>
                <li><Link to="/Dogs">Dogs</Link></li>
                <li><Link to="/Birds">Birds</Link></li>
                <li><Link to="/Fish">Fish</Link></li>
                <li><Link to="/SmallAnimals">Small Animals</Link></li>
                <li><Link to="/Pexperts">Pexperts</Link></li>
            </ul>
        </nav>
        <form className="headerSearchForm">
            <input type="text" placeholder="Search..." className="headerSearchInput" />
            <button type="submit" className="headerSearchButton">Search</button>
        </form>
    </header>
);

export default Header;
