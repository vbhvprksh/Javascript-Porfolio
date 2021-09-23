import React from 'react';
import '../css/Home/home.css';
import bg from '../images/1.svg';

import { FaFacebook, FaGithub, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";






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
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
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
                        <img src={bg} alt='image'></img>
                    </div>
                    
            </div>
        </div>
    )
}