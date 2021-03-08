import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Create from './Create';
import BlogDetails from './BLogDetails';
import NotFound from './NotFound';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/create"><Create /></Route>
            <Route exact path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
        <hr></hr>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
