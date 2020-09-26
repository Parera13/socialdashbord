import React from 'react'
import In from '../components/img/instagram.png'
import { GrFacebook, GrTwitter } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";


 function SmMedia(props) {
   let route = ''
   if (props.type === 'facebook'){
    return <IconContext.Provider value={{className: "icon facebook" }}>
            <div>
              <GrFacebook />
            </div>
          </IconContext.Provider>
   }else if (props.type === 'twitter'){
    return <IconContext.Provider value={{className: "icon twitter" }}>
            <div>
              <GrTwitter />
            </div>
          </IconContext.Provider>
   }else if (props.type === 'instagram'){
          route = In
    return (
      <img className="logo" src={route} alt="logo"/>
  )
   }else if (props.type === 'youtube'){
    
    return <IconContext.Provider value={{className: "icon youtube" }}>
            <div>
              <FaYoutube />
            </div>
          </IconContext.Provider>
   }
  
}
export default  SmMedia