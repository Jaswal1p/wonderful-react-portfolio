import React from 'react';

import '../App.js';
import '../index.css';
import '../footer.css';

import Avatar from '../assets/images/profilePic.jpg';


const Jaswal = () => {
    return(
        <React.Fragment>
            <div className='containeR'>
                <div className='row'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row abstract-back'>
                                <img className='avatar' src={Avatar} alt="My-face" />
                            </div>
                        </div>

                        <div className='card-body'>
                            <div className='row'>
                                <p className='p-about'>
                                I am a Radiologist in a private practice for 20 years, who is about to finish a full-stack developer coding bootcamp. From this course I have aquired deep understanding and technical expertise in Javascript, ReactJS, Redux, NodeJS, MongoDb, CSS, HTML and many other technologies including working with GitHub! I have keen interest in working with databases. Especially in Healthcare, I would some day like to use these skills of working with databases to improve physician to patient communication. My particular emphasis will be to communicate and track actionable non-urgent Radiologic findings directly to patient, in addition to patient's primary care physician.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Jaswal; 