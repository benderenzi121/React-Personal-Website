import React from 'react';
import splash from '../static/images/splash.jpg'
import Greeting from './Greeting'
import Container from 'react-bootstrap/Container'
class Banner extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Container fluid>
                    <div className='one-col'>
                        <img className='banner__image' src ={splash}></img>
                        <Greeting/>
                    </div>
                </Container>
            </div>
         );
    }
}
 
export default Banner;