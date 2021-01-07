import React, {useState} from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navbar from "../../components/bakhwa/Navbar";
import Album from "../../components/bakhwa/Album";

import Footer from '../../components/footer';

import Wallpaper from "../../img/bakhwa-wallpaper.jpg";

import axios from "axios";

import HostData from "../../config.json";

const AlbumPage: React.FC = () => {

    var [epAlbumList, setEpAlbumList] = useState<JSX.Element[]>();
    var [singleAlbumList, setSingleAlbumList] = useState<JSX.Element[]>();

    // Get Data
    if(epAlbumList === undefined) {
        axios.post(HostData.bakhwaHost.host+HostData.bakhwaHost.api.get_album_summary_list, {
            "type": "EP"
        }).then(data => {
            var albumComponentList = [];
            var _albumList = data.data.data;
            for(var i = 0; i < _albumList.length; i++) {
                albumComponentList.push(
                    <Album albumName={_albumList[i].album_name} 
                        createDate={_albumList[i].create_date} 
                        albumImgUrl={_albumList[i].album_cover}
                        key={i} />
                );
            }
            setEpAlbumList(albumComponentList);
        }).catch(e => {
            setEpAlbumList([<h1>Server Disconnected</h1>]);
        })
    }
    if(singleAlbumList === undefined) {
        axios.post(HostData.bakhwaHost.host+HostData.bakhwaHost.api.get_album_summary_list, {
            "type": "Single"
        }).then(data => {
            var albumComponentList = [];
            var _albumList = data.data.data;
            for(var i = 0; i < _albumList.length; i++) {
                albumComponentList.push(
                    <Album albumName={_albumList[i].album_name} 
                        createDate={_albumList[i].create_date} 
                        albumImgUrl={_albumList[i].album_cover}
                        key={i} />
                );
            }
            setSingleAlbumList(albumComponentList);
        }).catch(e => {
            setSingleAlbumList([<h1>Server Disconnected</h1>]);
        })
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
                <TitleText>Albums</TitleText>
                <MainLine />
                <ListEmpty />
                <ListLayer>
                    <ListLayerTitle>EP Album</ListLayerTitle>
                    <ListLayerLine />
                    <AlbumList>
                        {epAlbumList}
                    </AlbumList>
                </ListLayer>
                <ListEmpty />
                <ListLayer>
                    <ListLayerTitle>Single Album</ListLayerTitle>
                    <ListLayerLine />
                    <AlbumList>
                        {singleAlbumList}
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