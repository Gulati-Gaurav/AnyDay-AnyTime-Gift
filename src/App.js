
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Category from './Category';
import HomeSection3 from './HomeSection3';
import Testimonial from './Testimonial';
import Feedback from './Feedback';
import Extra from './Products/Extra';

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
          <HomeSection3/>
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/categories">
          <Category />
        </Route>
        <Route exact path="/test">
          <Testimonial/>
        </Route>
        <Route exact path="/feed">
          <Feedback/>
        </Route>
        <Route exact path="/extra">
          <Extra/>
        </Route>
      </Switch>
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
