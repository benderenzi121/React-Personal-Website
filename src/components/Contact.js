import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Contact_Card from './Contact_card';
import git from '../static/images/github_logo.png';
import email from '../static/images/email.png';
import linkedin from '../static/images/linkedin_logo.png';
import Container from 'react-bootstrap/Container';

class Contact extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={6} lg={{span: 2, offset: 3}}>
                            <Contact_Card 
                                        image={email}
                                        title='BenDeRenzi@protonmail.com'
                                        description='Contact me via email'
                                        link='mailto:benderenzi@protonmail.com'/>
                        </Col>
                        <Col  sm={6} lg={2}>
                            <Contact_Card 
                                        image={linkedin}
                                        title='Connect with me on linked-in'
                                        description='  '
                                        link='https://www.linkedin.com/in/benjamin-derenzi-a9b154195/'/>
                        </Col>
                        <Col sm={{span:6, offset:3}} lg={{span:2, offset:0}}>
                            <Contact_Card 
                                        image={git}
                                        title='BenDeRenzi121'
                                        description='Check out my projects on github'
                                        link='https://github.com/benderenzi121'/>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Contact;