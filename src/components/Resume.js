import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import resume from '../static/images/resume.pdf';
import {Page, Document} from 'react-pdf';

class Resume extends React.Component {
    
    render() { 
        return ( 
            <div>
                <ResponsiveEmbed aspectRatio='16by9' >
                   <embed  src={resume} />
                </ResponsiveEmbed>
            </div>
         );
    }
}
 
export default Resume;