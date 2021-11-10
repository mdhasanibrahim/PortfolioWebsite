import React, { Component } from 'react';
import '../css/Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-page" id="portfolio-page">
                <section className="portfolio">
                    <h1 className="p-title">Portfolio</h1>
                    <h2 className="p-intro">Latest Project</h2>
                    <hr className="p-line1"></hr>
                    <hr className="p-line2"></hr>
                    <hr className="p-line3"></hr>
                    <hr className="p-line4"></hr>
                </section>
                <div className="port-content">
                    <div className="card" id="card1">
                        <div className="box">
                            <div className="text">Ludo Game</div>
                        </div>
                    </div>
                    <div className="card" id="card2">
                        <div className="box">
                            <div className="text">Student Portal</div>
                        </div>
                    </div>
                    <div className="card" id="card3">
                        <div className="box">
                            <div className="text">Chess Game</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;