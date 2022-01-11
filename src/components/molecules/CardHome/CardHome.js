import React from 'react';
import BtnLove from './../../atoms/BtnLove/BtnLove';
import './CardHome.scss';

function CardHome(props) {  
  return (
    <div>
      <img src={ props.img } alt={ props.title +' image'}/>
      <h3> { props.title } </h3>
      <p> { props.subtitle } </p>
      <BtnLove />
    </div>
  );
}

export default CardHome;
