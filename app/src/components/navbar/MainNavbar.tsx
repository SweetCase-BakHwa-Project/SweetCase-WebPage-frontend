import React from 'react';
import styled from 'styled-components';
import {IsPC, IsMobile} from '../../configs/ResponseWebRange';

const MainNavbar: React.FC = () => {
    return (
        <MainNavbarStyle>
            { 
                IsPC() && 
                <div>
                </div>
            }
            {
                IsMobile() &&
                <div>
                    <MobileMainTitle>SWEETCASE</MobileMainTitle>
                </div>
            }

        </MainNavbarStyle>
    );
}
export default MainNavbar;

const MainNavbarStyle = styled.nav`
    left: 0;
    right: 0;
    background-color: #0E6AC7;
    width: 100%;
    height: 50px;
`

// PC

// Mobile
const MobileMainTitle = styled.p`
    font-size: 30px;
    text-align: center;
`