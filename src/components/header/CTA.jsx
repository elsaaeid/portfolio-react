import React, { Component } from 'react';


class CTA extends Component {
     
    render() {
        return (
            <div className='cta'>
            <a href="https://drive.google.com/file/d/1ttZ1QZW7AgSYyLXwT-urb1Ya5bvAQkH6/view?usp=share_link" download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
		    </div>
        )
    };
}
export default CTA;