import Helmet from 'react-helmet';
import styled from 'styled-components';


import React from 'react';
import { RouteComponentProps } from "react-router-dom";

import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';
import TrackSong from "../../components/bakhwa/TrackSong";

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";

interface AlbumInfoInterface  {
    albumName: string;
}
const AlbumInfoPage = ({ match }: RouteComponentProps<AlbumInfoInterface>) => {

    var albumName = match.params.albumName;
    var imgUrl = "https://i1.sndcdn.com/artworks-000347215173-dms54z-t500x500.jpg";

    var exampleTrackNumber: number = 2;
    
    return (
        <Main>
            <Helmet>
                <title>白花 Project-Albums</title>
            </Helmet>
                <Navbar 
                    album="nav-link active"
                    musicSheet="nav-link"
                />
            <Body>
                <SummaryLayer>
                    <SummaryImgLayer src={imgUrl} />
                    <SummaryTextLayer>
                        <Summary>
                            <h2>{albumName}</h2>
                            <p>Create Date: 2000/01/01</p>
                            <p>Ganre: New Age</p>
                            <p>Type: EP Album</p>
                        </Summary>
                        <ButtonLayer>
                            <Btn><button className="btn btn-primary">Download</button></Btn>
                            <Btn><button className="btn btn-warning">Soundcloud</button></Btn>
                        </ButtonLayer>
                    </SummaryTextLayer>
                </SummaryLayer>
                <MainLine />
                <TrackList>
                    <h2>Track List</h2>
                    <TrackSong trackNumber={exampleTrackNumber} musicName="music1" />
                    <TrackSong trackNumber={exampleTrackNumber} musicName="music1" />
                    <TrackSong trackNumber={exampleTrackNumber} musicName="music1" />
                </TrackList>
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
width: auto;
height: auto;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.7);
margin-left: 15%;
margin-right: 15%;
padding-left: 1%;
`
const SummaryLayer = styled.div`
    width: 100%;
    height: auto;
`
const MainLine = styled.div`
    clear: both;
    width: 95%;
    height: 2px;
    background-color: black;
    margin-bottom: 10px;
`
const SummaryImgLayer = styled.img`
width: 30%;
margin-bottom: 2%;
margin-left: 2%;
margin-right: 2%;
float: left;
`
const SummaryTextLayer = styled.div`
    padding-top: 2%;
    width 100%;
    height: auto;
    margin-top: 2%;
    margin-right: 1%;
`
const Summary = styled.div`
    position: alsolute;
    top: 0;
`
const ButtonLayer = styled.div`
    width: 100%;
`
const Btn = styled.div`
    margin-right: 10px;
    float: left;
`

const TrackList = styled.div`
    margin-left: 2%;
`
const TrackListLi = styled.div`
`
export default AlbumInfoPage;