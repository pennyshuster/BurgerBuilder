import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    return(
        <Aux>
         <Backdrop show={props.open} clicked={props.closed}/>  
        <div className= "SideDrawer">
            <div className= "LogoA">
            <Logo />
            </div>
        <nav>
            <NavigationItems />
        </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;