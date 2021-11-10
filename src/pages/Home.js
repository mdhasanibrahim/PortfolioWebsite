import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import '../css/Home.css';

const Home = () => {

    const textRef = useRef();

        useEffect(() => {
            init(textRef.current, { 
                showCursor: false, 
                backDelay: 1500,
                strings: ['Web Developer', 'Ui/Ux Designer', 'Content Creator' ] });
        }, []);
    
    return (
        <div className="home-page" id="home-page">
            <section className="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, I'm</div>
                        <div className="text-2">
                            <div className="first-name"><span id="alphabet-1">M</span>
                            <span id="alphabet-2">d</span>
                            <span id="alphabet-3">.</span></div>
                            <div className="middle-name"><span id="alphabet-4">H</span>
                            <span id="alphabet-5">a</span>
                            <span id="alphabet-6">s</span>
                            <span id="alphabet-7">a</span>
                            <span id="alphabet-8">n</span></div>
                            <div className="last-name"><span id="alphabet-9">I</span>
                            <span id="alphabet-10">b</span>
                            <span id="alphabet-11">r</span>
                            <span id="alphabet-12">a</span>
                            <span id="alphabet-13">h</span>
                            <span id="alphabet-14">i</span>
                            <span id="alphabet-15">m</span></div>
                        </div>
                        <div className="text-3">And I'm a <span ref={textRef}></span></div>
                        <div className="btn">
                            <a class="hireMe-btn" href="#">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;