import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


// function About(){
//   window.scrollTo({
//     top:614,
//     behavior:'smooth'
//   })
// }
// function Project(){
//   window.scrollTo({
//     top:2197,
//     behavior:'smooth'
//   })
// }
// function Contact(){
//   window.scrollTo({
//     top:3734,
//     behavior:'smooth'
//   })
// }
const Header = ({scrollToTop}) => {
    return (
        <div id="header">
            <div id="hd-top">
            <div id="ddd">
              <div id="headerborder">
                <Link to='/main'><p onClick={scrollToTop} id="DEVELOPER">DEVELOPER LHJ</p></Link>
                <h1 id="PORTFOLIO">PORTFOLIO WEBSITE💻</h1>
              </div>
            </div>
            <div>
              <p id='lhj-p'> 꾸준히 자기계발하는 개발자 <b>이효정</b>의 포트폴리오입니다. </p>
            </div>
            
          </div>
        </div>
    );
};

export default Header;