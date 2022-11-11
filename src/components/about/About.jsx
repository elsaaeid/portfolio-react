import React, { Component } from 'react';
import './about.css';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";



class About extends Component {
     
    render() {
        return (
            <section id='about' >
                <h5>Get To Know</h5>
		<h2>About Me</h2>
		<div className="container about__container">
		   <div className="about__content">
		      <div className="about__cards">
		          <article className="about__card">
			     <FaAward className="about__icon"/>
			     <h5>Experience</h5>
			     <small>5+ Years Working</small>
			  </article>
		          <article className="about__card">
			     <FiUsers className="about__icon"/>
			     <h5>More than</h5>
			     <small>client Worldwide</small>
			  </article>
		          <article className="about__card">
			     <VscFolderLibrary className="about__icon"/>
			     <h5>Projects</h5>
			     <small>24+ Completed</small>
			  </article>
		      </div>
		      <p>the best tutorials in high quality and flexible performance</p>
		      <a href="#contact" className="aboutA btn btn-primary">Let's Talk</a>
		   </div>
		</div>
            </section> 
        )
    };
}
export default About;