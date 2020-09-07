import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './sass/app.scss';
import Home from './pages/Home/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
