import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';


import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';
import Sheet from "../../components/bakhwa/Sheet";

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";

const MusicSheets: React.FC = () => {

    var examplePdfUrl = "example.pdf";
    var pageNumber = 1;
    return (
        <Main>
            <Helmet>
                <title>白花 Project-MusicSheets</title>
            </Helmet>
            <Navbar 
                album="nav-link"
                musicSheet="nav-link active"
            />
            <Body>
                <TitleText>Music Sheets</TitleText>
                <MainLine />
                <SubTitleText>여기 있는 모든 악보들은 무료입니다.</SubTitleText>
                <ListEmpty />
                <MusicSheetLayer>
                    <Sheet sheetName="Tragic Waltz" createDate="2018/05/12" />
                    <Sheet sheetName="新世界(신세계) Part.1 (UnkNoWn WoRldS)" createDate="2018/05/12" />
                </MusicSheetLayer>
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
const SubTitleText = styled.p`
    font-size: 15px;
    text-align: center;
    margin-top: 10px; 
`
const MainLine = styled.div`
    width: 70%;
    height: 2px;
    margin-top: -10px;
    margin-left: 15%;
    margin-right: 15%;
    background-color: black;
`
const ListEmpty = styled.div`
    width: 100%;
    height: 2%;
`
const MusicSheetLayer = styled.ul`
width: 110%;
height: auto;
overflow: hidden;
margin-left: 5%;
margin-bottom: 5%;
`
export default MusicSheets;