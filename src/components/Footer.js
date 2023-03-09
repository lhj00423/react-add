import React from 'react';
import './Footer.css'; 


const Footer = () => {
    return (
        <div id="footer">
            <div className='foot-abt'>
                <div className='footer-box'>
                    <h1>Copyright ⓒ 2023. HYO JEONG All Rights Reserved</h1>
                </div>
            </div>
            <div id="footer-gnb">
                <div className='footer-box'>
                    <div className='left'>
                        <p className='eng'>PORTFOLIO WEBSITE💻</p>
                    </div>
                    <div className='right pc'>
                        <p className='eng'>npm install HYOJEONG'S Portfolio --save</p>
                    </div>
                </div>
            <div className='fix-foot'>
                <div className='fix-foot-area'>
                    <p>My Portfolio Successfully! With me npm start !</p> 
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Footer;