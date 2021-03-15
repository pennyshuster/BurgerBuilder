import React from 'react';
import burgerLogo from '../../Assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className= "LogoB" style={{height: props.height}}>
        <img src={burgerLogo} alt="myBurger"/>
        
    </div>
);

export default logo;