import React from 'react';
import Project_card from './Project_card';
import django_proj_img from '../static/images/django_proj_img.jpg';
import blog_proj_img from '../static/images/blog_proj_img.jpeg';
import shootout_proj_img from '../static/images/shootout_proj_img.jpeg';
import login_proj_img from '../static/images/login_proj_img.png';
import social_proj_img from '../static/images/social_proj_img.png';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Projects extends React.Component {
    
    render() { 
        return ( 
            <div>
                <div class ='projects page-section'>
                    <Container fluid>
                    <h1 class = 'display-1 featured strong text-center room-above room-below projects__intro'>Featured Projects</h1>
                    <Row>
                    <Col lg={4} sm={12}>
                        <Project_card 
                            image={django_proj_img}
                            title='Django art webpage' 
                            description='Web App I built while learning the django templating system'
                            link='https://github.com/benderenzi121/ArtSite'/>
                    </Col>
                    <Col lg={4} sm={12}>
                    <Project_card 
                        image={blog_proj_img}
                        title='Simple Blog' 
                        description='Blog Project where an administrator can log in and create posts with comments with approval functionality.'
                        link='https://github.com/benderenzi121/blog-project'/>
                    </Col>
                    <Col lg={4} sm={12}>
                    <Project_card 
                        image={shootout_proj_img}
                        title='Space Shootout' 
                        description='A 2d shooting gallery game where a player uses their keyboard to aim and shoot at randomized moving targets'
                        link='https://github.com/benderenzi121/shootout_saloon'/>
                    </Col>
                    </Row>
                   
                   <Row>
                    <Col lg={6} sm={12}>
                        <Project_card 
                            image={login_proj_img}
                            title='User Login System' 
                            description='A fully functional user login system using Django'
                            link='https://github.com/benderenzi121/django-user-login'/>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Project_card 
                            image={social_proj_img}
                            title='Social Media Site' 
                            description='A simple social media website built using Django. Users can create, join, and post to groups.'
                            link='https://github.com/benderenzi121/SimpleSocialSite'/>
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>
         );
    }
}
 
export default Projects;