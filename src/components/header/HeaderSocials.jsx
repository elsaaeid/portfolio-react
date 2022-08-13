import React, { Component } from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';


class HeaderSocials extends Component {
     
    render() {
        return (
                <div className='header__socials'>
                    <a href="https://www.linkedin.com/in/elsaaeid-ellithy-9017811b2/" target="_blank"><BsLinkedin/></a>
                    <a href="https://github.com" target="_blank"><FaGithub/></a>
                    <a href="https://api.whatsapp.com/send?phone=+2001028496209" target="_blank"><FaWhatsapp/></a>
                </div>
        )
    };
}
export default HeaderSocials;