import React, { Component } from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';



class Services extends Component {
     
    render() {
        return (             
	    <section id='services' >
               <h5>What I Offer</h5>
	       <h2>Services</h2>

	       <div className="container services__container">
		   {/* WEB DEVELOPMENT */}
	       <article className="services">
	            <div className="service__head">
		      <h3>Web Development</h3>
	           </div>
		   <ul className="service__list">
		     <li>
			<BiCheck className="service__list-icon" />
			<p>designing responsive and flexible websites with client side </p>
		     </li>
		     <li>
			<BiCheck className="service__list-icon" />
			<p>developing websites with server side</p>
		     </li>
			 <li>
			 <BiCheck className="service__list-icon" />
			 <p>developing websites with Shopify</p>
			  </li>
		  </ul>
	       </article>
			{/* GRAPHIC DESIGNING */}
	      	<article className="services">
	            <div className="service__head">
		      <h3>GRAPHIC DESIGNING</h3>
	           </div>
		   <ul className="service__list">
		     <li>
			<BiCheck className="service__list-icon" />
			<p>logo, banner, poroducts designer </p>
		     </li>
		     <li>
			<BiCheck className="service__list-icon" />
			<p>2D,3D designer a on adobe programs like as [ Photoshop, Illistratur ] </p>
		     </li>
		     <li>
			<BiCheck className="service__list-icon" />
			<p>4D,video montage on programs like as [ Priemere, Filmora ]</p>
		     </li>
		     <li>
			<BiCheck className="service__list-icon" />
			<p>Graphic designer on programs like as [ After Effect ]</p>
		     </li>
		     <li>
			<BiCheck className="service__list-icon" />
			<p>Photographer, Videographer</p>
		     </li>
		  </ul>
	       </article>
		   	{/* UI/UX Design */}
			<article className='services'>
					   <div className="service__head">
						 <h3>UI/UX Design</h3>
					  </div>
					   <ul className="service__list">
						   <li>
						   <BiCheck className="service__list-icon" />
						   <p>user interface, user experience on XAdobe</p>
						   </li>
					   </ul>
			</article>
	       </div>
            </section> 
        )
    };
}
export default Services;