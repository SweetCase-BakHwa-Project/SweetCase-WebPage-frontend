import React from 'react';
import Footer from '../components/footer';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";
import '../fonts/fonts.css'

import Wallpaper from "../img/sweetcase-wallpaper.gif"

const NavTitle = styled.div`
    color: white;
    font-size: 20px;
`

const SweetCase: React.FC = () => {
    const Main = styled.div`
        width: 100%;
        height: 100%;
        font-family: "Android_101";
    `
    const WallpaperLayer = styled.div`
        background-image: url(${Wallpaper});
        background-size: cover;
        width: 100%;
        height: 70vh;
        opacity: 0.5;
    `
    const WallpaperTitle = styled.h1`
        color: white;
        text-align: center;
        padding-top: 8%;
    `
    const WallpaperSince = styled.h5`
        color: white;
        text-align: center;
        padding-top: 0.5%;
    `
    return (
        <Main>
            <Helmet>
                <title>SWEETCASE-SWEETCASE Project</title>
            </Helmet>
            <nav className="navbar navbar-dark bg-primary">
                <NavTitle>SweetCase</NavTitle>
            </nav>
            <WallpaperLayer>
                <WallpaperTitle>SweetCase Project</WallpaperTitle>
                <WallpaperSince>since 2020</WallpaperSince>
            </WallpaperLayer>
            <Footer backgroundcolor="#0E6AC7" />
        </Main>
    );
}
export default SweetCase;