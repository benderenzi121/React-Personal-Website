import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Greeting extends React.Component {
    render() {
      return  <div >
                
                  <div class='greeting__text-content'>
                    <div class='greeting__outline'>
                    <h2 class="greeting__introduction"> Benjamin DeRenzi</h2>
                    <h4 class ='greeting__statement'>Hi, I am a web developer and I created this website so that you guys can see my work and find where you can contact me!</h4>
                  </div>
                
              </div>
              
        </div>;
    
  
    }
  }

export default Greeting;