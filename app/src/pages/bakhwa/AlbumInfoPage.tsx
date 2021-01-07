import Helmet from 'react-helmet';
import styled from 'styled-components';


import React, {useState} from 'react';
import { generatePath, RouteComponentProps } from "react-router-dom";

import Navbar from "../../components/bakhwa/Navbar";
import Footer from '../../components/footer';
import TrackSong from "../../components/bakhwa/TrackSong";

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";
import axios from 'axios';

import HostData from "../../config.json";

interface AlbumInfoInterface  {
    albumName: string;
}
class ComponentAlbumInfo {
    name:               string;
    cover:              string;
    downloadLink:       string;
    soundCloudLink:     string;
    createDate:         string;
    type:               string;
    genre:              string;
    songListComponent: JSX.Element[];

    constructor(name:       string, 
            cover:          string,
            downloadLink:   string, 
            soundCloudLink: string,
            createDate:     string,
            type:           string,
            genre:          string,
            songListComponent: JSX.Element[]) {

        this.name               = name;
        this.downloadLink       = downloadLink;
        this.soundCloudLink     = soundCloudLink;
        this.songListComponent  = songListComponent;
        this.createDate         = createDate;
        this.type               = type;
        this.genre              = genre;
        this.cover              = cover;
    }
}
class ComponentAlbumInfoBuilder {
    name:               string;
    cover:              string;
    downloadLink:       string;
    soundCloudLink:     string;
    createDate:         string;
    type:               string;
    genre:              string;
    songListComponent: JSX.Element[];
    
    constructor() {
        this.name               = "";
        this.cover              = "";
        this.downloadLink       = "";
        this.soundCloudLink     = "";
        this.createDate         = "";
        this.type               = "";
        this.genre              = "";
        this.songListComponent  = []
    }
    
    setName(name: string): ComponentAlbumInfoBuilder                        { this.name = name; return this; };
    setCover(cover: string): ComponentAlbumInfoBuilder                      { this.cover = cover; return this; };
    setDownloadLink(downloadLink: string): ComponentAlbumInfoBuilder        { this.downloadLink = downloadLink; return this; };
    setSoundCloudLink(soundCloudLink: string): ComponentAlbumInfoBuilder    { this.soundCloudLink = soundCloudLink; return this; };
    setCreateDate(createDate: string): ComponentAlbumInfoBuilder            { this.createDate = createDate; return this; }
    setType(type: string): ComponentAlbumInfoBuilder                        { this.type = type; return this; }
    setGenre(genre: string): ComponentAlbumInfoBuilder                       { this.genre = genre; return this; }
    setSongListComponent(songListComponent: JSX.Element[]): ComponentAlbumInfoBuilder  { this.songListComponent = songListComponent; return this; }; 

    build() { 
        return new ComponentAlbumInfo(
            this.name,
            this.cover,
            this.downloadLink,
            this.soundCloudLink,
            this.createDate,
            this.type,
            this.genre,
            this.songListComponent
        )
    }

}
const AlbumInfoPage = ({ match }: RouteComponentProps<AlbumInfoInterface>) => {

    var albumName = match.params.albumName;

    const [albumInfo, setAlbumInfo] = useState<ComponentAlbumInfo>();

    if(albumInfo === undefined) {
        axios.post(HostData.bakhwaHost.host+HostData.bakhwaHost.api.get_album_info, {
            "album_name": albumName
        }).then(
            data => {
                var _albumInfo = data.data.data;
                var songComponents: JSX.Element[] = [];

                for(var i = 0; i < _albumInfo.song_list.length; i++) {
                    songComponents.push(
                        <TrackSong key={i} trackNumber={i+1} musicName={_albumInfo.song_list[i].name} musicUrl={_albumInfo.song_list[i].link} />
                    );
                }
                setAlbumInfo(new ComponentAlbumInfoBuilder()
                                .setName(albumName)
                                .setCover(_albumInfo.album_cover)
                                .setDownloadLink(_albumInfo.album_download_link)
                                .setSoundCloudLink(_albumInfo.soundcloud_link)
                                .setSongListComponent(songComponents)
                                .setCreateDate(_albumInfo.create_date)
                                .setType(_albumInfo.album_type)
                                .setGenre(_albumInfo.genre)
                                .build()
                                );
                
            }
        ).catch(e => {
            // Error
            window.location.href = "https://www.google.com";
        });
    }
    
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
                    <SummaryImgLayer src={albumInfo?.cover} />
                    <SummaryTextLayer>
                        <Summary>
                            <h2>{albumName}</h2>
                            <p>Create Date: {albumInfo?.createDate}</p>
                            <p>Ganre: {albumInfo?.genre}</p>
                            <p>Type: {albumInfo?.type}</p>
                        </Summary>
                        <ButtonLayer>
                            <Btn><button className="btn btn-primary" onClick={() =>{
                                if(albumInfo !== undefined) {
                                    window.open(
                                        albumInfo.downloadLink,
                                        "_blank"
                                    );
                                }
                            }} >Download</button></Btn>
                            <Btn><button className="btn btn-warning" onClick={() => {
                                if(albumInfo !== undefined) {
                                    window.open(
                                        albumInfo.soundCloudLink,
                                        "_blank"
                                    );
                                }
                            }}>Soundcloud</button></Btn>
                        </ButtonLayer>
                    </SummaryTextLayer>
                </SummaryLayer>
                <MainLine />
                <TrackList>
                    <h2>Track List</h2>
                    {albumInfo?.songListComponent}
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