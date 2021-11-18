import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './components/css/bootstrap.min.css';
import './components/css/swiper-bundle.css';
import './components/css/custom-animation.css';
import './components/css/main.css';

import Home from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact'; 
import Wizard from './pages/Wizard';
import Test from './pages/Test';
import Notfound from './pages/404';
import Welcome from './pages/Welcome';
import Thankyou from './pages/Thankyou';
import updatePass from './pages/UpdatePass';
import Settings from './pages/Settings';

class App extends Component {
  
render() {
  return <Router>
             <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} /> 
                <Route exact path="/Product" component={Product} /> 
                <Route exact path="/login" component={Login} /> 
                <Route exact path="/signup" component={Signup} /> 
                <Route exact path="/contact" component={Contact} /> 
                <Route exact path="/wizard_1" component={Wizard} />
                <Route exact path="/test" component={ Test } />
                <Route exact path="/home" component={ Welcome } />
                <Route exact path="/thankyou" component={ Thankyou } />
                <Route exact path="/updatePass" component={updatePass} />
                <Route exact path="/settings" component={Settings} />
                <Route path="/" component={Notfound} /> 
             </Switch>
         </Router>
}

}
export default App;
