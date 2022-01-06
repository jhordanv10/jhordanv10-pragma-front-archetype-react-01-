import React from 'react';
import logoReact from './../../../assets/logo-react.svg';
import logoPragma from './../../../assets/logo-pragma.svg';
import './Header.scss';

function Header() {  
  return (
    <header className='m-header'>
        <div className='m-header-logoapp'>
          <img src={logoReact} className="--rotate" alt="logo React" />
          <h1> Title </h1>
        </div> 
        <a href="https://www.pragma.com.co/proceso-de-contratacion" target="_blank" rel="noreferrer">
          <img src={logoPragma} className='m-header-logoright' alt="logo Pragma" />
        </a>
    </header>
  );
}

export default Header;
