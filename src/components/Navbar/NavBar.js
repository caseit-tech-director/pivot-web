import React, { Component } from 'react';
import {MenuItems } from './MenuItems'
import "./NavBar.scss";

class NavBar extends Component {
    render() {
        return (
            <nav className= "NavbarItems">
                <img src="img/pivot-logo-2021-inverted.svg" alt="Pivot Logo" className= "navbar-logo"></img>
                <div className= "menu-icon"> </div>
            <ul className="NavBar">
                {MenuItems.map((item, index) => {
                    return(
                        <li> 
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a> 
                        </li>
                    )
                })}
            </ul>
            </nav>
        );
    }
}

export default NavBar;