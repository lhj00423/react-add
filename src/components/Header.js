import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <div id="header">
            <div id="hd-top">
            <div id="ddd">
              <div id="headerborder">
                <p id="DEVELOPER">DEVELOPER LHJ</p>
                <h1 id="PORTFOLIO">PORTFOLIO WEBSITE💻</h1>
              </div>
            </div>
            <div>
              <p id='lhj-p'> 꾸준히 자기계발하는 개발자 <b>이효정</b>의 포트폴리오입니다. </p>
            </div>
            <div>
                <ul id="headerul">
                    <li id="headerli"><p>ABOUT</p></li>
                    <li id="headerli" ><p> PROJECT</p></li>
                    <li id="headerli" ><p>CONTACT</p></li>
                 <div id="light-btn">
                    <span></span>
                  </div>   
                </ul>
              </div>
          </div>
        </div>
    );
};

export default Header;