import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class My_nav extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Navbar fixed='top'  variant='dark' className='nav' expand='lg'>
                    <Navbar.Brand className='light-text' href='/'>Ben DeRenzi</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link className='light-text' eventKey='link-1' href='/resume'>Resume</Nav.Link>
                        <Nav.Link eventKey='link-2' href='/projects'>Projects</Nav.Link>
                        <Nav.Link eventKey='link-3' href='/about_me'>About Me</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
         );
    }
}
 
export default My_nav;