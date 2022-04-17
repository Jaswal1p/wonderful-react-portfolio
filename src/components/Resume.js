import React from 'react';

import JResume from '../assets/images/jaswal_resume2022.png';
import '../App.css';


function Resume() {
    return (
        <React.Fragment>

            <div className="containerJas">
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='header'>
                                <h5>Download Resume: <a href="https://github.com/Jaswal1p/wonderful-react-portfolio/blob/main/src/assets/img/jaswal_resume2022.pdf" download> Pupinder S Jaswal</a></h5>
                            </div>
                            <br></br>
                            <div className='row resume'>

                                <img className='JResume' src={JResume} alt="My-Resume" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
            
        </React.Fragment>
    )
}

export default Resume;