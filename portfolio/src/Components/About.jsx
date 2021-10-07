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
                            <img src={self} alt='self' className="self"></img>
                            <div className="cont">
                                <div className="contone">
                                    Front-End Web Developer
                                </div>
                                <div className="conttwo">A website contains of four things Front-End + Back-End + SEO + Seurity.
                                    I believe that I should make myself better in all of these aspects.</div>     
                                <div className="contthree">
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Birthday: 19th October 1999</strong>
                                    <div className="one-one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age: 22</strong>
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Email:  vbhvprksh@gmail.com</strong>
                                    <div className="one-two">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Degree: B.Tech</strong>
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Contact No: 6201143373</strong>
                                    <div className="one-three">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age: 30</strong>
                                    </div>
                                    </div>
                                    <div className="one">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Degree: B.Tech</strong>
                                    <div className="one-four">
                                    <span className="icon"><FaAngleRight></FaAngleRight></span><strong>Age:30</strong>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="intro">
                    SKILLS <hr></hr>
                </div>
                <div className="skills-bar">
                    <div className="skill-bar1">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>JS</span>
                        </div>
                        <div className="progress-line js">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Bootstrap</span>
                        </div>
                        <div className="progress-line bootstrap">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                    </div>
                    <div className="skill-bar2">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>JS</span>
                        </div>
                        <div className="progress-line js">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Bootstrap</span>
                        </div>
                        <div className="progress-line bootstrap">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line react">
                            <span></span>
                        </div>
                    </div>
                
                    </div>
                </div>
                <div className="intro">
                    SKILLS <hr></hr>
                </div>
                <div className="container-box">
                    <div className="line1">
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    </div>
                    <br></br>
                    <div className="line2">
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>
                    <div className="box1">
                        <div className="box-icon"><FaAngleRight></FaAngleRight></div>
                        <div className="box-text">Photoshop</div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
