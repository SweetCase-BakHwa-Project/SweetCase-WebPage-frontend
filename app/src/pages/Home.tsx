import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {IsPC, IsMobile} from "../configs/ResponseWebRange";

import MainNavbar from "../components/navbar/MainNavbar";

import '../fonts/fonts.css';
import webColor from '../config.json';

import MainDisplay from "../img/main-display.gif";

import BakhwaExampleNews from "../img/examples/bakhwa-main-title.png";
import CobaltoExampleNews from "../img/examples/cobalto-main-title.png";

const Main = styled.div`
    width: 100%;
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

                    <MainNavbar />
                    <MainDisplayInPC src={MainDisplay} />

                    <BakhwaWallLine>白花 PROJECT</BakhwaWallLine>
                    <BakhwaNewsLayoutInPC>
                        <BakhwaNewsTitleText>News</BakhwaNewsTitleText>
                        <BakhwaNewsImg src={BakhwaExampleNews} />
                    </BakhwaNewsLayoutInPC>

                    <CobaltoWallLine>cobalto</CobaltoWallLine>
                    <CobaltoNewsLayoutInPC>
                        <CobaltoNewsTitleText>News</CobaltoNewsTitleText>
                        <CobaltoNewsImg src={CobaltoExampleNews} />
                    </CobaltoNewsLayoutInPC>

                    <CommunicationWallLine>communications</CommunicationWallLine>

                </div>
            }
            {
                IsMobile() &&
                <div>
                </div>
            }
        </Main>
    );
}

// Common
const BakhwaWallLine = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${webColor.colors.bakhwa.dark};
    font-family: 'Nanum Myeongjo', serif;
    color: white;
    font-size: 25px;
    padding-top: 10px;
    margin-top: 10px;
    padding-left: 20px;
`

const CobaltoWallLine = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${webColor.colors.cobalto.dark};
    font-family: 'Android_101';
    color: white;
    font-size: 25px;
    padding-top: 10px;
    margin-top: 30px;
    padding-left: 20px;
`

const CommunicationWallLine = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${webColor.colors.box.main};
    font-family: 'Android_101';
    color: white;
    font-size: 25px;
    padding-top: 10px;
    margin-top: 30px;
    padding-left: 20px;
    text-align: center;
`

// Only PC
const MainDisplayInPC = styled.img`
    width: 100%;
    margin-top: 2px;
`

const BakhwaNewsLayoutInPC = styled.div`
    width: 1200px;
    height: 600px;
    background-color: ${webColor.colors.bakhwa.flated};
    margin-top: 30px;
    margin-left: 80px;
`
const BakhwaNewsTitleText = styled.h1`
    color: ${webColor.colors.bakhwa.dark};
    padding-top: 10px;
    padding-left: 20px;
    font-family: 'Nanum Myeongjo', serif;
`
const BakhwaNewsImg = styled.img`
    width: 1010px;
    margin-left: 20px;
    box-shadow: 3px 3px 3px black;

`

const CobaltoNewsLayoutInPC = styled.div`
    width: 1200px;
    height: 600px;
    background-color: ${webColor.colors.cobalto.flated};
    margin-top: 30px;
    margin-left: 80px;
`
const CobaltoNewsTitleText = styled.h1`
    color: ${webColor.colors.cobalto.dark};
    padding-top: 10px;
    padding-left: 20px;
    font-family: 'Android_101';
`
const CobaltoNewsImg = styled.img`
    width: 1010px;
    margin-left: 20px;
    box-shadow: 3px 3px 3px black;

`
// MOBILE EDITION

export default PageHome;