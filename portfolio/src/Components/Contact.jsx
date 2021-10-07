import React from "react";
import '../css/Contact/Contact.css';
import { FaAngleRight  } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id='contact' className="contact">
            <div className="about-container">
                <div className="intro">
                        Contact <hr></hr>
                    </div>
                    <div className="more">Contact Me</div>
                <div className="contact-box">
                    <div className="line1">
                        <div className="box1">
                            <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                            <div className="box-text">My Address
                            <div className="box-bottom-text">Pune,Maharashtra</div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                            <div className="box-text">My Address
                            <div className="box-bottom-text">Pune,Maharashtra</div>
                            </div>
                        </div>
                        
                    
                    </div>

                    <div className="line2">
                        <div className="box1">
                            <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                            <div className="box-text">My Address
                            <div className="box-bottom-text">Pune,Maharashtra</div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                            <div className="box-text">My Address
                            <div className="box-bottom-text">Pune,Maharashtra</div>
                            </div>
                        </div>
                        
                    
                    </div>
                
                <div className="contact-form">
                    <div className="line1">
                        <input className="name" name="name" placeholder="Enter Your Name"></input>
                        <input className="email" name="email" placeholder="Enter Your Name"></input>  
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
