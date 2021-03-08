import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import MainNavbar from "../components/navbar/MainNavbar";

const Main = styled.div`
    width: 100%;
    height: 100%;
`

const PageHome: React.FC = () => {
    return (
        <Main>
            <Helmet>
                <title>SWEETCASE</title>
            </Helmet>

            <MainNavbar />

        </Main>
    );
}

export default PageHome;