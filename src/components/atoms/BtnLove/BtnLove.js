import React, {useState} from 'react';
import './BtnLove.scss';

function BtnLove() { 
  const [isBtnActive, setActive] = useState(false);

  return (
    <button className={`a-btnlove ${isBtnActive?'a-btnlove--active':''}`}
    onClick={()=>{
      setActive(!isBtnActive);
    }}>
      
    </button>
  );
}

export default BtnLove;
