import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
       <>
          <nav className="navbar navbar-expand-lg navbar-light" sticky="top">
              <div className="container">
                  <NavLink 
                        className="nav-brand" 
                        to="/jaswal"
                    > 
                        Pupinder S Jaswal MD
                  </NavLink>
                 

                <div className="nav-band" id="navbarToggler">
                     
                    <ul className="navbar-nav">
                          
                          <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/about"
                            >
                                About me
                          </NavLink>

                          <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/portfolio"
                            >
                                Portfolio
                          </NavLink>

                          <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/contact"
                            >
                                Contact
                          </NavLink>

                          <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/resume"
                            >
                                Resume
                          </NavLink>  

                    </ul>

                  </div>

              </div>

          </nav>
       </>
    )
}


export default NavBar;