import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

import TitleImg from '../img/all_logo.png';

import MainWallpaper from "../img/main-wallpaper.jpg";


import Footer from '../components/footer';
import MainNavbar from "../components/mainNavbar";

import SweetCaseWallpaper from "../img/sweetcase-wallpaper.gif";
import BakhwaWallpaper from "../img/bakhwa-wallpaper.jpg";

import IconGithub from '../img/GitHub-Mark-Light-32px.png';
import SoundCloudLogo from '../img/soundcloud-logo.gif';

import ReicomA from "../img/reicoma.gif";

import '../fonts/fonts.css'

const Home: React.FC = () => {

    return (
        <Main>
            <Helmet>
                <title>SWEETCASE</title>
            </Helmet>
            <MainNavbar />

            <CardLayer>
                <Card>
                    <Title><img src={TitleImg} width="100%"/></Title>
                    <TitleTextSection>
                        2015년 음악 프로젝트인 白花 PROJECT에서 시작하여<br></br>
                        2019년 Key Value Data Storage인 SKVS를 시작으로 SweetCase PROJECT가 추진되었으며<br></br>
                        현재 위 두 가지 프로젝트를 하나로 합쳐<br></br>
                        음악과 IT 융햡 프로젝트를 연구하기 위해 1인팀 SweetCase Words를 만들게 되었습니다.<br></br>
                    </TitleTextSection>
                </Card>
                <EmptyLayer />
                <Card>
                    <SweetCaseSection>
                        <NoneImgLayerInCard >
                            <SweetCaseTitle>SweetCase Project</SweetCaseTitle>
                            <SweetCaseSince>Since 2019</SweetCaseSince>
                            <SweetCaseTextSection>
                                SweetCase Project는 주로 개발과 관련된 내용들을 다룹니다.<br></br>
                                그러나 단순히 프로젝트, 포트폴리오만 만드는 수준으로 끝나는 것이 아닌 개발한 패키지 및 프로젝트를 배포 및 유지보수 까지 진행하며<br></br>
                                Life Cycle 및 Software Architecture를 중시합니다.<br></br><br></br>

                                Debian 환경의 개발 및 패키지를 주로 진행하며<br></br>
                                주로 Web Application, Iot, Android, Linux System 등을 다룹니다.<br></br>
                            </SweetCaseTextSection>
                            <SweetCaseButtonLayer>
                                <SweetCaseButton>
                                <a href="http://www.sweetcase.tk/sweetcase" style={{ textDecoration: 'none', color: "white"}} target="_blank">
                                    WebSite
                                </a>
                                </SweetCaseButton>
                                <SweetCaseButton>
                                    <a href="https://github.com/SweetCase-BakHwa-Project" style={{ textDecoration: 'none', color: "white"}} target="_blank">
                                        <ImgInButton src={IconGithub} width="20"/>Github
                                    </a>
                                </SweetCaseButton>
                            </SweetCaseButtonLayer>
                        </NoneImgLayerInCard>
                    </SweetCaseSection>
                </Card>
                <EmptyLayer />
                <Card>
                    <BakhwaSection>
                        <NoneImgLayerInCard >
                            <BakhwaTitle>白花 PROJECT</BakhwaTitle>
                            <BakhwaSince>Since 2015</BakhwaSince>
                            <BakhwaTextSection>
                                백화프로젝트는 SweetCase Project와 SweetCase Words의 기원으로 음악관련된 프로젝트 다룹니다.<br></br>
                                2015년, 리눅스 환경의 무료 DAW Software인 LMMS의 첫경험을 시작으로 Cubase를 거쳐 현재 FL Studio 20으로 음악을 작업하고 있습니다.<br></br>
                                19~20년도 까지의 작업물이 뜸했지만 21년도 이후로 여러 프로젝트를 계속 진행하고 있습니다.<br></br><br></br>

                                주로 클래식 및 뉴에이지 위주로 다루며 그 외에도 일렉트로닉 관련 장르도 다루고 있습니다.<br></br>
                                백화 프로젝트는 "미래에 대한 희망"을 추구하기 때문에 모든 곡의 엔딩은 항상 해피엔딩으로 마무리 됩니다.
                            </BakhwaTextSection>
                            <BakhwaButtonLayer>
                                <BakhwaButton>
                                    <a href="http://www.sweetcase.tk/bakhwaproject" style={{ textDecoration: 'none', color: "black"}} target="_blank">
                                        WebSite
                                    </a>
                                </BakhwaButton>
                                <BakhwaButton>
                                    <a href="https://soundcloud.com/dj4zokfdkjb5" style={{ textDecoration: 'none', color: "black"}} target="_blank">
                                        <ImgInButton src={SoundCloudLogo} width="20"/>SoundCloud
                                    </a>
                                </BakhwaButton>
                            </BakhwaButtonLayer>
                        </NoneImgLayerInCard>
                    </BakhwaSection>
                </Card>
                <EmptyLayer />
                <Card>
                    <CreatorSection>
                        <CreatorTitle>Creator</CreatorTitle>
                        <CreatorInfoLayer>
                            <CreatorInfoImg src={ReicomA} />
                            <CreatorWriteSection>
                                <p>Name: Jeong-Hyun Ha (a.k.a "ReicomA" WinterMind)</p>
                                <p>Major: Computer Engineering</p>
                                <p>Github: <a href="https://github.com/ReicomA" target="_blank">https://github.com/ReicomA</a></p>
                                <p>SoundCloud: <a href="https://soundcloud.com/dj4zokfdkjb5" target="_blank">https://soundcloud.com/dj4zokfdkjb5</a></p>
                                <p>Email: <a href="mailto:seokbong60@gmail.com">seokbong60@gmail.com</a></p>
                                <br></br>
                                <p>Develop Tag: Backend, Docker, Python, Java, Django, Spring</p>
                                <p>Music Tag: Classic, Orchestral, Pinao Etude, New Age, Happy Hardcore</p>
                            </CreatorWriteSection>
                        </CreatorInfoLayer>
                    </CreatorSection>
                </Card>
            </CardLayer>
            
            <Footer backgroundcolor="#0E6AC7" />
        </Main>
    );
    
}
// Main Section
const Main = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${MainWallpaper});
    background-size: 100% 100%;
    background-attachment: fixed;
    
