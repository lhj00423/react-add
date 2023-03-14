import React from 'react';
import './SeeMore.css';

const SeeMore = () => { 
    return (
        <div id="mainmore">
            <section id="project" className='project'>
                <div className='content-box'>
                    <h2 className='tit eng'>Mini Site</h2>
                    <div className='project-link'>
                        <ul>
                            <li>#Mini-Project</li>
                            <li>#WebSite</li>
                            <li>#반응형</li>
                            <li>#HTML</li>
                            <li>#CSS</li>
                        </ul> 
                    </div> 
                    <div className='project-wrap'>
                        <ul className='project-cont'>
                            <li id="hotel">
                                <div className='thum-img'>
                                    <img src='/images/hotel.jpg' alt=''/>
                                </div>
                                <div className='txt-cont'>
                                    <p>호텔 사이트 반응형 웹사이트 </p>
                                    <span>
                                        " HTML / CSS "
                                        <br/>
                                        "반응형 사이트로 1260px, 1006px,<br/>
                                        762px, 622px, 476px,크기로 디스플레이 구현함"
                                    </span>
                                    <div className='live-btn'>
                                    <a href='http://lhj100411.dothome.co.kr/hotel/index.html'>
                                        <h6>
                                            VIEW 
                                            <span>LIVE</span>
                                        </h6>
                                    </a>
                                        <a href='https://github.com/lhj00423/rago-hotel-css'>
                                            <h6>
                                                VIEW
                                                <span>GITHUB</span>
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li id="galaxy-site">
                                <div className='thum-img'>
                                    <img src='/images/galaxy.jpg' alt=''/>
                                </div>
                                <div className='txt-cont'>
                                    <p>Galaxy 렌트카 사이트 </p>
                                    <span>
                                        "HTML / CSS "
                                        <br/>   
                                        "hover했을 떄 bg 보이는 스타일링 적용,<br/>
                                        반응형 사이트로 768PX 이하일떄 구현함"
                                    </span>
                                    <div className='live-btn'>
                                        <a href='http://lhj100411.dothome.co.kr/galaxy/index.galaxy.html'>
                                            <h6>
                                                VIEW
                                                <span>LIVE</span>
                                            </h6>
                                        </a>
                                        <a href='https://github.com/lhj00423/galaxy-site-css'>
                                            <h6>
                                                VIEW
                                                <span>GITHUB</span>
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li id="indigo">
                                <div className='thum-img'>
                                    <img src='/images/indigo.jpg' alt=''/>
                                </div>
                                <div className='txt-cont'>
                                    <p>외국 사이트 반응형 사이트 구현 </p>
                                    <span>
                                        " HTML / CSS "
                                        <br/>
                                        " 웹사이트 1024px, 768px 순으로 화면 구현함 "
                                    </span>
                                    <div className='live-btn'>
                                        <a href='http://lhj100411.dothome.co.kr/indigo/index.html'>
                                            <h6>
                                                VIEW
                                                <span>LIVE</span>
                                            </h6>
                                        </a>
                                        <a href='https://github.com/lhj00423/indigo-site-css'>
                                            <h6>
                                                VIEW
                                                <span>GITHUB</span>
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li id="samsung-site">
                                <div className='thum-img'>
                                    <img src='/images/삼성생명.jpg' alt=''/>
                                </div>
                                <div className='txt-cont'>
                                    <p>Samsung 사이트</p>
                                    <span>
                                        "HTML / CSS "
                                        <br/>
                                        "header,main,footer, 구간 나누어 기본 스타일링 적용<br/>
                                        display, transform 활용함"
                                    </span>
                                    <div className='live-btn'>
                                        <a href='http://lhj100411.dothome.co.kr/samsung/index2.te.html'>
                                            <h6>
                                                VIEW
                                                <span>LIVE</span>
                                            </h6>
                                        </a>
                                        <a href='https://github.com/lhj00423/samsung-site-css'>
                                            <h6>
                                                VIEW
                                                <span>GITHUB</span>
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="say-goodbye">
                <h3>
                    프론트엔드 개발자 이효정의 포토폴리오를 봐주셔서 진심으로 감사드립니다.🙏
                    <br/>
                    성장하기 위해 노력하겠습니다 !
                </h3>
            </section>
        </div>
    );
};
export default SeeMore;<div>
</div>