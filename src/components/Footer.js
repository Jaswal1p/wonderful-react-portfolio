// import React from 'react';

// function Footer() {

//     return (
        
//         <>
//             <div className="page-footer-section bg-dark fg-white">
//                 <div className="container">
//                     <div className="row mb-5 py-3">
//                         <div className="col-sm-6 col-lg-2 py-3">
//                             <h5 className="mb-3">Pages</h5>
//                             <ul className="menu-link">
//                                 <li><a href="/" className="" >About</a></li>
//                                 <li><a href="/portfolio" className="" >Portfolio</a></li>
//                                 <li><a href="/contact" className="" >Contact</a></li>
//                                 <li><a href="/resume" className="" >Resume</a></li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6 col-lg-4 py-3">
//                             <h5 className="mb-3">Contact</h5>
//                             <ul className="menu-link">
//                                 <li><a href="/contact" className="">Contact me</a></li>
//                                 <li>Jaswal1p@yahoo.com</li>
//                                 <li>860-000-0000</li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6 col-lg-4 py-3">

//                             <div className="mt-3">
//                                 <a href="https://github.com/Jaswal1p" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-github"></span></a>

//                                 <a href="https://www.linkedin.com" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-linkedin"></span></a>

//                                 <a href="https://stackoverflow.com/users/17116657/bobby-jaswal?tab=profile" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-stackoverflow"></span></a>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>    

//         </>
//     )
// }



// export default Footer;


import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
                <div className='img-link'>
                <a href="mailto:Jaswal1p@yahoo.com?" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                <a href="https://github.com/Jaswal1p" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/<myLinkedIn/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                <a href="https://stackoverflow.com/users/17116657/bobby-jaswal" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stackoverflow" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Bobby Jaswal  |  <a href="https://github.com/Jaswal1p/react-portfolio/raw/master/src/assets/<myResumeSoon.pdf" className="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">coolors</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;