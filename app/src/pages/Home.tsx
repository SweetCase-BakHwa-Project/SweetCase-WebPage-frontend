import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

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
        </Main>
    );
}

export default PageHome;