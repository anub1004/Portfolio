import React, { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { themes } from "../Data";
import ThemeItem from "./ThemeItem";
import './theme.css';
const getStorageColor=()=>{
  let color='4';
  if(localStorage.getItem('color')){
    color=localStorage.getItem('color');

  }
  return color;
}
const getStoragetheme=()=>{
  let mode='light-theme';
  if(localStorage.getItem('mode')){
    mode=localStorage.getItem('mode');

  }
  return mode;
}
const Themes = () => {
  const [showThemes,setThemes]=useState(false);
  const [mode,setmode]=useState(getStoragetheme());
  const toggle=()=>{
    if(mode==='light-theme'){
      setmode('dark-theme');
    }
    else{
      setmode('light-theme')
    }
  }
  const [color,setcolor]=useState(getStorageColor());
  const changecolor=(color)=>{
    setcolor(color);
  }
  useEffect(()=>{
    document.documentElement.style.setProperty('--hue',color);
    localStorage.setItem('color',color);
  },[color])

    useEffect(()=>{
    document.documentElement.className=mode;
        localStorage.setItem('mode',mode)
   
  },[mode])
  return (
    <div className={`${ showThemes ? 'show-Themes' :'' } style-switcher`}>
   
      <div className="switcher-toggler" onClick={()=>{
        setThemes(!showThemes)
      }}>
        <FaCog></FaCog>
      </div>
      <div className="theme-toggler" onClick={toggle}>
           {mode==='light-theme' ? <BsMoon></BsMoon>: <BsSun></BsSun>}
      </div>
      <h3 className="style-switcher-title">
        Style Switcher
      
      </h3>
      <div className="switcher-items grid">
        {
          themes.map((theme,index)=>{
            return <ThemeItem key={index}
            {...theme} changecolor={changecolor}></ThemeItem>
          })
        }
      </div>
      <div className="switcher-close" onClick={()=>{
        setThemes(!showThemes)
      }}>
        &times;
      </div>
  
    </div>
  );
};

export default Themes;
