import React, { Component } from 'react';
import '../css/ContactMe.css';

class ContactMe extends Component {
    render() {
        return (
            <div>
                <section className="contact-me-page" id="contact-me-page">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="column">
                        <form action="#">
                            <div className="field">
                                <div className="field-name">
                                    <input type="text" placeholder="Name" required/>
                                </div>
                                <div className="field-email">
                                    <input type="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" required/>
                            </div>
                            <div className="field-textarea">
                                <textarea cols="30" rows="10" placeholder="Describe Project..." required/>
                            </div>
                            <div>
                                <button className="button" type="submit">Send Message</button>
                            </div>
                            
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default ContactMe;