import React from "react";
import "./home.css";
import { Parallax } from "react-parallax";
import bgImage from '../../assets/home-bg.png';

const Home = () => {
    return (
        <Parallax
            bgImage={bgImage}
            strength={600}
            bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        >
            <section className="home" id="home">
                <div className="home-container container">
                    <div className="home-content">
                        <span className="home-subtitle">Welcome to JavaJam</span>
                        <h1 className="home-title">
                            Follow the Winding Road to JavaJam
                        </h1>
                        <p className="home-description">
                            We're a little out of way, but take a drive in the country down Garrett Bay Road to
                            JavaJam today! Indulge in our locally roasted free-trade coffee and home-made
                            pastries. You'll feel right at home JavaJam!
                        </p>
                        <div className="home-btns">
                            <a href="#menu" className="btn">
                                Check Menu
                            </a>

                            <a href="#menu" className="btn home-btn">
                                Book Table
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
}

export default Home;
