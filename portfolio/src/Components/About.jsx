import React from 'react';
import '../css/About/about.css';
import self from '../images/about-me.jpeg';
import { FaAngleRight  } from 'react-icons/fa';


function About() {
    return (
        <div className="about" id="about">
            <header>
                <h1 className="logo">Vaibhav Prakash</h1>
                <nav>
                    <ul className="nav_links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Servies</li>
                        <li>Contact</li>
                    </ul>
                </nav>    
            </header>
            <div className="container1">
                    <div className="intro">
                        ABOUT <hr></hr>
                    </div>
                    <div className="more">Learn More About Me</div>
                    <div className="big-container">
                        <div className="img-container">
                            <img src={self} alt='image' className="self"></img>
                            <div className="cont">
                                <div className="contone">
                                    Front-End Web Developer
                                </div>
                                <div className="conttwo">A website contains of four things Front-End + Back-End + SEO + Seurity.
                                    I believe that I should make myself better in all of these aspects.</div>     
                                <div className="contthree">
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Birthday:</strong>19th October 1999.
                                    <div className="one-one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age:</strong>30.
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Email:</strong>vbhvprksh@gmail.com
                                    <div className="one-two">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age:</strong>30.
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Contact No:</strong>6201143373.
                                    <div className="one-three">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age:</strong>30.
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Degree:</strong>B.Tech.
                                    <div className="one-four">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age:</strong>30.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default About
