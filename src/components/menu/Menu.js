import React from "react";
import { menu } from '../../Data';
import './menu.css'

const Menu = () => {
    return (
        <section className="menu section">
            <h2 className="section-title" data-title="Our Menu">
                Check Our Menu
            </h2>
            <div className="menu-grid container grid">
                {menu.map(({ img, title, description, price }, index) => {
                    return (
                        <div className="menu-item grid" key={index}>
                            <div className="menu-img-wrapper">
                                <img src={img} alt={title} className="menu-img" />
                            </div>
                            <div className="menu-data">
                                <div>
                                    <h3 className="menu-title">{title}</h3>
                                    <p className="menu-description">{description}</p>
                                </div>
                                <span className="menu-price">
                                    ${price}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Menu;
