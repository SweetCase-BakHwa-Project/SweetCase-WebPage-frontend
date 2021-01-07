import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from "../components/bakhwa/Navbar";
import Footer from '../components/footer';

import "bootstrap/dist/css/bootstrap.min.css";
import '../fonts/fonts.css'

import Wallpaper from "../img/bakhwa-wallpaper.jpg"
const BakhwaProject: React.FC = () => {

    const WallpaperLayer = styled.div`
        position: relative;
        background-image: url(${Wallpaper});
        background-size: cover;
        width: 100%;
        height: 70vh;
    `
    return (
        <Main>
            <Helmet>
                <title>SWEETCASE-白花 Project</title>
            </Helmet>
            <Navbar
                album="nav-link"
                musicSheet="nav-link"
            />
            <WallpaperLayer>
                <NoneOpacityWallpaperLayer>
                    <WallpaperTitle>白花 PROJECT</WallpaperTitle>
                    <WallpaperLine />
                    <WallpaperSince>since 2015</WallpaperSince>
                    <WallpaperSummary>
                        <WallpaperText>
                            We Wish Make Pure Music <br></br>
                            That Means "For Miracle" <br></br>
                        </WallpaperText>
                    </WallpaperSummary>
                </NoneOpacityWallpaperLayer>
            </WallpaperLayer>
            <Footer backgroundcolor="#000000" />
        </Main>
    );
}
const Main = styled.div`
width: 100%;
height: 100%;
font-family: 'Nanum Myeongjo', serif;
`
const NoneOpacityWallpaperLayer = styled.div`
background: rgba(255, 255, 255, 0.3);
height: 100%;

`
const WallpaperTitle = styled.h1`
color: #000000;
text-align: center;
padding-top: 8%;
opacity: 1;
`
const WallpaperLine = styled.div`
margin: 100px,20%;
width: 100%;
height: 2px;
background-color: black;
`
const WallpaperSince = styled.h5`
color: #000000;
text-align: center;
padding-top: 0.5%;
`
const WallpaperSummary = styled.div`
padding-top: 5%;
`
const WallpaperText = styled.div`
color: #000000;
text-align: center;
font-size: 20px;
`
export default BakhwaProject;