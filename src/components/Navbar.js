import React, {useState} from 'react';
import { GrMenu } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
    function refreshPage(){
        window.location.reload(false);
    }

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="#home-page">Portfo<span>lio.</span></a></div>
                         <div className="menu" id={showLinks ? "hidden" : ""}>
                            <a onClick={()=> setShowLinks(false)} href="#home-page">Home</a>
                            <a onClick={refreshPage} href="#about-me-page">About Me</a>
                            <a onClick={()=> setShowLinks(false)} href="#services-page">Service</a>
                            <a onClick={()=> setShowLinks(false)} href="#portfolio-page">Portfolio</a>
                            <a onClick={()=> setShowLinks(false)} href="#contact-me-page">Contact Me</a>
                        </div>
                        <button className="nav-btn" onClick={()=> setShowLinks(!showLinks)}><GrMenu className="menu-btn"/></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;