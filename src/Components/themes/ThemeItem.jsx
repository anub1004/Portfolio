import React from 'react'

const ThemeItem = ({hue,img,changecolor}) => {
  return <>
  <img src={img} alt=""  className='theme-img' onClick={()=>{changecolor(hue)}}/> 
  
  </>
}

export default ThemeItem