`

// Common Section
const ImgInButton = styled.img`
    margin-right: 10px;
`
// Card Section
const CardLayer = styled.div`
    padding-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
`
const Card = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 10px 10px 20px white;
`
const NoneImgLayerInCard = styled.div`
    background-color: white;
    background: rgba(255, 255, 255, 0.4);
    height: 100%;

`
const EmptyLayer = styled.div`
    width: 100%;
    height: 200px;
`
// Title Section
const TitleTextSection = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
`
const Title  = styled.div`
    width: 400px;
    left: 100%;
    margin: 0 auto;
    padding-top: 20px;
`

// SweetCase CSS Section
const SweetCaseSection = styled.div`
    background-image: url(${SweetCaseWallpaper});
    background-size: 100%;
    width: 100%;
    height: 100%;
`
const SweetCaseTitle = styled.h1`
    color: white;
    text-align: center;
    font-family: 'Android_101';
    padding-top: 50px;
`
const SweetCaseSince = styled.h5`
    color: white;
    text-align: center;
    font-family: 'Android_101';
    padding-bottom: 50px; 
`
const SweetCaseTextSection = styled.p`
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
`
const SweetCaseButton = styled.button`
    border: 1px solid white;
    background-color: white;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
    border-radius: 10px 10px 10px 10px /10px 10px 10px 10px; 
`
const SweetCaseButtonLayer = styled.div`
    left: 50%;
    position: relative;
    margin-left: -120px;
`


// Bakhwa Section
const BakhwaSection = styled.div`
    clear: both;
    background-image: url(${BakhwaWallpaper});
    background-size: 100%;
    width: 100%;
    height: 100%;
    font-family: 'Nanum Myeongjo', serif;
    text-align: center;
`
const BakhwaTitle = styled.h1`
    padding-top: 50px;
`
const BakhwaSince = styled.h5`
    padding-bottom: 50px;
    font-weight: bold;
`
const BakhwaTextSection = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
`
const BakhwaButton = styled.button`
    border: 1px solid black;
    background-color: white;
    background: rgba(255, 255, 255, 0.05);
    color: black;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
    border-radius: 10px 10px 10px 10px /10px 10px 10px 10px; 
    font-weight: bold;
`
const BakhwaButtonLayer = styled.div`
    left: 50%;
`

// Creator Section
const CreatorSection = styled.div`
    clear: both;
    width: 100%;
    height: auto;
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    background-color: #f3f3fe;
`
const CreatorTitle = styled.h1`
    padding-top: 50px;
    padding-bottom: 30px;
`
const CreatorInfoLayer = styled.div`
    margin: 30px;
    border: 1px black solid;
    padding: 10px;
    height: 100%;
    overflow: hidden;
`
const CreatorInfoImg= styled.img`
    width: 300px;
    float: left;
`
const CreatorWriteSection = styled.div`
float: left;
margin-left: 30px;
text-align: left;
`
export default Home;