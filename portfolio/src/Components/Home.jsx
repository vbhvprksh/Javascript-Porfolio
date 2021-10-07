import React from 'react';
import '../css/Home/home.css';
import bg from '../images/1.svg';
import {Link} from "react-router-dom";
import { FaGithub, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';





export default function Home() {
    return (
        <div className='home'>
            <div className="container">
                <div className="details">
                    <div className="name">
                    <h1>VAIBHAV PRAKASH</h1>
                    </div>
                    <div className="position">
                        <h2>I'm a Passionate <u>Web developer</u> pursuing B.tech from<br/>
                        <i>MIT ADT University</i>.</h2>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul>
                            <Link to='/'><li className="one">Home</li></Link>
                            <Link to='/about'><li className="two">About</li></Link>
                            <Link to='/resume'><li className="three">Resume</li></Link>
                            <Link><li className="four">Services</li></Link>
                            <Link to='/contact'><li className="five">Contact</li></Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="button">
                        <div className="icon">
                            <FaGithub></FaGithub>
                        </div>
                    </div><div className="button">
                        <div className="icon">
                            <FaWhatsapp></FaWhatsapp>
                        </div>
                    </div><div className="button">
                        <div className="icon">
                            <FaTwitter></FaTwitter>
                        </div>
                    </div><div className="button">
                        <div className="icon">
                            <FaTelegram></FaTelegram>
                        </div>
                    </div>
                </div>
                    <div className="image">
                        <img src={bg} alt='image' className='pic'></img>
                    </div>
            </div>
        </div>
    )
}

