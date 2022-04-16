import React from 'react';

import '../App.js';
import '../index.css';
import '../footer.css';

import UConnLogo from '../assets/images/UConn-Logo.jpg';
import UConnHealthLogo from '../assets/images/UConn-Health.png';
import YaleLogo from '../assets/images/Yale-Logo.png';
import MSULogo from '../assets/images/MSU-Logo.png';

import Avatar from '../assets/images/profilePic.jpg';


const About = () => {
    return(
        <React.Fragment>
            <div className='containeR'>
                <div className='row'>
                    <div className='card'>
                        <div className='card-bodyy'>
                            <div className='row abstract-back'>
                                <img className='avatar' src={Avatar} alt="My-face" />
                            </div>
                        </div>
                        
                        <br></br>

                        <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />
                                <div className='grid-container'>
                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of Connecticut, Storrs, CT</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://bootcamp.uconn.edu/coding/' target='_blank' rel="noreferrer"><img className='university-logo' src={UConnLogo} alt="UConn-Logo" /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>UCONN Medical Center, Farmington, CT</div>
                                        <div className='title-concentration'>Radiology Residency</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://health.uconn.edu//' target='_blank' rel="noreferrer"><img className='university-logo' src={UConnHealthLogo} alt="UConn-Health-Logo" /></a>
                                    </div>

                                    

                                    <div className="grid-item">
                                        <div className='title-uni'>Yale New-Haven Hospital, St Raphael Campus, New-Haven, CT</div>
                                        <div className='title-concentration'>General Surgery Internship</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.ynhh.org//' target='_blank' rel="noreferrer"><img className='university-logo' src={YaleLogo} alt="Yale-Health-Logo" /></a>
                                    </div>

                                    <div className='grid-item'>
                                        <div className='title-uni'>Medical College, M. S. University, Baroda, India</div>
                                        <div className='title-concentration'>Medical School/ Education</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.medicalcollegebaroda.edu.in/' target='_blank' rel="noreferrer"><img className='university-logo' src={MSULogo} alt="MSU-Logo" /></a>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default About; 