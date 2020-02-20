import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup"
import Signin from './pages/Signin/Signin';
import CompanyInfo from './pages/CompanyInfo/Companyinfo';
import Jobs from "./pages/Jobs/Jobs"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CompanyInfo} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
