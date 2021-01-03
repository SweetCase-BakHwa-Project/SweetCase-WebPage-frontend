import { url } from 'inspector';
import React from 'react';
import styled from 'styled-components';

import TitleImg from '../img/all_logo.png';


const Home: React.FC = () => {

    return (
        <Main>
            <Title><img src={TitleImg} width="400"/></Title>
            <Line />
            <SelectSection>

            </SelectSection>
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
const SelectSection = styled.div`
`

export default Home;