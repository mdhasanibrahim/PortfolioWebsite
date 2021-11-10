import React, { Component } from 'react';
import { FaPaintBrush, FaCode } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import '../css/Service.css';

class Service extends Component {
    render() {
        return (
            <div className="services-page" id="services-page">
                <section className="services">
                    <div>
                        <h2 className="s-title">My Services</h2>
                        <div className="serv-content">
                            <div className="card">
                                <div className="box">
                                    <FaPaintBrush style={{color: "#0b6845", fontSize: "50px"}}/>
                                    <div className="text">Web Design</div>
                                    <p>aja ajsbcakjc jacbakjc jbac kjbcj ja jce gib cjbd ujciuac jnvsj ugeiukj sdvjksbvjs jvsuvhus juhu</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <GiChart style={{strokeWidth: "30", color: "#0b6845", fontSize: "50px"}}/>
                                    <div className="text">Advertising</div>
                                    <p>aja ajsbcakjc jacbakjc jbac kjbcj ja jce gib cjbd ujciuac jnvsj ugeiukj sdvjksbvjs jvsuvhus juhu</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="box">
                                    <FaCode style={{color: "#0b6845", fontSize: "50px"}}/>
                                    <div className="text">App Design</div>
                                    <p>aja ajsbcakjc jacbakjc jbac kjbcj ja jce gib cjbd ujciuac jnvsj ugeiukj sdvjksbvjs jvsuvhus juhu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Service;