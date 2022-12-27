import React, { useState } from 'react';
import './main.css';
import CTA from './CTA';
import arrowBottom from "../../assets/arrow_bottom.png"
import arrowBottomBack from "../../assets/arrow_bottom_back.png"



function Main() {
    const [arrow, setArrow] = useState(arrowBottom);
    const arrowBack = ()=>{
        setArrow (arrowBottomBack)
    }
        return (
            <main>
                <div className='container main__container'>
                    <div>
                        <h5>Hello I'm</h5>
                        <h5 className='text-light'>ReactJs Developer</h5>
                    </div>
                    <div className='contacts'>
                        <CTA />
                    </div>
                </div>
                <a href="#contact" className='scroll__down'><img onClick={arrowBack} src= {arrow} alt='arrow_bottom' /></a>
            </main> 
            )
        }
export default Main;