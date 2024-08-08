import React from "react";
import coffeShop from "../../assets/coffee-shop.svg";
import experience from "../../assets/coffee-cup.svg"
import coffeCup from "../../assets/coffee-cup.svg";
import chef from "../../assets/chef.svg";
import './stats.css';

const Stats = () => {
    return(
        <section className="stats section">
            <div className="stats-grid container grid">
                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={coffeShop} alt="Coffee Shop" className="stats-img"/>
                    </div>
                    <div>
                        <p className="stats-no">1500</p>
                        <h3 className="stats-title">Total Branches</h3>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={coffeCup} alt="Coffee Cup" className="stats-img"/>
                    </div>
                    <div>
                        <p className="stats-no">240</p>
                        <h3 className="stats-title">Happy Customers</h3>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={chef} alt="Chef" className="stats-img"/>
                    </div>
                    <div>
                        <p className="stats-no">42</p>
                        <h3 className="stats-title">Professional Chefs</h3>
                    </div>
                </div>
                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={experience} alt="Experience" className="stats-img"/>
                    </div>
                    <div>
                        <p className="stats-no">50</p>
                        <h3 className="stats-title">Years Of Experience</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
