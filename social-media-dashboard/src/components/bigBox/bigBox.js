import React from 'react'
import '../bigBox/bigBox.css'
import SmMedia from '../smMedia'
import Difference from '../../components/Difference/difference'

 function Big(props) {
  let shortNum = ' '
   if ( props.followers > 9999){
     shortNum = Math.round(props.followers / 1000) + 'K'
   }else{
     shortNum = props.followers
   };

   let platform = '';
   if ( props.smMedia === 'facebook'){
     platform = 'facebook';
   }else if ( props.smMedia === 'twitter'){
     platform = 'twitter';
   }else if ( props.smMedia === 'instagram'){
     platform = 'instagram';
   }else if ( props.smMedia === 'youtube'){
     platform = 'youtube'
   }
  return (
    <div className="bigBox" id={platform}>
      <div className={"bigBox-header"}>
        <SmMedia type={props.smMedia}/>
        <p>{props.username}</p>
      </div>
      <div className="big-main">
        <p id="number">{shortNum}</p>
        <p id="fol">{props.folSub}</p>
        <Difference amount={props.difference} platform={props.platform}/>
      </div>
    </div>
  )
}
export default Big

