import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe_2.css';

const AboutMe2 = () => {
    return (
        <div id="aboutme">
            <div id="content-box">
                <h2 className='titeng'>
                    ABOUT ME
                </h2>
                <div id="abt-wrap"> 
                    <div id="edu">
                        <h3>EDUCATION</h3>
                            <ul>
                                <li>
                                    <em>그린컴퓨터아카데미 프론트엔드 개발 취업 교육 수료</em>
                                    <p>iot 융합 javascript기반 소프트웨어 엔지니어 개발자(프론트 엔드) 양성과정</p><br/>
                                    <span>2022.10 - 2023.03</span>
                                </li>
                                <li>
                                    <em>부산가톨릭대학교</em>
                                    <p>노인복지학과 </p><br/>
                                    <span>커뮤니케이션 능력 습득, 협업시에 활용</span><br/>
                                    <span>2015.10 - 2020.03</span>
                                </li>
                            </ul>
                        </div>
                        <div className='skill'>
                            <h3>POSSIBLE SKILL</h3>
                            <ul>
                                <li>
                                    <em>정보처리기능사</em>
                                    <span>2023.02 필기 합격, 실기 응시 예정</span>
                                </li>
                                <li>
                                    <em>Adobe illustrator</em>
                                    <span>마크 및 사이트 제작시 필요한 로고 제작 경험</span>
                                </li>
                                <li>
                                    <em>Raspberry Pi</em>
                                    <span>PYTHON을 응용하여 전기회로 구조 및 기초이해를 실습을 통해 경험 및 학습</span>
                                </li>
                            </ul>
                        </div>
                    <div id="addskill">
                        <h3>ADD SKILL</h3>
                            <ul>
                                <li>
                                    <em>React.js</em>
                                    <span>
                                     conpontents 작성 및 조립으로 프로젝트 진행 밑 웹사이트 제작 완료 / 
                                    리액트 라우터를 활용하여 요청한 url 페이지에 따라 이동할수있음 / 
                                    useSate, useReducer, useEffect로 상태관리를 할수 있는 능력 학습 / 
                                    이미지를 업로드하여 관리하는 스토리지 서버인 multe를 활용할 수 있음
                                    </span>
                                </li>
                                <li>
                                    <em>JavaScript</em>
                                    <span> 
                                        filter, map, find를 활용하여 배열내의 사용되는 함수 기능 구현 가능 / 
                                        배열과 객체의 값을 구조 분해 할당후 활용할수 있음 / 
                                        정규표현식을 이용하여 회원가입, 아이디, 비밀번호 입력시에 최적화함 / 
                                        typescript 교육 수강때 todolist구현시에 활용한 경험있음
                                    </span> 
                                </li>
                                <li>
                                    <em>PHP</em>
                                    <span> 세션을 이용하여 사용자가 로그인 할 수 있는 기능 구현능력 습득 / Mysql 연결 후 데이터 베이스 관리가능함</span>
                                </li>
                                <li>
                                    <em>MySql</em>
                                    <span> 데이터베이스를 설계하고 구현하여 sql을 통해 데이터를 정의,조작,제어하는 방법에 대해 습득하여 기본적 조작 가능</span>
                                </li>
                                <li>
                                    <em>CSS3</em>
                                    <span>fixed,hover 등을 이용하여 스타일링 제작 가능함 / animation과 keyframes을 활용해 움직이는 모선의 스타일링 가능  </span>
                                </li>
                                <li>
                                    <em>HTML5</em>
                                    <span>기본 웹사이트의 구조 이해, section의 활용 등으로 기초 마크업의 실력 향상</span>
                                </li>
                            </ul>
                    </div>
                    <Link to="/seemore">
                        <section className= "swing">
                            <span className='more-btn'>SEE MORE</span>
                        </section>
                    </Link>   
                </div>
            </div>
        </div>
    );
};

export default AboutMe2;