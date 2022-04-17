import React from 'react'

// import logo from './logo.svg';
import './App.css';
import { Redirect, HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Jaswal from './components/Jaswal';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import NoMatch from './components/NoMatch';
// import { Redirect } from 'react-router-dom';


// eslint-disable-next-line
function App() {
  return (
    <Router>
      {/* <> */}
         <NavBar />
         <br></br>
         <Switch>
           <Route exact path='/'>
             <Redirect to='/about' />
           </Route>
           <Route exact path='/about' component={About} />
           <Route exact path='/contact' component={Contact} />
           <Route exact path='/jaswal' component={Jaswal} />
           <Route exact path='/portfolio' component={Portfolio} />
           <Route exact path='/resume' component={Resume} />
           <Route component={NoMatch} />
         </Switch>
         <br></br>
         <Footer/>
      {/* </> */}
    </Router>
  );
}

export default App;
