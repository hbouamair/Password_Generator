import React from 'react'
import icon1 from './assets/github.png'
import icon2 from './assets/linkedin.png'
const NavBar = () => (

    <header className='navbar'>
        <div className='navbar__title navbar__item'>Hamza Bouamair</div>
        <div  className='navbar__item'><a target="_blank" href="https://github.com/hbouamair"> <img className="icon1" src={icon1}/></a></div>
        <div className='navbar__item'><a target="_blank"  href="https://www.linkedin.com/in/hamza-bouamair"><img className="icon2" src={icon2}/></a>   </div>
              
    </header>
);

export default NavBar;


