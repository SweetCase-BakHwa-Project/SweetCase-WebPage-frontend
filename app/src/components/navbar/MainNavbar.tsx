import React from 'react';
import styled from 'styled-components';
import {IsPC, IsMobile} from '../../configs/ResponseWebRange';
import '../../fonts/fonts.css';

import SweetcaseTitle from '../../img/sweetcasetitle.gif';
import webColor from '../../config.json';

const MainNavbar: React.FC = () => {
    return (
        <MainNavbarStyle>
            { 
                IsPC() && 
                <div>
                    <MainNavbarStyle>
                        <ItemInPC><img src={SweetcaseTitle} height="15px"/></ItemInPC>
                        <ItemInPC>introduce</ItemInPC>

                        <CobaltoLinkInPC>cobalto</CobaltoLinkInPC>
                        <BakhwaLinkInPC>白花 PROJECT</BakhwaLinkInPC>
                    </MainNavbarStyle>
                </div>
            }
            {
                IsMobile() &&
                <div>
                </div>
            }

        </MainNavbarStyle>
    );
}
export default MainNavbar;

const MainNavbarStyle = styled.nav`
    background-color: white;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid gray;
`

// PC
const ItemInPC = styled.div`
    float: left;
    margin-left: 30px;
    padding-top: 10px;
    font-family: Android_101;
    font-size: 25px;
    cursor: pointer;
`
const BakhwaLinkInPC = styled.div`
    float: right;
    margin-right: 30px;
    padding-top: 10px;
    font-family: 'Nanum Myeongjo', serif;
    font-size: 25px;
    color: ${webColor.colors.bakhwa.main};
    cursor: pointer;

`
const CobaltoLinkInPC = styled.div`
    float: right;
    margin-right: 30px;
    padding-top: 10px;
    font-family: Android_101;
    font-size: 25px;
    color: ${webColor.colors.cobalto.main};
    cursor: pointer;
`
// Mobile