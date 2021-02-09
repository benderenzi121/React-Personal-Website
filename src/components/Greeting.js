import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Greeting extends React.Component {
    render() {
      return  <div >
                
                  <div className='greeting__text-content'>
                    <div className='greeting__outline'>
                    <h2 className="greeting__introduction"> Benjamin DeRenzi</h2>
                    <h4 className ='greeting__statement'>Full Stack Web Developer</h4>
                  </div>
                
              </div>
              
        </div>;
    
  
    }
  }

export default Greeting;