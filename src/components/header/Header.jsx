import React, { Component } from 'react';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';



class Header extends Component {
     
    render() {
        return (
            <header>
                <div className='container header__container'>
					<div className="profile">
						<div className='me'>
							<img className='about_me' src={ME} alt="me" />
						</div>
						<h1 className='name'>Elsaaeid</h1>
					</div>
					<HeaderSocials/>
				</div>
            </header> 
        )
    };
}
export default Header;