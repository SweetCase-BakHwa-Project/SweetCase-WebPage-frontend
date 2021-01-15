import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../fonts/fonts.css";

const NavStyle = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    box-shadow: 10px 10px 10px black;
`
const FontSweetCaseWords = styled.a`
    font-family: 'Noto Sans KR', sans-serif;
`
const FontSweetCaseProject = styled.a`
    font-family: "Android_101";
`
const FontBakhwaProject = styled.a`
    font-family: 'Nanum Myeongjo', serif;
`

const MainNavbar: React.FC = () => {

    return (
        <NavStyle className="navbar navbar-expand-lg navbar-dark bg-primary">
            <FontSweetCaseWords className="navbar-brand" >SweetCase Words</FontSweetCaseWords>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/sweetcase" style={{ textDecoration: 'none' }}>
                            <FontSweetCaseProject className="nav-link" >SweetCase PROJECT</FontSweetCaseProject>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bakhwaproject" style={{ textDecoration: 'none' }}>
                            <FontBakhwaProject className="nav-link" href="#">白花 PROJECT</FontBakhwaProject>
                        </Link>
                    </li>
                </ul>
            </div>
        </NavStyle>
    );
}
export default MainNavbar;