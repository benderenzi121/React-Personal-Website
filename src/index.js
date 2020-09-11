import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactDOM from 'react-dom';
import './static/styles/styles.css';
import dog from './static/images/dog4testing.jpeg' ;
import Nav from './components/Nav';
import Banner from './components/Banner'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


console.log('imrunning');
ReactDOM.render(
    <React.StrictMode>
    
        <Nav/>
        <Container fluid >
        <Router>
            <Route path="/" exact component={Banner}/>
            <Route path="/" exact component= {Projects}/>
            <Route path="/" exact component= {About}/>
            <Route path="/projects" exact component= {Projects}/>
            <Route path="/about" exact component= {About}/>
            <Route path="/resume" exact component= {Resume}/>
            
            
                  
        </Router>
        <Contact/>
        </Container>
        
        
    
    </React.StrictMode>
    , document.getElementById('app'));
