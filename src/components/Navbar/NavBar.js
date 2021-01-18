import React, {useEffect} from 'react';
import { MenuItems } from './MenuItems'
import "./NavBar.scss";

const NavBar = () => {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 700 ){
        setScrolled(true);
      }
      if(offset == 0){
        setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    } 
    return(
    <header className={navbarClasses.join(' ')}>
    <nav className="navigation">
        <div className= "logo"> <img src="img/pivot-logo-2021-inverted.svg" alt="Pivot Logo" className="navbar--logo"></img> </div>
        <ul className="navbar">
            <a className="navbar-item" href='#about'>About</a>
            <a className="navbar-item" href='#whyPivot'>Why Pivot?</a>
            <a className="navbar-item" href='#schedule'>Schedule</a>
            <a className="navbar-item" href='#team'>Team</a>
            <a className="navbar-item" href='#faq'>FAQ</a>
            <a className="navbar-item" href='#contact'>Contact</a>
        </ul>
    </nav>
    </header>
    )
};
export default NavBar;