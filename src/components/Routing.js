import React from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ArtistDetail from '../pages/ArtistDetail';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

function Routing() {
  const { theme } = useTheme()
  return (

    <div id={`${theme}`}>
      <Router>
      
      <div className='container'>
        <Navbar />

          <Switch>
            
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <Route path='/artistdetail/:id' component={ArtistDetail} />

          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  )
}

export default Routing
