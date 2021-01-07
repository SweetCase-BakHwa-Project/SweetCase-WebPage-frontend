import React from 'react';
import styled from 'styled-components';

const Sheet: React.FC<{
    sheetName: string,
    createDate: string,
    link: string
}> = ({ sheetName, createDate, link}) => {
    return (
        <Body>
            <Title>{sheetName}</Title>
            <DateText>{createDate}</DateText>
            <DownloadDiv><button type="button" className="btn btn-dark" onClick={() => {
                window.open(
                    link, "_blank"
                );
            }}>Download</button></DownloadDiv>
        </Body>
    );
}
const Body = styled.li`
    width: 70%;
    height: 50px;
    background-color: white;
    list-style: none;
    text-size: 20px;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 7px 5px 5px gray;
    margin: 5px;
`

const Title = styled.p`
    float: left;
    width: 60%;
    height 100%;
`
const DateText = styled.p`
    float: left;
    width: 30%;
    height: 100%
`
const DownloadDiv = styled.div`
    width: 10%;
    height: 100%;
    float: right;
    margin-top: -10px;
`
export default Sheet;