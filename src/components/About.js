import React from 'react';
import me from '../static/images/me.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class About extends React.Component {
    
    render() { 
        return ( 
            <div>
                <div class='page-section about'>
                    <Row>
                        <Col lg={3} sm={12}>
                            <div>
                                <img class='about__image'src={me}></img>
                            </div>
                        </Col>
                        <Col lg={9} sm={12}>
                            <div class='about__text'>
                                <p>Hi, my name is Ben DeRenzi. I have had a long-time interest in computer software and hardware, so it was natural for me to study computer science for my bachelor’s degree. I am currently focused on web development but am interested in other areas of development as well. I built this website so that anyone looking to see my work or contact me would have all the information they would need in one place. Some of my hobbies include: Hiking, Camping, Fishing, video games, and meditation.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
         );
    }
}
 
export default About;