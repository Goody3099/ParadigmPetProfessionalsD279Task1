import React, { useState } from "react";
import "./Pexperts.css";

const Pexperts = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        timeZone: "",
        petName: "",
        petType: "",
        petAge: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactFormSection">
                <h2>Your Information</h2>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="timeZone">Time Zone</label>
                    <input
                        type="text"
                        id="timeZone"
                        name="timeZone"
                        value={formData.timeZone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="contactFormSection">
                <h2>Your Pet's Information</h2>
                <div className="formGroup">
                    <label htmlFor="petName">Pet's Name</label>
                    <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="petType">Pet's Type</label>
                    <input
                        type="text"
                        id="petType"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="petAge">Pet's Age</label>
                    <input
                        type="number"
                        id="petAge"
                        name="petAge"
                        value={formData.petAge}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <button type="submit" className="contactFormButton">Contact a Pexpert</button>
        </form>
    );
};

export default Pexperts;
