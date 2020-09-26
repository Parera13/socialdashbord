import React from 'react'
import '../smallBox/smallBox.css'
import SmMedia from '../smMedia'

function Small(props) {
  let color = '';
if (props.modifier > 0){
  color = 'green';
}else if (props.modifier <= 0){
  color = 'red';
};

let shortNum = ' '
   if ( props.amount > 9999){
     shortNum = Math.round(props.amount / 1000) + 'K'
   }else{
     shortNum = props.amount
   };

return (
    <div className="smallBox">
      <div className="firstLine">
        <p>{props.type}</p>
        <SmMedia type={props.smMedia}/>
      </div>
      <div className="secondLine">
        <p id="num"> {shortNum}</p>
        <p className={color}>{props.modifier}</p>
      </div>
    </div>
  )
}
export default Small