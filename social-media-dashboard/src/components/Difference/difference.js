import React from 'react'
import Up from '../img/arrowUp.png'
import Down from '../img/arrowDown.png'

function Difference(props) {
  let color = '';
  let icon = '';
if (props.amount > 0){
  color = 'green';
  icon = Up;
}else if (props.amount <= 0){
  color = 'red';
  icon = Down;
};
 

  return (
    <div className="bottomLine">
      <img className={color} src={icon}></img>
      <p className={color}>{props.amount}</p>
      <p className={color}>Today</p>
    </div>
  )
}
export default Difference