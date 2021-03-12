import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {IsPC, IsMobile} from "../configs/ResponseWebRange";
import MainTitleImg from "../img/SweetcaseTitleLogo.gif";

import config from "../config.json";
import '../fonts/fonts.css';

const Main = styled.div`
    width: 100%;
    height: 100%;
    color: ${config.colors['main-color']}
`

const PageHome: React.FC = () => {
    return (
        <Main>
            <Helmet>
                <title>SWEETCASE</title>
            </Helmet>
            {
                IsPC() &&
                <div>
                    <TitleImgInPC src={MainTitleImg}/>
                    <MainLayoutInPC>
                        <BakhwaProjectLayoutInPC>
                            <BakhwaProjectTitleText>白花 PROJECT</BakhwaProjectTitleText>
                            <MainMiddleLine />
                        </BakhwaProjectLayoutInPC>
                        <BlackLineProjectLayoutInPC>
                            <BlackLineProjectTitle>BLACKLINE</BlackLineProjectTitle>
                            <MainMiddleLine />
                        </BlackLineProjectLayoutInPC>
                    </MainLayoutInPC>
                </div>
                
            }
            {
                IsMobile() &&
                <div>
                    <TitleImgInMobile src={MainTitleImg}/>
                    <MainLayoutInMobile>
                        <BakhwaProjectLayoutInMobile>
                            <BakhwaProjectTitleText>白花 PROJECT</BakhwaProjectTitleText>
                            <MainMiddleLine />
                        </BakhwaProjectLayoutInMobile>
                        <BlackLineProjectLayoutInMobile>
                            <BlackLineProjectTitle>BLACKLINE</BlackLineProjectTitle>
                            <MainMiddleLine />
                        </BlackLineProjectLayoutInMobile>
                    </MainLayoutInMobile>
                </div>
            }
        </Main>
    );
}


// ALL PC And Mobile
const BlackLineProjectTitle = styled.h1`
    font-family: 'Android_101';
`
const BakhwaProjectTitleText = styled.h1`
    font-family: 'Nanum Myeongjo', serif;
`
const MainMiddleLine = styled.div`
    margin: 10px;
    height: 1px;
    width: 90%;
    background-color: ${config.colors['shallow-color']};
`


// PC EDITION
const TitleImgInPC = styled.img`
    width: 400px;
    margin-top: 50px;
    left: 50%;
    margin-left: -200px;
    position: absolute;
`
const MainLayoutInPC = styled.div`

    margin-top: 300px;
    margin-left: 30px;
    margin-right: 30px;
    width: 90%;

    position: absolute;
`
const BakhwaProjectLayoutInPC = styled.div`
`
const BlackLineProjectLayoutInPC = styled.div`
`

// MOBILE EDITION
const TitleImgInMobile = styled.img`
    width: 300px;
    margin-top: 30px;
    left: 50%;
    margin-left: -150px;
    position: absolute;
`

const MainLayoutInMobile = styled.div`
    margin-top: 200px;
    margin-left: 30px;
    margin-right: 30px;
    width: 90%;

    position: absolute;
`
const BakhwaProjectLayoutInMobile = styled.div`
`
const BlackLineProjectLayoutInMobile = styled.div`
`

export default PageHome;