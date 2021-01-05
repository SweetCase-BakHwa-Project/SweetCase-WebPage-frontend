import React from 'react';
import styled from 'styled-components';

const Album: React.FC<{
    albumName: string,
    createDate: string,
    albumImgUrl: string
}> = ({
    albumName,
    createDate,
    albumImgUrl
}) => {
    const Body = styled.div`
        background-color: white;
        width: 240px;
        height: 340px;
        margin: 5px;
        float: left;
        box-shadow: 5px 2px 2px gray;
    `
    var displayedAlbumName = albumName;
    if(albumName.length > 40) {
        displayedAlbumName  = displayedAlbumName.slice(0, 35) + "...";
    }
    return (
        <Body>
            <InBody>
                <AlbumImage src={albumImgUrl}/>
                <Line />
                <AlbumTitle>{displayedAlbumName}</AlbumTitle>
                <AlbumDate>{createDate}</AlbumDate>
            </InBody>
        </Body>
    );
}
const InBody = styled.div`
    margin: 5px;
    width: 230px;
    height: 320px;
    border: 1px solid black;
    position: relative;
`
const AlbumImage = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
`
const Line = styled.div`
    width: 200px;
    height: 1px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
`
const AlbumTitle = styled.p`
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 15px;
`
const AlbumDate = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 0.5em;
    font-size: 12px;
    text-align: center;
    width: 100%;
`
export default Album;