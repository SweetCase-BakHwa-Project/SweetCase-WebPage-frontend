import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import TitleImg from '../img/all_logo.png';

import '../fonts/fonts.css'

/* Mouse Events in Button */
const sweetCaseButtonMouseEnterEvent = () => {

}
const  sweetCaseButtonMouseLeaveEvent = () => {

}
const bakhwaButtonMouseEnterEvent = () => {
}
const bakhwaButtonMouseLeaveEvent = () => {

}

const Home: React.FC = () => {

    return (
        <Main>
            <Helmet>
                <title>SWEETCASE</title>
            </Helmet>
            <Title><img src={TitleImg} width="400"/></Title>
            <Line />
            <MainSection>
                <ButtonLayer>
                    <SweetCaseButton
                        onMouseEnter={sweetCaseButtonMouseEnterEvent}
                        onMouseLeave={sweetCaseButtonMouseLeaveEvent} >
                        SweetCase
                    </SweetCaseButton>
                    <BakhwaProjectButton
                        onMouseEnter={bakhwaButtonMouseEnterEvent}
                        onMouseLeave={bakhwaButtonMouseLeaveEvent} >
                        白花 PROJECT
                    </BakhwaProjectButton>
                </ButtonLayer>
            </MainSection>
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    height: 100%;
`

const Line = styled.div`
    margin: 10px;
    width: 99%;
    height: 2px;
    background-color: #0E6AC7
`

const Title  = styled.div`
    width: 400px;
    left: 100px;
    margin: 0 auto;
    padding-top: 20px;
`
const MainSection = styled.div`
    margin: 10px;
`
const ButtonLayer = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
    
`
const SweetCaseButton = styled.div`
    float: left;
    width: 49%;
    text-align: center;
    background-color: white;
    color: black;
    font-size: 30pt;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 10px;
    font-family: "Android_101";
    cursor: pointer;
    box-shadow: 5px 8px 8px #000000;
`
const BakhwaProjectButton = styled.div`
    float: left;
    width: 49%;
    text-align: center;
    background-color: white;
    color: black;
    font-size: 30pt;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
    font-family: 'Nanum Myeongjo', serif;
    cursor: pointer;
    box-shadow: 5px 8px 8px #000000;
    
`
export default Home;