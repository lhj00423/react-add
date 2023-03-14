import React from 'react';
import { FaBloggerB,FaGithub,FaPencilAlt } from "react-icons/fa";
import './Fixed.css';

function About(){
    window.scrollTo({
      top:670,
      behavior:'smooth'
    })
  }
function Project(){
    window.scrollTo({
        top:2197,
        behavior:'smooth'
    })
}
function Contact(){
    window.scrollTo({
        top:3734,
        behavior:'smooth'
    })
}
const Fixed = () => {
    return (
        <div>
            <div>
                <ul id="headerul">
                    <li id="headerli"><p onClick={About}>ABOUT</p></li>
                    <li id="headerli" ><p onClick={Project}> PROJECT</p></li>
                    <li id="headerli" ><p onClick={Contact}>CONTACT</p></li>
                 <div id="light-btn">
                    <span></span>
                  </div>   
                </ul> 
              </div>
            <div className='flt-nav pc'>
                <p onClick={About}>ABOUT</p>
                <p onClick={Project}>PROJECT</p>
                <p onClick={Contact}>CONTACT</p>
            </div> 
            <div className='flt-nav-left pc'> 
                <i><a href='https://github.com/lhj00423'><FaGithub className='fa-github icon'/></a></i>
                <i><a href='https://sweet-rule-ed6.notion.site/code-notion-71635474314b4723912c34f669490de3'><FaPencilAlt className='fa-pen icon'/></a></i>
                <i><a href='https://blog.naver.com/lhj100411'><FaBloggerB className='fa-blogger icon'/></a></i>
            </div>
        </div>
    );
};

export default Fixed;