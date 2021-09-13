import logo from './logo.svg';
import './App.css';
import Users from './containers/login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Login </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/search">Search </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/search" component={Search}></Route>
            <Route excact path="/" component={Users}></Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
