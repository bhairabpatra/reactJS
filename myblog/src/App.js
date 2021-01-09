import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";



import Person from '.././src/Person/Person';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Signup from "./components/Signup";
import Login from "./components/Login";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStdent";
import StudentList from "./components/StudentList";
import Home from "./components/Home"
function App() {
  return (


    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Xhairab-io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/create-student"}>CreateStudent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/edit-student"}>EditStudent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/student-list"}>StudentList</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/create-student" component={CreateStudent} />
            <Route path="/edit-student" component={EditStudent} />
            <Route path="/student-list" component={StudentList} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
       
      </div>
    </div>
  
    </Router>

  )}

export default App;
