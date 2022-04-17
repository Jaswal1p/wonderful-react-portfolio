
import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
                <div className='img-link'>
                <a href="mailto:Jaswal1p@yahoo.com?" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                <a href="https://github.com/Jaswal1p" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/pupinderjaswal/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                <a href="https://stackoverflow.com/users/17116657/bobby-jaswal" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stackoverflow" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Bobby Jaswal  |  <a href="https://github.com/Jaswal1p/react-portfolio/raw/master/src/assets/<myResumeSoon.pdf" className="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">coolors</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;