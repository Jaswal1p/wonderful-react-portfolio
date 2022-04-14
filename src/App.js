// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <>
         <NavBar />

         <Switch>
           {/* <Route exact path='/' component={About} /> */}
           <Route exact path='/contact' component={Contact} />

         </Switch>
      </>
    </Router>
  );
}

export default App;
