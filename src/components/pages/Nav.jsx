import React, { useRef } from 'react';
import './Home';
const Nav = () => {
  const width = useRef(innerWidth).current;

  return (
    <div className={width <= 500 ? 'nav-sm' : 'nav'}>
      <p className="logo"></p>
      <h3>Rabiul Islam</h3>
      <a href="#home">Home</a>
      <a href="#works">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Nav;
