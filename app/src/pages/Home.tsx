import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

import TitleImg from '../img/all_logo.png';
import SweetLogo from '../img/sweetcase-img.gif';
import BakhwaLogo from '../img/bakhwaproject-img.gif';

import Footer from '../components/footer';

import '../fonts/fonts.css'


const Home: React.FC = () => {

    // SweetCase state section
    const [ sweetcaseButtonBackgroundColor, setSweetcaseButtonBackgroundColor ] = useState('white');
    const [ sweetcaseButtonFontColor, setSweetcaseButtonFontColor ] = useState('#0E6AC7');

    const [ isSweetcaseDisplayed, setIsSweetcaseDisplayed ] = useState('block');

    // BakhwaProject state section
    const [ bakhwaButtonBackgroundColor, setBackhwaButtonBackgroundColor] = useState("white");
    const [ bakhwaButtonFontColor, setBakhwaButtonFontColor ] = useState('#0E6AC7');

    const [ isBakhwaDisplayed, setIsBakhwaDisplayed ] = useState('none');
    

    // Display Layer State
    const [ displayImg, setDisplayImg ] = useState(SweetLogo);

    // CSS Components (Basic)
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
        margin-top: 10px;
        margin-bottom: 50px;
    `
    const ButtonLayer = styled.div`
        margin-top: 30px;
        margin-left: 100px;
        margin-right: 100px;

        `
    const SweetCaseButton = styled.div`
        float: left;
        width: 49%;
        text-align: center;
        background-color: ${sweetcaseButtonBackgroundColor};
        color: ${sweetcaseButtonFontColor};
        font-size: 30pt;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 10px;
        font-family: "Android_101";
        cursor: pointer;
        box-shadow: 5px 8px 8px #000000;

        margin-bottom: 30px;
    `
    const BakhwaProjectButton = styled.div`
        float: left;
        width: 49%;
        text-align: center;
        background-color: ${bakhwaButtonBackgroundColor};
        color: ${bakhwaButtonFontColor};
        font-size: 30pt;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 10px;
        font-family: 'Nanum Myeongjo', serif;
        cursor: pointer;
        box-shadow: 5px 8px 8px #000000;

        margin-bottom: 30px;
    `

    // Display Container
    const DisplayLayer = styled.div`
        clear: both;

        height: 470px;
        width: auto;
        
        margin-left: 100px;
        margin-right: 100px;

        box-shadow: 5px 8px 8px  #0E6AC7;
    `

    const BakhwaProjectDisplayLayer = styled.div`
        font-family: 'Nanum Myeongjo', serif;
        background-color: white;
        display: ${isBakhwaDisplayed};
    `
    const SweetcaseDisplayLayer = styled.div`
        background-color: white;
        font-family: "Android_101";
        display: ${isSweetcaseDisplayed};
    `
    const SectionImg = styled.img`
        float: left;
        width: 500px;
    `
    // In Summary
    const SectionTextLayer = styled.div`
        float: left;
    `
    const ProjectTitle = styled.p`
        font-size: 50px;
        text-aligh: right;
    `
    const SinceText = styled.p`
        margin-top: -30px;
    `
    const ProjectSummary = styled.div`
        font-size: 25px;
        margin-top: 100px;
    `

    // Events
    /* Mouse Events in Button */
    const sweetCaseButtonMouseEnterEvent = () => {

        setSweetcaseButtonBackgroundColor('#0E6AC7');
        setSweetcaseButtonFontColor('white');
        setDisplayImg(SweetLogo);
        bakhwaButtonMouseLeaveEvent();

        setIsSweetcaseDisplayed('block');
        setIsBakhwaDisplayed('none');

    }
    const  sweetCaseButtonMouseLeaveEvent = () => {

        setSweetcaseButtonBackgroundColor('white');
        setSweetcaseButtonFontColor('#0E6AC7');
    }
    const bakhwaButtonMouseEnterEvent = () => {

        setBackhwaButtonBackgroundColor('#0E6AC7');
        setBakhwaButtonFontColor('white');
        setDisplayImg(BakhwaLogo);
        sweetCaseButtonMouseLeaveEvent();
        
        setIsSweetcaseDisplayed('none');
        setIsBakhwaDisplayed('block');
    }
    const bakhwaButtonMouseLeaveEvent = () => {
        setBackhwaButtonBackgroundColor('white');
        setBakhwaButtonFontColor('#0E6AC7');
    }

    return (
        <Main>
            <Helmet>
                <title>SWEETCASE</title>
            </Helmet>
            <Title><img src={TitleImg} width="400"/></Title>
            <Line />
            <MainSection>
                <ButtonLayer>
                    <Link to="/sweetcase"><SweetCaseButton
                        onMouseEnter={sweetCaseButtonMouseEnterEvent}
                        onMouseLeave={sweetCaseButtonMouseLeaveEvent} 
                        >
                        SweetCase
                    </SweetCaseButton></Link>
                    <Link to="/bakhwaproject"><BakhwaProjectButton
                        onMouseEnter={bakhwaButtonMouseEnterEvent}
                        onMouseLeave={bakhwaButtonMouseLeaveEvent} >
                        白花 PROJECT
                    </BakhwaProjectButton></Link>
                </ButtonLayer>
                <DisplayLayer>

                    <SweetcaseDisplayLayer>
                        <SectionImg src={displayImg} />
                        <SectionTextLayer>
                            <ProjectTitle>SweetCase Project</ProjectTitle>
                            <SinceText>since 2019</SinceText>
                            <ProjectSummary>
                                <p>SOFTWARE PROJECT</p>
                                <p>ANDROID/DOCKER-PACKAGE/WEB-APP/IOT</p>
                            </ProjectSummary>
                        </SectionTextLayer>
                    </SweetcaseDisplayLayer>

                    <BakhwaProjectDisplayLayer>
                        <SectionImg src={displayImg} />
                        <SectionTextLayer>
                            <ProjectTitle>白花 PROJECT</ProjectTitle>
                            <SinceText>since 2015</SinceText>
                            <ProjectSummary>
                                <p>PURE MUSIC PROJECT</p>
                                <p>CLASSIC/PIANO-ETUDE/NEW-AGE</p>
                            </ProjectSummary>
                        </SectionTextLayer>
                    </BakhwaProjectDisplayLayer>

                </DisplayLayer>
            </MainSection>
            <Footer backgroundcolor="#0E6AC7" />
        </Main>
    );
    
}

export default Home;