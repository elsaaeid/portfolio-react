import React, { Component } from 'react';
import CV from '../../assets/cv.pdf';

class CTA extends Component {
     
    render() {
        return (
            <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
		    </div>
        )
    };
}
export default CTA;