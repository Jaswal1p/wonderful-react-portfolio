// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar.js';

function App() {
  return (
    <Router>
      <>
         <NavBar />

         <Switch>
           <Route />

         </Switch>
      </>
    </Router>
  );
}

export default App;
