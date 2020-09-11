import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Contact_card extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Card className='contact-card'>
                    <Card.Img className='contact-card__image' variant="top" src={this.props.image} />
                    <Card.Body >
                       
                        <Card.Title className='contact-card__title' >{this.props.title} </Card.Title>
                        <Card.Text className='contact-card__text'>{this.props.description} </Card.Text>
                        <Button variant='primary' block className='contact-card__button' href={this.props.link}>Download</Button>
                        
                    </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default Contact_card;