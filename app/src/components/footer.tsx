import React from 'react';
import styled from 'styled-components';



import IconGithub from '../img/GitHub-Mark-Light-32px.png';
import SoundCloudLogo from '../img/soundcloud-logo.gif';
import TistoryLogo from '../img/tistory-logo.gif';

const Footer: React.FC<{backgroundcolor:string}> = ({backgroundcolor}) => {
    const FooterLayer = styled.div`
        bottom: 0;
        left: 0;

        width: 100%;
        height: 150px;

        padding: 10px;

        background-color: ${backgroundcolor};
        color: white;

        text-align: center;
    `
    const LinkIconsLayer = styled.div`
        position: absolute;
        margin-top: 40px;
        left: 50%;
        margin-left: -80px;
    `
    const LinkIcon = styled.a`
        float: left;
        margin-right: 20px;
    `

    const LinkIconImg = styled.img`
        width: 40px;
        float: left;
    
    `
    const CopyRight = styled.p`
        clear: both;
        margin-top: 100px;
    `

    return (
        <FooterLayer>
             <LinkIconsLayer>
                <LinkIcon href="https://github.com/SweetCase-BakHwa-Project" target="_blank"><LinkIconImg src={IconGithub} /></LinkIcon>
                <LinkIcon href="https://soundcloud.com/dj4zokfdkjb5" target="_blank"><LinkIconImg src={SoundCloudLogo} /></LinkIcon>
                <LinkIcon href="https://sweetcase.tistory.com/" target="_blank"><LinkIconImg src={TistoryLogo} /></LinkIcon>

            </LinkIconsLayer>
                
            <CopyRight>Copyright 2015, 2020, 2021. SweetCase, 白花 Project. All rights Reserved.</CopyRight>
        </FooterLayer>
    );
}
export default Footer;