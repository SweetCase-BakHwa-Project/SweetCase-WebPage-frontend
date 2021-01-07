import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';


import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';
import Sheet from "../../components/bakhwa/Sheet";

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";

import HostData from "../../config.json";

import axios from 'axios';

class MusicSheetInfoClass {
    sheetComponents:        JSX.Element[]
    constructor(sheetComponents:    JSX.Element[]) {
        this.sheetComponents = sheetComponents;
    }
}

const MusicSheets: React.FC = () => {

    const [musicSheetList, setMusicSheetList] = useState<MusicSheetInfoClass>();

    if(musicSheetList === undefined) {
        axios.post(HostData.bakhwaHost.host+HostData.bakhwaHost.api.get_musichseet_list)
        .then(data => {
            var musicSheetComponentList: JSX.Element[] = [];
            var _musicSheetList = data.data.data;
            for(var i = 0; i < _musicSheetList.length; i++) {
                musicSheetComponentList.push(
                    <Sheet sheetName={_musicSheetList[i].name} 
                            createDate={_musicSheetList[i].create_date} 
                            key={i} 
                            link={_musicSheetList[i].link} />
                );
            }
            setMusicSheetList(new MusicSheetInfoClass(musicSheetComponentList));
        }).catch((e) => {
            setMusicSheetList(new MusicSheetInfoClass([<h1>Server Disconnected</h1>]));
        });
    }

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
                    {musicSheetList?.sheetComponents}
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