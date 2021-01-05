import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';


import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";

const MusicSheets: React.FC = () => {

    return (
        <Main>
            <Helmet>
                <title>白花 Project-Albums</title>
            </Helmet>
            <Navbar 
                album="nav-link"
                musicSheet="nav-link active"
                about="nav-link" 
            />
            <Body>
                <TitleText>Music Sheets</TitleText>
                <Line />
            </Body>
            <Footer backgroundcolor="#000000" />
        </Main>
    );
}
const Main = styled.div`
width: 100%;
height: 100%;
font-family: 'Nanum Myeongjo', serif;
background-image: url(${Wallpaper});
`
const Body = styled.div`
margin-top: 3%;
width: 70%;
height: 120vh;
background-color: rgba(255, 255, 255, 0.7);
margin-left: 15%;
margin-right: 15%;
`
const TitleText = styled.p`
    padding-top: 1%;
    font-size: 50px;
    text-align: center; 
`
const Line = styled.div`
    width: 70%;
    height: 2px;
    margin-top: -10px;
    margin-left: 15%;
    margin-right: 15%;
    background-color: black;
`
export default MusicSheets;