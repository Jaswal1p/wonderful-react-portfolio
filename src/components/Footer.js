import React from 'react';

function Footer() {

    return (
        
        <>
            <div className="page-footer-section bg-dark fg-white">
                <div className="container">
                    <div className="row mb-5 py-3">
                        <div className="col-sm-6 col-lg-2 py-3">
                            <h5 className="mb-3">Pages</h5>
                            <ul className="menu-link">
                                <li><a href="/" className="" >About</a></li>
                                <li><a href="/portfolio" className="" >Portfolio</a></li>
                                <li><a href="/contact" className="" >Contact</a></li>
                                <li><a href="/resume" className="" >Resume</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">
                            <h5 className="mb-3">Contact</h5>
                            <ul className="menu-link">
                                <li><a href="/contact" className="">Contact me</a></li>
                                <li>Jaswal1p@yahoo.com</li>
                                <li>860-000-0000</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">

                            <div className="mt-3">
                                <a href="https://github.com/Jaswal1p" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-github"></span></a>

                                <a href="https://www.linkedin.com" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-linkedin"></span></a>

                                <a href="https://stackoverflow.com/users/17116657/bobby-jaswal?tab=profile" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-stackoverflow"></span></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>    

        </>
    )
}



export default Footer;