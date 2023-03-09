import React from 'react';
import { FaBloggerB,FaGithub,FaPencilAlt } from "react-icons/fa";
import './Fixed.css';


const Fixed = () => {
    return (
        <div>
            <div className='flt-nav pc'>
                <p>ABOUT</p>
                <p>PROJECT</p>
                <p>CONTACT</p>
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