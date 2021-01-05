import Helmet from 'react-helmet';
import styled from 'styled-components';


import React from 'react';
import { RouteComponentProps, RouteProps } from "react-router-dom";

import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";
interface AlbumInfoInterface  {
    albumName: string;
}
const AlbumInfoPage = ({ match }: RouteComponentProps<AlbumInfoInterface>) => {
    return (
        <Main>
            <Helmet>
                <title>白花 Project-Albums</title>
            </Helmet>
                <Navbar 
                    album="nav-link active"
                    musicSheet="nav-link"
                    about="nav-link" 
                />
            <Body>
                <h1>{match.params.albumName}</h1>
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
height: auto;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.7);
margin-left: 15%;
margin-right: 15%;
`
export default AlbumInfoPage;