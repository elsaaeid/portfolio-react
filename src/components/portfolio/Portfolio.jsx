import {React, useState} from 'react';
import './portfolio.css';
import {webData, graphDate, videoDate, reactData} from './Data.js';
import Dropdown from 'react-bootstrap/Dropdown';




function Portfolio() {

  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
    return (
         <section id='portfolio' >
           <h5>My React Work</h5>
           <h2>Portfolio</h2>

           <Dropdown className='block-tabs'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Explore
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item 
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() =>toogleTab(1)}>
                  Front end
                </Dropdown.Item>
                <Dropdown.Item 
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
                onClick={() =>toogleTab(2)}>
                  React Js
                  </Dropdown.Item>
                <Dropdown.Item 
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"} 
                onClick={() =>toogleTab(3)}>
                  Graphic Design
                  </Dropdown.Item>
                <Dropdown.Item className={toggleState === 4 ? "tabs active-tabs" : "tabs"} 
                  onClick={() =>toogleTab(4)}>
                    Graphic Video
                    </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className={toggleState === 1 ? "content active-content" : "content"}>
            {
              webData.map(({id, webImage, webTitle, webDesc, webGithub, webDemo}) => {
                return (
                  <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={webImage} alt={webTitle}/>
                  </div>
                  <div className="portfolio__item-details ">
                  <h6>{webTitle}</h6>
                  <p>{webDesc}</p>
                  </div>
                  <div className="portfolio__item-cta ">
                  <a href={webGithub} className="btn">Github</a>
                  <a href={webDemo} className="btn btn-primary">Live Demo</a>
                  </div>
                </article>
                )
              })
            }
            </div>
            <div className={toggleState === 2 ? "content active-content" : "content"}>
            {
              reactData.map(({id, webImage, webTitle, webDesc, webGithub, webDemo}) => {
                return (
                  <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={webImage} alt={webTitle}/>
                  </div>
                  <div className="portfolio__item-details ">
                  <h6>{webTitle}</h6>
                  <p>{webDesc}</p>
                  </div>
                  <div className="portfolio__item-cta ">
                  <a href={webGithub} className="btn">Github</a>
                  <a href={webDemo} className="btn btn-primary">Live Demo</a>
                  </div>
                </article>
                )
              })
            }
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
            {
              graphDate.map(({id, gImage, gTitle, gDemo}) => {
              return (
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={gImage} alt={gTitle}/>
                </div>
                <div className="portfolio__item-details ">
                <h6>{gTitle}</h6>
                </div>
                <div className="portfolio__item-cta ">
                <a href={gDemo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
              )
            })
          }
            </div>
            <div className={toggleState === 4 ? "content active-content" : "content"}>
            {
              videoDate.map(({id, vGraph, vTitle, vDemo}) => {
              return (
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <video  >
                    <source type='video/mp4' src={vGraph} />
                  </video>
                </div>
                <div className="portfolio__item-details ">
                <h6>{vTitle}</h6>
                </div>
                <div className="portfolio__item-cta ">
                <a href={vDemo} className="btn btn-primary">Live Demo</a>
                </div>
              </article>
              )
            })
          }
            </div>
        </section> 
    )
    };
export default Portfolio;














