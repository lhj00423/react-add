import React from 'react';
import './Project_3.css';

const Project3 = () => {
    return (
        <div id="project" className='project'>
            <div className='content-box'>
                <h2 className='titeng'>PROJECT</h2>
                <div className='project-top4'>
                    <ul>
                        <li id="ball">
                            <div id="top4-ball">
                                <img src='/images/javascript_ball.png' alt=""></img>
                            </div>
                            <div className='top4-cont'>
                                <span> HTML5, CSS3, JavaScript </span>
                                <em>Baseball-Game</em>
                                <p className='sub-tit'>
                                    javascript를 기반으로 야구게임 사이트입니다.
                                </p>
                                <p className='cont-txt'>
                                    현장 야구장 전광판 구현 및 css 효과 / 팀교체 알림 / 
                                    <br className='pc'/>
                                    스윙 ,볼 확률 실제 경기처럼 조정
                                </p>
                                <div className='live-btn'>
                                    <h6>
                                         VIEW 
                                        <span>LIVE</span>
                                    </h6>
                                    <a href='https://github.com/lhj00423'><h6>
                                        VIEW  
                                        <span>GITHUB</span>
                                    </h6></a>
                                </div>
                            </div>
                        </li>
                        <li id="among-us">
                            <div className='top4-cont'>
                                    <span> HTML5, CSS3, JavaScript </span>
                                    <em>Among-Us-Game</em>
                                    <p className='sub-tit'>
                                        javascript를 기반으로 두더지 잡기 게임을
                                        모티브한 어몽어스 게임입니다.
                                    </p>
                                    <p className='cont-txt'>
                                        두더지 잡기 게임 구현을 JavaScript으로 표현 / 캐릭터를 어몽어스로 구현 / 
                                        <br className='pc'/>
                                        게임 난이도를 높이기 위해 캐릭터 등장시간 조정
                                    </p>
                                    <div className='live-btn'>
                                        <h6>
                                            VIEW 
                                            <span>LIVE</span>
                                        </h6>
                                        <a href='https://github.com/lhj00423'><h6>
                                            VIEW  
                                            <span>GITHUB</span>
                                        </h6></a>
                                    </div>
                            </div>
                            <div id="top4-ball">
                                <img src='/images/javascript_amongus.png' alt=""></img>
                            </div>
                        </li>
                        <li id="php">
                            <div id="top4-ball">
                                <img src='/images/php_music.png' alt=""></img>
                            </div>
                            <div className='top4-cont'>
                                <span> HTML5, CSS3, PHP, MYSQL </span>
                                <em>Muise-Site</em>
                                <p className='sub-tit'>
                                    PHP, MYSQL으로 구현하여, 데이터베이스 전송 가능한 사이트입니다.
                                </p>
                                <p className='cont-txt'>
                                    회원가입, 로그인 및 아이디,비밀번호 찾기 기능 가능 / 검색 기능 구현 / 
                                    <br className='pc'/>
                                    관리자 아이디로 로그인하면 앨범아트 등록 가능
                                </p>
                                <div className='live-btn'>
                                    <h6>
                                         VIEW 
                                        <span>LIVE</span>
                                    </h6>
                                    <a href='https://github.com/lhj00423'><h6>
                                        VIEW  
                                        <span>GITHUB</span>
                                    </h6></a>
                                </div>
                            </div>
                        </li>
                        <li id="react">
                            <div className='top4-cont'>
                                <span> HTML5, CSS3, REACT</span>
                                <em>Cafe-Site</em>
                                <p className='sub-tit'>
                                    React를 이용하여 starbucks을 모티브로 만든 카페사이트 입니다.
                                </p>
                                <p className='cont-txt'>
                                    회원가입, 로그인 및 아이디,비밀번호 찾기 기능 구현 / 메인 페이지 컴포넌트로 구성
                                <br className='pc'/>
                                    React를 활용한 compontents 작성 / 
                                    카테고리를 나누어 관리자 모드시에 등록 가능
                                </p>
                                <div className='live-btn'>
                                    <h6>
                                        VIEW 
                                    <span>LIVE</span>
                                    </h6>
                                    <a href='https://github.com/lhj00423'><h6>
                                        VIEW  
                                        <span>GITHUB</span>
                                    </h6></a>
                                </div>
                            </div>
                            <div id="top4-ball">
                                <img src='/images/react_site.png' alt=""></img>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project3;