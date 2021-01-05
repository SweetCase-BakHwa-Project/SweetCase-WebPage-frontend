import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from "../../components/bakhwa/Navbar";
import Album from "../../components/bakhwa/Album";

import Footer from '../../components/footer';

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";
import WhiteCanna from "../../img/album-cover.png";

const AlbumPage: React.FC = () => {

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
                <TitleText>Albums</TitleText>
                <MainLine />
                <ListEmpty />
                <ListLayer>
                    <ListLayerTitle>EP Album</ListLayerTitle>
                    <ListLayerLine />
                    <AlbumList>
                        <Album albumName="White Canna" createDate="2021/01/21" albumImgUrl={WhiteCanna} />
                        <Album albumName="Nightude Ep.2 1-2 - SweetCase Diary" createDate="2019/08/19" albumImgUrl="https://i1.sndcdn.com/artworks-000584386847-mbaigo-t500x500.jpg"/>
                        <Album albumName="Nightude Ep.1.5 - Another Worlds" createDate="2018/08/05" albumImgUrl="https://i1.sndcdn.com/artworks-000384470454-x7m52d-t500x500.jpg"/>
                        <Album albumName="Nightude Ep.1 - New Worlds" createDate="2018/05/12" albumImgUrl="https://i1.sndcdn.com/artworks-000347215173-dms54z-t500x500.jpg"/>
                    </AlbumList>
                </ListLayer>
                <ListEmpty />
                <ListLayer>
                    <ListLayerTitle>Single Album</ListLayerTitle>
                    <ListLayerLine />
                    <AlbumList>
                        <Album albumName="Pure Heart(純白)" createDate="2018/12/30" albumImgUrl="https://i1.sndcdn.com/artworks-000465365424-utzyh5-t500x500.jpg"/>
                        <Album albumName="新世界 Part.2 (New Worlds)" createDate="2015/06/01" albumImgUrl="https://i1.sndcdn.com/artworks-000392325441-mcr7x2-t500x500.jpg"/>
                        <Album albumName="Wish On The Wind" createDate="2015/06/01" albumImgUrl="https://i1.sndcdn.com/avatars-000748817248-oc4a3k-t500x500.jpg"/>
                        
                    </AlbumList>
                </ListLayer>
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

const TitleText = styled.p`
    padding-top: 1%;
    font-size: 50px;
    text-align: center; 
`
const MainLine = styled.div`
    width: 70%;
    height: 2px;
    margin-top: -10px;
    margin-left: 15%;
    margin-right: 15%;
    background-color: black;
    margin-bottom: 3%;
`
const ListEmpty = styled.div`
    width: 100%;
    height: 2%;
`
const ListLayer = styled.div`
    width: 110%;
    height: auto;
    overflow: hidden;
    margin-left: 5%;
    margin-bottom: 5%;
`
const ListLayerTitle = styled.h3`
    margin-left: 1%;
`
const ListLayerLine = styled.div`
    width: 70%;
    height: 1px;
    background-color: black;
    margin-bottom: 1%;
`
const AlbumList = styled.div`
    margin-top: 1%;
    margin-bottom: 1%;
`
export default AlbumPage;