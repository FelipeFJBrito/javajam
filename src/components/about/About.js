// About.jsx

import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about-grid container grid">
                <div className="about-img-wrapper">
                    <img className="about-img" src={aboutImg} alt='' />
                </div>
                <div className="about-content">
                    <h2 className="section-title" data-title='About Us'>
                        Fresh Quality And Organic Tasty Coffee House For You
                    </h2>

                    <p className="about-description">
                        Friendly and eclectic — JavaJam Coffee Bar is the perfect place to take a break,
                        enjoy a refreshing beverage, and have a snack or light meal.
                    </p>

                    <div className="about-details grid">
                        <p className="about-details-description">
                            <FiCheck className="about-details-icon" />
                            Specialty Coffee and Organic Tea
                        </p>
                        <p className="about-details-description">
                            <FiCheck className="about-details-icon" />
                            Bagels, Muffins, and Gluten-free Pastries
                        </p>
                        <p className="about-details-description">
                            <FiCheck className="about-details-icon" />
                            Music and Poetry Readings
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    );
}

export default About;
