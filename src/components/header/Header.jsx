import React, { Component } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocials from './HeaderSocials';



class Header extends Component {
     
    render() {
        return (
            <header>
                <div className='container header__container'>
					<h5>Hello I'm</h5>
					<h1>Elsaaeid Ellithy</h1>
					<h5 className='text-light'>ReactJs Developer</h5>
					<CTA />
					<HeaderSocials/>
					<div className='me'>
						<img src={ME} alt="me" />
					</div>
					<a href="#contact" className='scroll__down'>Scroll Down</a>
				</div>
            </header> 
        )
    };
}
export default Header;