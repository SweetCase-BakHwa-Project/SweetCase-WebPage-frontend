import React, { useState } from 'react';
import styled from 'styled-components';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const TrackSong: React.FC<{
    trackNumber: number,
    musicName: string
}> = ({ trackNumber, musicName }) => {

    const [isAudioPlayVisible, setIsAudioPlayVisible] = useState({display: "none", playButtonClassNames: "btn btn-primary"});

    // Audio Player
    const AudioLayer = styled.div`
        display: ${isAudioPlayVisible.display};
    `
    const musicUrl = "https://sweetcase-webpage.s3.ap-northeast-2.amazonaws.com/Wish+On+The+Wind(Prelude+Mix).mp3";
    // When Click PlayButton
    const playBtnEvent = () => {
        if(isAudioPlayVisible.display === "none") {
            setIsAudioPlayVisible(isAudioPlayVisible => ({
                display: "block",
                playButtonClassNames: "btn btn-outline-primary"
            }));
        } else {
            setIsAudioPlayVisible(isAudioPlayVisible => ({
                display: "none",
                playButtonClassNames: "btn btn-primary"
            }));
        }
    }

    return (
        <Body>
            <SummaryLayer>
                <TrackNumber>{trackNumber}</TrackNumber>
                <Title>{musicName}</Title>
                <ButtonLayer>
                    <ButtonDiv><button type="button" className={isAudioPlayVisible.playButtonClassNames} onClick={playBtnEvent}>Play</button></ButtonDiv>
                    <ButtonDiv><button type="button" className="btn btn-dark">Download</button></ButtonDiv>
                </ButtonLayer>
            </SummaryLayer>
            <AudioLayer><AudioPlayer src={musicUrl} /></AudioLayer>
            
        </Body>
    );
}
const Body = styled.li`
    width: 90%;
    height: auto;
    background-color: white;
    list-style: none;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
    box-shadow: 7px 5px 5px gray;
`
const SummaryLayer = styled.div`
    height: 50px;
`
const TrackNumber = styled.h5`
    float: left;
    padding-top: 5px;
    margin-left: 10px;
    color: red;
`
const Title = styled.h5`
    float: left;
    padding-top: 5px;
    margin-left: 10px;
`
const ButtonLayer = styled.div`
`
const ButtonDiv = styled.div`
    float: right;
    margin-left: 15px;
`
const MusicLayer = styled.div`
    clear: both;
`
export default TrackSong;