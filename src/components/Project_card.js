import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Project_card extends React.Component {
    
    render() { 
        return ( 
            <div>

                <Card className='project-card'>
                    <Card.Img className='project-card__image'variant="top" src={this.props.image} />
                    <Card.Body >
                       
                        <Card.Title className='project-card__title' >{this.props.title} </Card.Title>
                        <Card.Text className='project-card__text'>{this.props.description} </Card.Text>
                        <Button variant='success' block className='project-card__button' href={this.props.link}>Download</Button>
                        
                    </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default Project_card;