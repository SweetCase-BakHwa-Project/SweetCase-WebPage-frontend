import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import BakhwaProject from './pages/BakhwaProject';
import SweetCase from './pages/SweetCase';
import AlbumPage from './pages/bakhwa/AlbumPage';
import AlbumInfo from './pages/bakhwa/AlbumInfoPage';
import MusicSheets from './pages/bakhwa/MusicSheetsPage';

const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route  path="/bakhwaproject/albums/info/:albumName" component={AlbumInfo} />
                    <Route  exact path="/bakhwaproject/albums" component={AlbumPage} />
                    <Route  exact path="/bakhwaproject/musicsheets" component={MusicSheets} />
                     
                    <Route exact path="/sweetcase" component={SweetCase} />
                    <Route exact path="/bakhwaproject" component={BakhwaProject} />
                    <Route exact path="/" component={Home}  />
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;