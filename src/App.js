// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Jaswal from './components/Jaswal';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <>
         <NavBar />
         <br></br>
         <Switch>
           <Route id="root" exact path='/' component={About} />
           <Route id="root" exact path='/about' component={About} />
           <Route exact path='/contact' component={Contact} />
           <Route exact path='/Jaswal' component={Jaswal} />
           
           <Route component={NoMatch} />
         </Switch>
         <br></br>
         <Footer/>
      </>
    </Router>
  );
}

export default App;
