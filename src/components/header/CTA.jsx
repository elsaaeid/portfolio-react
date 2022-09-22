import React, { Component } from 'react';


class CTA extends Component {
     
    render() {
        return (
            <div className='cta'>
            <a href="https://drive.google.com/file/d/1TjF2QMrJfGO-8EO3mZ4QN_rhQHhstqoU/view?usp=sharing" download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
		    </div>
        )
    };
}
export default CTA;