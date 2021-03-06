import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Pocetna from './components/pages/Pocetna';
import './App.css';
import Kontakt from './components/pages/Kontakt';
import UlogujSe from './components/pages/UlogujSe';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Pocetna}/>
      <Route path='/pocetna' exact component={Pocetna}/>
      <Route exact path='/kontakt' component={Kontakt}/>
      <Route path='/ulogujse' component={{UlogujSe}.openModal} />
    </Switch>
    </Router>
    </>
  );
}
setInterval(Pocetna, 10000);
export default App;
