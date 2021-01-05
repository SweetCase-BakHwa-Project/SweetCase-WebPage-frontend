import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

const NavTitle = styled.div`
    color: white;
    font-size: 25px;
`
const Navbar: React.FC<{
    album: string,
    musicSheet: string,
    about: string
}> = ({
    album,
    musicSheet,
    about
}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/bakhwaproject"><NavTitle>白化 Project</NavTitle></a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className={album} aria-current="page" href="/bakhwaproject/albums">Albums</a>
                        </li>
                        <li className="nav-item">
                            <a className={musicSheet} href="/">MusicSheets</a>
                        </li>
                        <li className="nav-item">
                            <a className={about} href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;