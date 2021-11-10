import React, { Component } from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <div className="about-me-page" id="about-me-page">
                <section className="about-me">
                    <h1 className="title">About Me</h1>
                    <h2 className="intro">Why You Hire Me!</h2>
                    <hr className="line1"></hr>
                    <hr className="line2"></hr>
                    <hr className="line3"></hr>
                    <hr className="line4"></hr>
                    <p className="desc">A web developer designs, develops, enhances, tests and deploys web applications with an end goal of creating engaging and user-friendly site layout and function. A developer gathers and defines requirements, maintains websites, troubleshoots and fixes bugs, follows best practices and collaborates with other teams.</p>
                    <p className="desc"> I am a quick learner and a very productive person. I have done a few projects and have experience in web development. I can work solo as well as with teams. I will give my best effort knowledge to reach the goals and objectives of the organization.</p>
                    <section className="skills">
                        <div className="container">
                            <div className="technical-skill">
                                <h3>Technical Skills</h3>
                                <div className="each-skills">
                                    <div className="candidators">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Ui/Ux Design</div>
                                                <div className="percentage-num">85%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width:"85%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidators">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Web Design</div>
                                                <div className="percentage-num">70%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width:"70%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidators">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Html/Css</div>
                                                <div className="percentage-num">90%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width:"90%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidators">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Wordpress</div>
                                                <div className="percentage-num">60%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width:"60%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;